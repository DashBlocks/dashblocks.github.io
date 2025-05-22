import bindAll from 'lodash.bindall';
import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import VM from 'scratch-vm';
import Box from '../components/box/box.jsx';
import greenFlag from '../components/green-flag/icon--green-flag.svg';
import {setStartedState} from '../reducers/vm-status.js';

class GreenFlagOverlay extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleClick'
        ]);
    }

    handleClick () {
        this.props.vm.start();
        this.props.vm.greenFlag();

        // FIXME: some unknown edge cases are causing start() to be called but for the
        // RUNTIME_STARTED listener to not update redux, causing this to always be
        // shown and never go away. this is a temporary hack to avoid that...
        this.props.onStarted();
    }

    render () {
        return (
            <Box
                className={this.props.wrapperClass}
                onClick={this.handleClick}
            >
                <div className={this.props.className}>
                    <img
                        draggable={false}
                        src={greenFlag}
                    />
                </div>
            </Box>

        );
    }
}

GreenFlagOverlay.propTypes = {
    className: PropTypes.string,
    vm: PropTypes.instanceOf(VM),
    wrapperClass: PropTypes.string,
    onStarted: PropTypes.func
};

const mapStateToProps = state => ({
    vm: state.scratchGui.vm
});

const mapDispatchToProps = dispatch => ({
    onStarted: () => dispatch(setStartedState(true))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GreenFlagOverlay);
