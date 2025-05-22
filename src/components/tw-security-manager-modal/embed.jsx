import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import URL from './url.jsx';
import DataURL from './data-url.jsx';

const EmbedModal = props => (
    <div>
        {props.url.startsWith('data:') ? (
            <React.Fragment>
                <p>
                    <FormattedMessage
                        defaultMessage="The project wants to embed HTML content over the stage:"
                        description="Part of modal when a project attempts to embed another page over the stage"
                        id="tw.embed.title1"
                    />
                </p>
                <DataURL url={props.url} />
            </React.Fragment>
        ) : (
            <React.Fragment>
                <p>
                    <FormattedMessage
                        defaultMessage="The project wants to embed remote content over the stage:"
                        description="Part of modal when a project attempts to embed another page over the stage"
                        id="tw.embed.title2"
                    />
                </p>
                <URL url={props.url} />
            </React.Fragment>
        )}
        <p>
            <FormattedMessage
                // eslint-disable-next-line max-len
                defaultMessage="While the embed will be sandboxed, it will still have access to information about your device such as your IP and general location."
                description="Part of modal when a project attempts to embed another page over the stage"
                id="tw.embed.risks"
            />
        </p>
        {!props.url.startsWith('data:') && (
            <p>
                <FormattedMessage
                    defaultMessage="If allowed, further embeds to the same site will be automatically allowed."
                    description="Part of modal when a project attempts to embed another page over the stage"
                    id="tw.embed.persistent"
                />
            </p>
        )}
    </div>
);

EmbedModal.propTypes = {
    url: PropTypes.string.isRequired
};

export default EmbedModal;
