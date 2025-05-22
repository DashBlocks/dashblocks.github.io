import {defineMessages, FormattedMessage, intlShape, injectIntl} from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';
import Modal from '../../containers/modal.jsx';
import RestorePoint from './restore-point.jsx';
import styles from './restore-point-modal.css';
import classNames from 'classnames';
import {APP_NAME} from '../../lib/brand';
import {formatBytes} from '../../lib/tw-bytes-utils';

const messages = defineMessages({
    title: {
        defaultMessage: 'Restore Points',
        description: 'Title of restore point management modal',
        id: 'tw.restorePoints.title'
    },
    never: {
        defaultMessage: 'never',
        id: 'tw.restorePoints.never',
        description: 'Part of restore point modal. Appears as dropdown in context "Restore points are created [never]"'
    },
    oneMinute: {
        defaultMessage: 'every minute',
        id: 'tw.restorePoints.1minute',
        // eslint-disable-next-line max-len
        description: 'Part of restore point modal. Appears as dropdown in context "Restore points are created [every minute]"'
    },
    minutes: {
        defaultMessage: 'every {n} minutes',
        id: 'tw.restorePoints.minutes',
        // eslint-disable-next-line max-len
        description: 'Part of restore point modal. Appears as dropdown in context "Restore points are created [every 5 minutes]". {n} will be replaced with a number greater than 1.'
    }
});

const MINUTE = 1000 * 60;
const INTERVAL_OPTIONS = [
    MINUTE * 1,
    MINUTE * 5,
    MINUTE * 10,
    MINUTE * 15,
    MINUTE * 30,
    -1
];
const IntervalSelector = props => (
    <select
        value={props.value}
        onChange={props.onChange}
    >
        {INTERVAL_OPTIONS.map(interval => (
            <option
                key={interval}
                value={interval}
            >
                {interval < 0 ? (
                    props.intl.formatMessage(messages.never)
                ) : interval === MINUTE ? (
                    props.intl.formatMessage(messages.oneMinute)
                ) : (
                    props.intl.formatMessage(messages.minutes, {
                        n: Math.round(interval / MINUTE)
                    })
                )}
            </option>
        ))}
        {!INTERVAL_OPTIONS.includes(props.value) && (
            // This should never happen unless someone manually edits their storage, so we
            // don't need to worry about making this work good.
            <option value={props.value}>
                {`every ${props.value}ms`}
            </option>
        )}
    </select>
);
IntervalSelector.propTypes = {
    intl: intlShape,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

const RestorePointModal = props => (
    <Modal
        className={styles.modalContent}
        onRequestClose={props.onClose}
        contentLabel={props.intl.formatMessage(messages.title)}
        id="restorePointModal"
    >
        <div className={styles.body}>
            <p>
                <FormattedMessage
                    // eslint-disable-next-line max-len
                    defaultMessage="{APP_NAME} periodically saves restore points on your computer to help recover your project if you forget to save. This is intended as a last resort for recovery. Your computer may silently delete these restore points at any time. DO NOT rely on this feature."
                    id="tw.restorePoints.description"
                    values={{
                        APP_NAME: APP_NAME
                    }}
                />
            </p>

            <p>
                <FormattedMessage
                    defaultMessage="Restore points are created {time}."
                    id="tw.restorePoints.intervalOption"
                    // eslint-disable-next-line max-len
                    description="{time} will be replaced with a dropdown with values such as [every 5 minutes] and [never]"
                    values={{
                        time: (
                            <IntervalSelector
                                intl={props.intl}
                                value={props.interval}
                                onChange={props.onChangeInterval}
                            />
                        )
                    }}
                />
            </p>

            {props.interval < 0 && (
                <p className={styles.disabled}>
                    <FormattedMessage
                        defaultMessage="Disabling restore points is dangerous."
                        // eslint-disable-next-line max-len
                        description="Warning that appears in restore point modal when the user has disabled restore points."
                        id="tw.restorePoints.off"
                    />
                </p>
            )}

            {props.error ? (
                <div className={styles.error}>
                    <p>
                        <FormattedMessage
                            defaultMessage="Restore points are not available due to an error:"
                            // eslint-disable-next-line max-len
                            description="Error message in restore point manager when the list of restore points cannot be loaded. Followed by an error message."
                            id="tw.restorePoints.error"
                            values={{
                                error: props.error
                            }}
                        />
                    </p>
                    <p className={styles.errorMessage}>
                        {props.error}
                    </p>
                </div>
            ) : props.isLoading ? (
                <div className={styles.loading}>
                    <FormattedMessage
                        defaultMessage="Loading..."
                        description="Loading message in restore point manager"
                        id="tw.restorePoints.loading"
                    />
                </div>
            ) : props.restorePoints.length === 0 ? (
                <div className={styles.empty}>
                    <FormattedMessage
                        defaultMessage="No restore points found."
                        description="Message that appears when no restore points exist yet"
                        id="tw.restorePoints.empty"
                    />
                </div>
            ) : (
                <React.Fragment>
                    <div className={styles.restorePointContainer}>
                        {props.restorePoints.map(restorePoint => (
                            <RestorePoint
                                key={restorePoint.id}
                                onClickDelete={props.onClickDelete}
                                onClickExport={props.onClickExport}
                                onClickLoad={props.onClickLoad}
                                isExporting={props.isExporting(restorePoint.id)}
                                {...restorePoint}
                            />
                        ))}
                    </div>

                    <div className={styles.extraContainer}>
                        <div className={styles.totalSize}>
                            <div>
                                <FormattedMessage
                                    defaultMessage="Estimated storage used: {size}"
                                    description="Part of restore point modal describing amount of disk space used"
                                    id="tw.restorePoints.size"
                                    values={{
                                        size: formatBytes(props.totalSize)
                                    }}
                                />
                            </div>
                            <div className={styles.totalSizeDescription}>
                                <FormattedMessage
                                    // eslint-disable-next-line max-len
                                    defaultMessage="Costumes or sounds used by multiple restore points are only stored once."
                                    // eslint-disable-next-line max-len
                                    description="Part of the restore point modal that explains why the total storage used is less than may be expected."
                                    id="tw.restorePoints.size2"
                                />
                            </div>
                        </div>

                        <button
                            onClick={props.onClickDeleteAll}
                            className={classNames(styles.button, styles.deleteAllButton)}
                            disabled={props.isLoading}
                        >
                            <FormattedMessage
                                defaultMessage="Delete All"
                                description="Button to delete all restore points"
                                id="tw.restorePoints.deleteAll"
                            />
                        </button>
                    </div>
                </React.Fragment>
            )}
        </div>
    </Modal>
);

RestorePointModal.propTypes = {
    intl: intlShape,
    interval: PropTypes.number.isRequired,
    onChangeInterval: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onClickCreate: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired,
    onClickDeleteAll: PropTypes.func.isRequired,
    onClickExport: PropTypes.func.isRequired,
    onClickLoad: PropTypes.func.isRequired,
    isExporting: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    totalSize: PropTypes.number.isRequired,
    restorePoints: PropTypes.arrayOf(PropTypes.shape({})),
    error: PropTypes.string
};

export default injectIntl(RestorePointModal);
