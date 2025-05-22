import React from 'react';
import PropTypes from 'prop-types';
import bindAll from 'lodash.bindall';
import styles from './fonts-modal.css';

class FontDropdownItem extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleSelect'
        ]);
    }

    handleSelect () {
        this.props.onSelect(this.props.family);
    }

    render () {
        return (
            <div
                className={styles.fontDropdownItem}
                title={this.props.family}
                style={{
                    fontFamily: this.props.family
                }}
                onMouseDown={this.handleSelect}
            >
                {this.props.family}
            </div>
        );
    }
}

FontDropdownItem.propTypes = {
    family: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default FontDropdownItem;
