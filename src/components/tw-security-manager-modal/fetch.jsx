import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import URL from './url.jsx';

const FetchModal = props => (
    <div>
        <FormattedMessage
            defaultMessage="The project wants to connect to the website:"
            description="Part of modal shown when a project asks for permission to fetch a URL using an extension"
            id="tw.fetch.title"
        />
        <URL url={props.url} />
        <p>
            <FormattedMessage
                // eslint-disable-next-line max-len
                defaultMessage="This could be used to download images or sounds, implement multiplayer, access an API, or for malicious purposes. This will share your IP address, general location, and possibly other data with the website."
                description="Part of modal shown when a project asks for permission to fetch a URL using an extension"
                id="tw.securityManager.why"
            />
        </p>
        <p>
            <FormattedMessage
                defaultMessage="If allowed, further requests to the same website will be automatically allowed."
                description="Part of modal shown when a project asks for permission to fetch a URL using an extension"
                id="tw.securityManager.trust"
            />
        </p>
    </div>
);

FetchModal.propTypes = {
    url: PropTypes.string.isRequired
};

export default FetchModal;
