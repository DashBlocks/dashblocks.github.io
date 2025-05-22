import React from 'react';
import {FormattedMessage} from 'react-intl';
import styles from './removed-trademarks.css';

const RemovedTrademarks = () => (
    <div className={styles.removedTrademarks}>
        <FormattedMessage
            // eslint-disable-next-line max-len
            defaultMessage="Some items that contained Scratch trademarks are no longer listed here."
            // eslint-disable-next-line max-len
            description="Appears at the bottom of the builtin 'Choose a Costume' and 'Choose a Sprite' libraries. We are obviously not scanning projects for trademarks, just removing Scratch Cat and some others from the builtin libraries as we do not have permission to use them right now."
            id="tw.removedTrademarks"
        />
    </div>
);

export default RemovedTrademarks;
