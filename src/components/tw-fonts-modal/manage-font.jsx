import React from 'react';
import PropTypes from 'prop-types';
import {injectIntl, intlShape, defineMessages, FormattedMessage} from 'react-intl';
import bindAll from 'lodash.bindall';
import {formatBytes} from '../../lib/tw-bytes-utils';
import downloadBlob from '../../lib/download-blob';
import styles from './fonts-modal.css';
import deleteIcon from './delete.svg';
import exportIcon from './export.svg';

const messages = defineMessages({
    delete: {
        // eslint-disable-next-line max-len
        defaultMessage: 'Are you sure you want to delete "{font}"? Any vector costumes will use the fallback font instead.',
        description: 'Part of font management modal. {font} is replaced with the name of a font like "Arial"',
        id: 'tw.fonts.delete'
    }
});

class ManageFont extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleExport',
            'handleDelete'
        ]);
    }

    handleExport () {
        const blob = new Blob([this.props.data], {
            contentType: `font/${this.props.format}`
        });
        downloadBlob(`${this.props.name}.${this.props.format}`, blob);
    }

    handleDelete () {
        // eslint-disable-next-line no-alert
        const allowed = confirm(this.props.intl.formatMessage(messages.delete, {
            font: this.props.name
        }));
        if (allowed) {
            this.props.fontManager.deleteFont(this.props.index);
        }
    }

    render () {
        return (
            <div className={styles.manageFont}>
                <div>
                    <div
                        className={styles.manageFontName}
                        title={this.props.family}
                        style={{
                            fontFamily: this.props.family
                        }}
                    >
                        {this.props.name}
                    </div>

                    <div className={styles.manageFontDetails}>
                        {this.props.system ? (
                            <FormattedMessage
                                defaultMessage="System font"
                                description="Part of font management modal"
                                id="tw.fonts.system"
                            />
                        ) : (
                            formatBytes(this.props.data.byteLength)
                        )}
                    </div>
                </div>

                <div className={styles.manageFontButtons}>
                    {!this.props.system && (
                        <button
                            className={styles.manageFontButton}
                            onClick={this.handleExport}
                        >
                            <img
                                src={exportIcon}
                                alt="Export"
                                draggable={false}
                            />
                        </button>
                    )}

                    <button
                        className={styles.manageFontButton}
                        onClick={this.handleDelete}
                    >
                        <img
                            src={deleteIcon}
                            alt="Delete"
                            draggable={false}
                        />
                    </button>
                </div>
            </div>
        );
    }
}

ManageFont.propTypes = {
    intl: intlShape,
    system: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    family: PropTypes.string.isRequired,
    data: PropTypes.instanceOf(Uint8Array),
    format: PropTypes.string,
    index: PropTypes.number.isRequired,
    fontManager: PropTypes.shape({
        deleteFont: PropTypes.func.isRequired
    }).isRequired
};

export default injectIntl(ManageFont);
