import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import styles from './fonts-modal.css';
import VanillaFonts from 'scratch-paint/src/lib/fonts';
import bindAll from 'lodash.bindall';
import classNames from 'classnames';

class FontFallbackButton extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleClick'
        ]);
    }

    handleClick () {
        this.props.onClick(this.props.family);
    }

    formatName () {
        // keep in sync with scratch-paint/src/containers/font-dropdown.jsx
        switch (this.props.family) {
        case VanillaFonts.CHINESE:
            return '中文';
        case VanillaFonts.KOREAN:
            return '한국어';
        case VanillaFonts.JAPANESE:
            return '日本語';
        case VanillaFonts.MOPED_LIKE:
            return 'Mopeds';
        }
        return this.props.family;
    }

    render () {
        return (
            <button
                className={classNames(styles.fallbackButton, {[styles.fallbackButtonSelected]: this.props.selected})}
                onClick={this.handleClick}
                style={{
                    fontFamily: this.props.family
                }}
            >
                {this.formatName()}
            </button>
        );
    }
}

FontFallbackButton.propTypes = {
    family: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired
};

const FontFallback = props => (
    <div className={styles.fallbackContainer}>
        <div className={styles.fallbackLabel}>
            <FormattedMessage
                defaultMessage="Choose a fallback font to use if the font fails to load or is deleted:"
                description="Part of font management modal."
                id="tw.fonts.fallback"
            />
        </div>

        <div className={styles.fallbackList}>
            {Object.values(VanillaFonts).map(family => (
                <FontFallbackButton
                    key={family}
                    family={family}
                    onClick={props.onChange}
                    selected={props.fallback === family}
                />
            ))}
        </div>
    </div>
);

FontFallback.DEFAULT = 'Sans Serif';

FontFallback.propTypes = {
    fallback: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default FontFallback;
