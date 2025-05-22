import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import styles from './fonts-modal.css';

const AddButton = props => (
    <button
        onClick={props.onClick}
        disabled={props.disabled}
        className={styles.button}
    >
        <FormattedMessage
            defaultMessage="Add"
            description="Part of font management modal. This is the button that will actually add the font."
            id="tw.fonts.add"
        />
    </button>
);

AddButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool
};

export default AddButton;
