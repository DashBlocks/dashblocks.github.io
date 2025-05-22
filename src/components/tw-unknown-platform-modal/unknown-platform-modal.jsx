import {defineMessages, FormattedMessage, intlShape, injectIntl} from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';
import {APP_NAME} from '../../lib/brand.js';
import Modal from '../../containers/modal.jsx';
import styles from './unknown-platform-modal.css';

const messages = defineMessages({
    title: {
        defaultMessage: 'Unknown Platform',
        description: 'Title of modal that appears when loading a project made with another mod',
        id: 'tw.unknownPlatform.title'
    }
});

const platformToString = platform => {
    if (!platform) {
        return '(?)';
    }
    if (platform.name && platform.url) {
        return `${platform.name} (${platform.url})`;
    } else if (platform.name) {
        return `${platform.name}`;
    } else if (platform.url) {
        return `${platform.url}`;
    }
    return '(?)';
};

const UnknownPlatformModal = props => (
    <Modal
        className={styles.modalContent}
        onRequestClose={props.onClose}
        contentLabel={props.intl.formatMessage(messages.title)}
        id="unknownPlatformModal"
    >
        <div className={styles.body}>
            <p>
                <FormattedMessage
                    defaultMessage="The project was made for a different platform:"
                    // eslint-disable-next-line max-len
                    description="Text in modal that appears when loading a project made for another mod. Followed by some information about the other mod."
                    id="tw.unknownPlatform.1"
                />
            </p>

            <p className={styles.details}>
                {platformToString(props.platform)}
            </p>

            <p>
                <FormattedMessage
                    // eslint-disable-next-line max-len
                    defaultMessage="Compatibility with {APP_NAME} is not guaranteed. You can continue at your own risk, but we may not be able to help if you encounter any problems."
                    // eslint-disable-next-line max-len
                    description="Text in modal that appears when loading a project made for another mod."
                    id="tw.unknownPlatform.2"
                    values={{
                        APP_NAME
                    }}
                />
            </p>

            <button
                className={styles.button}
                onClick={props.onClose}
                disabled={!props.canClose}
            >
                <FormattedMessage
                    defaultMessage="I understand"
                    // eslint-disable-next-line max-len
                    description="Button in modal that appears when loading a project made for another mod. Allows ignoring the warning."
                    id="tw.unknownPlatform.continue"
                />
            </button>
        </div>
    </Modal>
);

UnknownPlatformModal.propTypes = {
    intl: intlShape,
    onClose: PropTypes.func.isRequired,
    canClose: PropTypes.bool,
    platform: PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string
    })
};

export default injectIntl(UnknownPlatformModal);
