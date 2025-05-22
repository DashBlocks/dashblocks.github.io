import React from 'react';
import PropTypes from 'prop-types';
import bindAll from 'lodash.bindall';
import {FormattedMessage} from 'react-intl';
import styles from './file-input.css';

class FileInput extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleChange',
            'handleClick'
        ]);
        this.state = {
            files: props.files
        };
    }

    handleChange (e) {
        if (e.target.files.length) {
            this.props.onChange(e.target.files);
        } else {
            this.props.onChange(null);
        }
    }

    handleClick () {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = this.props.accept;
        input.multiple = true;
        input.addEventListener('change', this.handleChange);
        document.body.appendChild(input);
        input.click();
        input.remove();
    }

    render () {
        return (
            <button
                className={styles.container}
                onClick={this.handleClick}
            >
                {this.props.files ? (
                    <FormattedMessage
                        defaultMessage="Selected: {names}"
                        // eslint-disable-next-line max-len
                        description="Appears in a file selector when a file is selected. {names} could be a string like 'fetch.js, network.js'"
                        id="tw.fileInput.selected"
                        values={{
                            names: Array.from(this.props.files)
                                .map(i => i.name)
                                .join(', ')
                        }}
                    />
                ) : (
                    <FormattedMessage
                        defaultMessage="No files selected."
                        description="Appears in a file selector when no file is selected."
                        id="tw.fileInput.none"
                    />
                )}
            </button>
        );
    }
}

FileInput.propTypes = {
    files: PropTypes.instanceOf(FileList),
    accept: PropTypes.string,
    onChange: PropTypes.func
};

export default FileInput;
