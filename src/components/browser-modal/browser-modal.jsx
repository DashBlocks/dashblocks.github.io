import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';
import Box from '../box/box.jsx';
import {defineMessages, injectIntl, intlShape, FormattedMessage} from 'react-intl';
import {
    isRendererSupported,
    isNewFunctionSupported,
    findIncompatibleUserscripts
} from '../../lib/tw-environment-support-prober.js';
import {APP_NAME} from '../../lib/brand.js';

import styles from './browser-modal.css';
import unhappyBrowser from './unsupported-browser.svg';

const messages = defineMessages({
    browserNotSupported: {
        id: 'gui.unsupportedBrowser.label',
        defaultMessage: 'Browser is not supported',
        description: ''
    },
    systemNotSupported: {
        id: 'tw.browserModal.desktopTitle',
        defaultMessage: 'System is not supported',
        description: 'Title of error message in desktop app when system does not support required API, such as WebGL'
    }
});

const noop = () => {};

const BrowserModal = ({intl, ...props}) => {
    const title = props.onClickDesktopSettings ? messages.systemNotSupported : messages.browserNotSupported;
    const incompatibleUserscripts = findIncompatibleUserscripts();
    return (
        <ReactModal
            isOpen
            className={styles.modalContent}
            contentLabel={intl.formatMessage(title)}
            overlayClassName={styles.modalOverlay}
            onRequestClose={noop}
        >
            <div dir={props.isRtl ? 'rtl' : 'ltr'} >
                <Box className={styles.illustration}>
                    <img
                        src={unhappyBrowser}
                        draggable={false}
                    />
                </Box>

                <Box className={styles.body}>
                    <h2 className={styles.title}>
                        <FormattedMessage {...title} />
                    </h2>

                    {/* eslint-disable max-len */}
                    {isNewFunctionSupported() ? null : (
                        // This message should only be seen by website operators, so we don't need to translate it
                        <p>
                            {'Unable to compile JavaScript with new Function(). This is most likely caused by an overly-strict Content-Security-Policy. The CSP must include \'unsafe-eval\'.'}
                        </p>
                    )}

                    {incompatibleUserscripts.length > 0 && (
                        <React.Fragment>
                            {incompatibleUserscripts.map((message, index) => (
                                <p key={index}>
                                    {message}
                                </p>
                            ))}
                        </React.Fragment>
                    )}

                    {!isRendererSupported() && (
                        <React.Fragment>
                            <p>
                                <FormattedMessage
                                    defaultMessage="{APP_NAME} requires WebGL, however your computer does not seem to support it. This is often a temporary error that can be fixed by restarting your computer."
                                    description="Error message when browser does not support WebGL."
                                    id="tw.browserModal.webgl1"
                                    values={{
                                        APP_NAME
                                    }}
                                />
                            </p>

                            {props.onClickDesktopSettings ? (
                                <React.Fragment>
                                    <p>
                                        <FormattedMessage
                                            defaultMessage={'You can also try toggling the "graphics acceleration" option in desktop settings:'}
                                            description="Error message when browser does not support WebGL (desktop app version). Consider seeing how Chrome translates 'graphics acceleration' into your language."
                                            id="tw.browserModal.webglDesktop"
                                        />
                                    </p>
                                    <div className={styles.desktopSettingsOuter}>
                                        <button
                                            onClick={props.onClickDesktopSettings}
                                            className={styles.desktopSettingsInner}
                                        >
                                            <FormattedMessage
                                                defaultMessage="Open Desktop Settings"
                                                description="Button in unsupported system modal to open desktop settings"
                                                id="tw.browserModal.desktopSettings"
                                            />
                                        </button>
                                    </div>
                                </React.Fragment>
                            ) : (
                                <p>
                                    <FormattedMessage
                                        defaultMessage={'Use a recent version of Chrome, Firefox, or Safari, and ensure your graphics drivers are up to date. You can also try toggling the "graphics acceleration" or "hardware acceleration" option in your browser\'s settings.'}
                                        description="Error message when browser does not support WebGL (browser version). Chrome calls it graphics acceleration and Firefox calls it hardware acceleration; consider seeing how they actually translate these"
                                        id="tw.browserModal.webglBrowser"
                                    />
                                </p>
                            )}
                        </React.Fragment>
                    )}

                    {/* eslint-enable max-len */}
                </Box>
            </div>
        </ReactModal>
    );
};

BrowserModal.propTypes = {
    intl: intlShape.isRequired,
    isRtl: PropTypes.bool,
    onClickDesktopSettings: PropTypes.func
};

const WrappedBrowserModal = injectIntl(BrowserModal);

WrappedBrowserModal.setAppElement = ReactModal.setAppElement;

export default WrappedBrowserModal;
