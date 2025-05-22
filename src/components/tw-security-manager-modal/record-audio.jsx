import React from 'react';
import {FormattedMessage} from 'react-intl';

const RecordAudio = () => (
    <div>
        <p>
            <FormattedMessage
                // eslint-disable-next-line max-len
                defaultMessage="The project wants to record audio from your microphone. This could include a text transcript or raw audio data. The project may be able to share audio with other users or servers."
                description="Part of modal that appears when a project tries to record audio using an extension"
                id="tw.recordAudio.title"
            />
        </p>
        <p>
            <FormattedMessage
                // eslint-disable-next-line max-len
                defaultMessage="If allowed, you may be prompted to enable microphone access by your browser, and further microphone access will be automatically allowed."
                description="Part of modal that appears when a project tries to record audio using an extension"
                id="tw.recordAudio.permission"
            />
        </p>
    </div>
);

export default RecordAudio;
