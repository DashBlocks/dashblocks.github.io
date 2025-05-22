import React from 'react';
import {FormattedMessage} from 'react-intl';

const RecordVideo = () => (
    <div>
        <p>
            <FormattedMessage
                // eslint-disable-next-line max-len
                defaultMessage="The project wants to record video from your camera. The project may be able to share images with other users or servers."
                description="Part of modal that appears when a project tries to record video using an extension"
                id="tw.recordVideo.title"
            />
        </p>
        <p>
            <FormattedMessage
                // eslint-disable-next-line max-len
                defaultMessage="If allowed, you may be prompted to enable camera access by your browser, and further camera access will be automatically allowed."
                description="Part of modal that appears when a project tries to record audio using an extension"
                id="tw.recordVideo.permission"
            />
        </p>
    </div>
);

export default RecordVideo;
