import React from 'react';
import PropTypes from 'prop-types';
import styles from './fonts-modal.css';
import bindAll from 'lodash.bindall';

// TODO: is this something to localize?
const QUICK_BROWN_FOX = 'The quick brown fox jumps over the lazy dog.';

class FontPlayground extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleChange'
        ]);
        this.state = {
            value: QUICK_BROWN_FOX
        };
    }

    handleChange (e) {
        this.setState({
            value: e.target.value
        });
    }

    render () {
        return (
            <textarea
                className={styles.fontPlayground}
                value={this.state.value}
                onChange={this.handleChange}
                placeholder={QUICK_BROWN_FOX}
                style={{
                    fontFamily: this.props.family
                }}
            />
        );
    }
}

FontPlayground.propTypes = {
    family: PropTypes.string.isRequired
};

export default FontPlayground;
