import {defineMessages, FormattedMessage, intlShape, injectIntl} from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';
import Box from '../box/box.jsx';
import Modal from '../../containers/modal.jsx';
import FileInput from './file-input.jsx';
import styles from './custom-extension-modal.css';
import FancyCheckbox from '../tw-fancy-checkbox/checkbox.jsx';
import {APP_NAME} from '../../lib/brand';

const messages = defineMessages({
    title: {
        defaultMessage: 'Load Custom Extension',
        description: 'Title of custom extension menu',
        id: 'tw.customExtensionModal.title'
    }
});

const CustomExtensionModal = props => (
    <Modal
        className={styles.modalContent}
        onRequestClose={props.onClose}
        contentLabel={props.intl.formatMessage(messages.title)}
        id="customExtensionModal"
    >
        <Box
            className={styles.body}
            onDragOver={props.onDragOver}
            onDragLeave={props.onDragLeave}
            onDrop={props.onDrop}
        >
            <div className={styles.typeSelectorContainer}>
                <div
                    className={styles.typeSelectorButton}
                    data-active={props.type === 'url'}
                    onClick={props.onSwitchToURL}
                    tabIndex={0}
                >
                    <FormattedMessage
                        defaultMessage="URL"
                        // eslint-disable-next-line max-len
                        description="Button to choose to load an extension from a remote URL. Not much space, so keep this short."
                        id="tw.customExtensionModal.url"
                    />
                </div>
                <div
                    className={styles.typeSelectorButton}
                    data-active={props.type === 'file'}
                    onClick={props.onSwitchToFile}
                    tabIndex={0}
                >
                    <FormattedMessage
                        defaultMessage="Files"
                        // eslint-disable-next-line max-len
                        description="Button to choose to load an extension from one or more local files. Not much space, so keep this short."
                        id="tw.customExtensionModal.file"
                    />
                </div>
                <div
                    className={styles.typeSelectorButton}
                    data-active={props.type === 'text'}
                    onClick={props.onSwitchToText}
                    tabIndex={0}
                >
                    <FormattedMessage
                        defaultMessage="Text"
                        // eslint-disable-next-line max-len
                        description="Button to choose to load an extension from a text input. Not much space, so keep this short."
                        id="tw.customExtensionModal.text"
                    />
                </div>
            </div>

            {props.type === 'url' ? (
                <React.Fragment key={props.type}>
                    <p>
                        <FormattedMessage
                            defaultMessage="Enter the extension's URL:"
                            description="Label that appears when loading a custom extension from a URL"
                            id="tw.customExtensionModal.promptURL"
                        />
                    </p>
                    <input
                        type="text"
                        className={styles.urlInput}
                        value={props.url}
                        onChange={props.onChangeURL}
                        onKeyDown={props.onKeyDown}
                        placeholder="https://extensions.turbowarp.org/..."
                        autoFocus
                    />
                </React.Fragment>
            ) : props.type === 'file' ? (
                <React.Fragment key={props.type}>
                    <p>
                        <FormattedMessage
                            defaultMessage="Select or drop extension JavaScript files:"
                            description="Label that appears when loading a custom extension from one or more files"
                            id="tw.customExtensionModal.promptFile"
                        />
                    </p>
                    <FileInput
                        accept=".js"
                        onChange={props.onChangeFiles}
                        files={props.files}
                    />
                </React.Fragment>
            ) : (
                <React.Fragment key={props.type}>
                    <p>
                        <FormattedMessage
                            defaultMessage="Paste the extension's JavaScript source code:"
                            description="Label that appears when loading a custom extension from a text input"
                            id="tw.customExtensionModal.promptText"
                        />
                    </p>
                    <textarea
                        className={styles.textCodeInput}
                        placeholder={'class Extension {\n  // ...\n}\nScratch.extensions.register(new Extension());'}
                        value={props.text}
                        onChange={props.onChangeText}
                        autoFocus
                        spellCheck={false}
                    />
                </React.Fragment>
            )}

            {props.onChangeUnsandboxed ? (
                <React.Fragment>
                    <label className={styles.unsandboxedContainer}>
                        <FancyCheckbox
                            className={styles.unsandboxedCheckbox}
                            checked={props.unsandboxed}
                            onChange={props.onChangeUnsandboxed}
                        />
                        <FormattedMessage
                            defaultMessage="Run without sandbox"
                            description="Message that appears in custom extension prompt"
                            id="tw.customExtensionModal.unsandboxed"
                        />
                    </label>
                    {props.unsandboxed && (
                        <p className={styles.unsandboxedWarning}>
                            <FormattedMessage
                                // eslint-disable-next-line max-len
                                defaultMessage="Loading extensions without the sandbox is dangerous and should not be enabled if you don't know what you're doing."
                                description="Warning that appears when disabling extension security sandbox"
                                id="tw.customExtensionModal.unsandboxedWarning1"
                            />
                            <FormattedMessage
                                // eslint-disable-next-line max-len
                                defaultMessage="Unsandboxed extensions can corrupt your project, delete your settings, phish for passwords, and other bad things. The {APP_NAME} developers are not responsible for any resulting issues."
                                description="Warning that appears when disabling extension security sandbox"
                                id="tw.customExtensionModal.unsandboxedWarning2"
                                values={{
                                    APP_NAME
                                }}
                            />
                        </p>
                    )}
                </React.Fragment>
            ) : (
                props.unsandboxed ? (
                    <p className={styles.trustedExtension}>
                        <FormattedMessage
                            // eslint-disable-next-line max-len
                            defaultMessage="This extension will be loaded without the sandbox because it is from a trusted source."
                            description="Message that appears in custom extension prompt"
                            id="tw.customExtensionModal.trusted"
                        />
                    </p>
                ) : (
                    <p>
                        <FormattedMessage
                            // eslint-disable-next-line max-len
                            defaultMessage="Extensions from untrusted URLs will always be loaded with the sandbox for security."
                            description="Message that appears in custom extension prompt"
                            id="tw.customExtensionModal.untrusted"
                        />
                    </p>
                )
            )}

            <div className={styles.buttonRow}>
                <button
                    className={styles.loadButton}
                    onClick={props.onLoadExtension}
                    disabled={!props.canLoadExtension}
                >
                    <FormattedMessage
                        defaultMessage="Load"
                        description="Button that loads the given custom extension"
                        id="tw.customExtensionModal.load"
                    />
                </button>
            </div>
        </Box>
    </Modal>
);

CustomExtensionModal.propTypes = {
    intl: intlShape,
    canLoadExtension: PropTypes.bool.isRequired,
    type: PropTypes.oneOf(['url', 'file', 'text']).isRequired,
    onSwitchToFile: PropTypes.func.isRequired,
    onSwitchToURL: PropTypes.func.isRequired,
    onSwitchToText: PropTypes.func.isRequired,
    files: PropTypes.instanceOf(FileList),
    onChangeFiles: PropTypes.func.isRequired,
    onDragOver: PropTypes.func.isRequired,
    onDragLeave: PropTypes.func.isRequired,
    onDrop: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
    onChangeURL: PropTypes.func.isRequired,
    onKeyDown: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    unsandboxed: PropTypes.bool.isRequired,
    onChangeUnsandboxed: PropTypes.func,
    onLoadExtension: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
};

export default injectIntl(CustomExtensionModal);
