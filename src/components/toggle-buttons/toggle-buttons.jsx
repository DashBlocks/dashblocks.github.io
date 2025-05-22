import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TWRenderRecoloredImage from '../../lib/tw-recolor/render.jsx';
import styles from './toggle-buttons.css';

const ToggleButtons = ({buttons, className, disabled}) => (
    <div
        className={classNames(
            className,
            styles.row,
            {
                [styles.disabled]: disabled
            }
        )}
    >
        {buttons.map((button, index) => (
            <button
                key={`toggle-${index}`}
                className={styles.button}
                title={button.title}
                aria-label={button.title}
                aria-pressed={button.isSelected}
                onClick={button.handleClick}
                disabled={disabled}
            >
                <TWRenderRecoloredImage
                    src={button.icon}
                    aria-hidden="true"
                    className={button.iconClassName}
                    draggable={false}
                />
            </button>
        ))}
    </div>
);

ToggleButtons.propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        handleClick: PropTypes.func.isRequired,
        icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        iconClassName: PropTypes.string,
        isSelected: PropTypes.bool
    })),
    className: PropTypes.string,
    disabled: PropTypes.bool
};

ToggleButtons.defaultProps = {
    disabled: false
};

export default ToggleButtons;
