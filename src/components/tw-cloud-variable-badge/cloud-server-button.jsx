import React from 'react';
import PropTypes from 'prop-types';
import styles from './cloud-variable-badge.css';
import bindAll from 'lodash.bindall';
import classNames from 'classnames';

class CloudServerButton extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleClick'
        ]);
    }

    handleClick () {
        this.props.onClick(this.props.cloudHost);
    }

    render () {
        return (
            <button
                className={classNames(styles.server, {[styles.selected]: this.props.selected})}
                onClick={this.handleClick}
                title={this.props.cloudHost}
            >
                {this.props.name}
            </button>
        );
    }
}

CloudServerButton.propTypes = {
    cloudHost: PropTypes.string,
    name: PropTypes.string,
    selected: PropTypes.bool,
    onClick: PropTypes.func
};

export default CloudServerButton;
