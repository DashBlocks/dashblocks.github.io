import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import {MenuItem} from '../menu/menu.jsx';
import icon from './tw-desktop-icon.svg';
import styles from './settings-menu.css';

const TWDesktopSettings = props => (
    <MenuItem onClick={props.onClick}>
        <div className={styles.option}>
            <img
                src={icon}
                draggable={false}
                width={24}
                height={24}
                alt=""
            />
            <FormattedMessage
                defaultMessage="Desktop Settings"
                description="Button in menu bar under settings to open desktop app settings"
                id="tw.menuBar.desktopSettings"
            />
        </div>
    </MenuItem>
);

TWDesktopSettings.propTypes = {
    onClick: PropTypes.func
};

export default TWDesktopSettings;
