import React from 'react';
import {FormattedMessage} from 'react-intl';

const ReadClipboard = () => (
    <div>
        <p>
            <FormattedMessage
                defaultMessage="The project wants to read data from your clipboard."
                description="Part of modal that appears when a project tries to access the clipboard using an extension"
                id="tw.clipboard.title"
            />
        </p>
        <p>
            <FormattedMessage
                // eslint-disable-next-line max-len
                defaultMessage="If your clipboard contains things like passwords, the project may be able to share those with other users or servers."
                description="Part of modal that appears when a project tries to access the clipboard using an extension"
                id="tw.clipboard.danger"
            />
        </p>
        <p>
            <FormattedMessage
                // eslint-disable-next-line max-len
                defaultMessage="Clipboard access may not work in some browsers. If allowed, further clipboard reads will be automatically allowed."
                // eslint-disable-next-line max-len
                description="Part of modal that appears when a project tries to access the clipboard using an extension"
                id="tw.clipboard.permission"
            />
        </p>
    </div>
);

export default ReadClipboard;
