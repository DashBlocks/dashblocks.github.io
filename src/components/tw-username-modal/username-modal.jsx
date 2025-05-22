import {defineMessages, FormattedMessage, intlShape, injectIntl} from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';
import Box from '../box/box.jsx';
import Modal from '../../containers/modal.jsx';
import classNames from 'classnames';

import styles from './username-modal.css';
import isScratchDesktop from '../../lib/isScratchDesktop.js';

const messages = defineMessages({
    title: {
        defaultMessage: 'Change Username',
        description: 'Title change username modal',
        id: 'tw.usernameModal.title'
    }
});

const UsernameModalComponent = props => (
    <Modal
        className={styles.modalContent}
        onRequestClose={props.onCancel}
        contentLabel={props.intl.formatMessage(messages.title)}
        id="usernameModal"
    >
        <Box className={styles.body}>
            {props.mustChangeUsername && <React.Fragment>
                <p className={classNames(styles.helpText, styles.mustChange)}>
                    <FormattedMessage
                        // eslint-disable-next-line max-len
                        defaultMessage="Sorry, the cloud variable server thinks your username may be unsafe. Please change it to something else or {resetIt}."
                        description="Text in change username modal"
                        id="tw.usernameModal.mustChange"
                        values={{
                            resetIt: (
                                <a
                                    className={styles.resetLink}
                                    onClick={props.onReset}
                                >
                                    <FormattedMessage
                                        defaultMessage="reset it (recommended)"
                                        description="link to reset username"
                                        id="tw.usernameModal.mustChange.resetIt"
                                    />
                                </a>
                            )
                        }}
                    />
                </p>
            </React.Fragment>}
            {isScratchDesktop() ? (
                <p className={styles.helpText}>
                    <FormattedMessage
                        defaultMessage="New username:"
                        description="Appears in the username changing modal in the desktop app"
                        id="tw.usernameModal.new"
                    />
                </p>
            ) : null}
            <Box>
                <input
                    autoFocus
                    className={styles.textInput}
                    value={props.value}
                    onChange={props.onChange}
                    onFocus={props.onFocus}
                    onKeyPress={props.onKeyPress}
                    pattern="[a-zA-Z0-9_\-]*"
                    maxLength="20"
                    spellCheck="false"
                />
            </Box>
            {isScratchDesktop() ? (
                null
            ) : (
                <React.Fragment>
                    <p className={styles.helpText}>
                        <FormattedMessage
                            // eslint-disable-next-line max-len
                            defaultMessage="This value will be stored in your browser's storage. It may be logged when you interact with projects that contain cloud variables."
                            description="Text in change username modal"
                            id="tw.usernameModal.help"
                        />
                    </p>
                    <p className={styles.helpText}>
                        <FormattedMessage
                            // eslint-disable-next-line max-len
                            defaultMessage="Values that do not correspond to a valid Scratch account will typically be rejected by the cloud variable server. We recommend leaving it as-is or changing it to your Scratch username."
                            description="Text in change username modal"
                            id="tw.usernameModal.help2"
                        />
                    </p>
                </React.Fragment>
            )}
            <Box className={styles.buttonRow}>
                <button
                    className={styles.cancelButton}
                    onClick={props.onReset}
                >
                    <FormattedMessage
                        defaultMessage="Reset"
                        description="Button in username modal to reset username to random"
                        id="tw.usernameModal.reset"
                    />
                </button>
                <button
                    className={styles.cancelButton}
                    onClick={props.onCancel}
                >
                    <FormattedMessage
                        defaultMessage="Cancel"
                        description="Button in prompt for cancelling the dialog"
                        id="gui.prompt.cancel"
                    />
                </button>
                <button
                    className={styles.okButton}
                    onClick={props.onOk}
                    disabled={!props.valueValid}
                >
                    <FormattedMessage
                        defaultMessage="OK"
                        description="Button in prompt for confirming the dialog"
                        id="gui.prompt.ok"
                    />
                </button>
            </Box>
        </Box>
    </Modal>
);

UsernameModalComponent.propTypes = {
    intl: intlShape,
    mustChangeUsername: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    valueValid: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    onKeyPress: PropTypes.func.isRequired,
    onOk: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired
};

export default injectIntl(UsernameModalComponent);
