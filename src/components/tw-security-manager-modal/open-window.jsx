import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import {APP_NAME} from '../../lib/brand';
import URL from './url.jsx';

const OpenWindowModal = props => (
    <div>
        <FormattedMessage
            defaultMessage="The project wants to open a new window or tab with the URL:"
            description="Part of modal when a project attempts to open a window using an extension"
            id="tw.openWindow.title"
        />
        <URL url={props.url} />
        <p>
            <FormattedMessage
                // eslint-disable-next-line max-len
                defaultMessage="This website has not been reviewed by the {APP_NAME} developers. It may contain dangerous or malicious code."
                description="Part of modal when a project attempts to open a window using an extension"
                id="tw.openWindow.dangerous"
                values={{
                    APP_NAME
                }}
            />
        </p>
    </div>
);

OpenWindowModal.propTypes = {
    url: PropTypes.string.isRequired
};

export default OpenWindowModal;
