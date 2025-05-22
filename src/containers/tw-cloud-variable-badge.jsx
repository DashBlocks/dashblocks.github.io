import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setCloudHost} from '../reducers/tw';
import CloudVariableBadge from '../components/tw-cloud-variable-badge/cloud-variable-badge.jsx';
import bindAll from 'lodash.bindall';
import {openUsernameModal} from '../reducers/modals';

class TWCloudVariableBadge extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleChangeCloudHost'
        ]);
    }

    handleChangeCloudHost (cloudHost) {
        this.props.onSetCloudHost(cloudHost);
    }

    render () {
        return (
            <CloudVariableBadge
                cloudHost={this.props.cloudHost}
                onSetCloudHost={this.handleChangeCloudHost}
                onOpenChangeUsername={this.props.onOpenChangeUsername}
            />
        );
    }
}

TWCloudVariableBadge.propTypes = {
    cloudHost: PropTypes.string,
    onSetCloudHost: PropTypes.func,
    onOpenChangeUsername: PropTypes.func
};

const mapStateToProps = state => ({
    cloudHost: state.scratchGui.tw.cloudHost
});

const mapDispatchToProps = dispatch => ({
    onSetCloudHost: cloudHost => dispatch(setCloudHost(cloudHost)),
    onOpenChangeUsername: () => dispatch(openUsernameModal())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TWCloudVariableBadge);
