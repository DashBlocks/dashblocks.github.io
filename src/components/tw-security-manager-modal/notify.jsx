import React from 'react';
import {FormattedMessage} from 'react-intl';

const Notify = () => (
    <div>
        <p>
            <FormattedMessage
                defaultMessage="The project wants to display notifications."
                // eslint-disable-next-line max-len
                description="Part of modal that appears when a project tries to display notifications using an extension"
                id="tw.notify.title"
            />
        </p>
        <p>
            <FormattedMessage
                // eslint-disable-next-line max-len
                defaultMessage="If allowed, you may be prompted to enable notifications by your browser, and further notifications will be automatically allowed."
                // eslint-disable-next-line max-len
                description="Part of modal that appears when a project tries to display notifications using an extension"
                id="tw.notify.permission"
            />
        </p>
    </div>
);

export default Notify;
