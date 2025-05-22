import {defineMessages, FormattedMessage, intlShape, injectIntl} from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';
import Modal from '../../containers/modal.jsx';
import styles from './invalid-project-modal.css';

const messages = defineMessages({
    title: {
        defaultMessage: 'Error',
        description: 'Title of modal that appears when a project could not be loaded',
        id: 'tw.invalidProject.title'
    }
});

const formatError = error => {
    let message;
    if (error && error.stack) {
        message = `${error}\n\nStack:\n${error.stack}`;
    } else {
        message = `${error}`;
    }
    return `${message}\n\n---\n\nURL: ${location.href}\nUser-Agent: ${navigator.userAgent}`;
};

const InvalidProjectModal = props => (
    <Modal
        className={styles.modalContent}
        onRequestClose={props.onClose}
        contentLabel={props.intl.formatMessage(messages.title)}
        id="invalidProjectModal"
    >
        <div className={styles.body}>
            <p>
                <FormattedMessage
                    defaultMessage="Could not load project:"
                    // eslint-disable-next-line max-len
                    description="Part of modal that appears when a project could not be loaded. Followed by error message."
                    id="tw.invalidProject.error"
                />
            </p>

            <textarea
                className={styles.error}
                readOnly
                autoComplete="off"
                spellCheck={false}
                value={formatError(props.error)}
            />

            {formatError(props.error).includes('validationError') && (
                <p>
                    <FormattedMessage
                        // eslint-disable-next-line max-len
                        defaultMessage="This error often means that a small part of the project has been corrupted, but that it is otherwise valid. This can be easy to fix, so please {reportIt}."
                        // eslint-disable-next-line max-len
                        description="Part of modal that appears when a project could not be loaded. {reportIt} becomes a link 'report it'."
                        id="tw.invalidProject.validationError"
                        values={{
                            reportIt: (
                                <a
                                    href="https://github.com/TurboWarp/sb3fix/issues"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FormattedMessage
                                        defaultMessage="report it"
                                        // eslint-disable-next-line max-len
                                        description="Part of modal that appears when a project could not be loaded. Used in context 'Please report this as this is ...'"
                                        id="tw.invalidProject.reportIt"
                                    />
                                </a>
                            )
                        }}
                    />
                </p>
            )}

            <p>
                <FormattedMessage
                    // eslint-disable-next-line max-len
                    defaultMessage="You may be able to recover an older version of the project from automatic restore points or other backups."
                    description="Part of modal that appears when a project could not be loaded."
                    id="tw.invalidProject.options"
                />
            </p>

            <button
                className={styles.button}
                onClick={props.onClickRestorePoints}
            >
                <FormattedMessage
                    defaultMessage="View Restore Points"
                    // eslint-disable-next-line max-len
                    description="Part of modal that appears when a project could not be loaded. This is a button that opens the restore point menu."
                    id="tw.invalidProject.restorePoints"
                />
            </button>
        </div>
    </Modal>
);

InvalidProjectModal.propTypes = {
    intl: intlShape,
    onClose: PropTypes.func,
    onClickRestorePoints: PropTypes.func,
    error: PropTypes.any
};

export default injectIntl(InvalidProjectModal);
