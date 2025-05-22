import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import bindAll from 'lodash.bindall';
import {closeUnknownPlatformModal} from '../reducers/modals';
import UnknownPlatformModalComponent from '../components/tw-unknown-platform-modal/unknown-platform-modal.jsx';

class TWUnknownPlatformModal extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleClose'
        ]);
        this.state = {
            canClose: false
        };
    }

    componentDidMount () {
        // Make it harder to accidentally dismiss without reading
        setTimeout(() => {
            this.setState({
                canClose: true
            });
        }, 1000);
    }

    handleClose () {
        if (this.state.canClose) {
            this.props.callback();
            this.props.onClose();
        }
    }

    render () {
        return (
            <UnknownPlatformModalComponent
                onClose={this.handleClose}
                platform={this.props.platform}
                canClose={this.state.canClose}
            />
        );
    }
}

TWUnknownPlatformModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    platform: PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string
    }),
    callback: PropTypes.func
};

const mapStateToProps = state => ({
    vm: state.scratchGui.vm,
    callback: state.scratchGui.tw.platformMismatchDetails.callback,
    platform: state.scratchGui.tw.platformMismatchDetails.platform
});

const mapDispatchToProps = dispatch => ({
    onClose: () => dispatch(closeUnknownPlatformModal())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TWUnknownPlatformModal);
