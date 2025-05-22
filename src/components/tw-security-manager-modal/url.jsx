import React from 'react';
import PropTypes from 'prop-types';
import styles from './url.css';

const MAX_URL_LENGTH = 100;

/**
 * @param {string} url URL
 * @returns {string} trimmed URL
 */
const trimURL = url => (url.length > MAX_URL_LENGTH ? `${url.substring(0, MAX_URL_LENGTH)}...` : url);

const URL = ({url}) => (
    <p className={styles.url}>
        {trimURL(url)}
    </p>
);

URL.propTypes = {
    url: PropTypes.string.isRequired
};

export default URL;
