import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {FormattedMessage, defineMessages} from 'react-intl';
import {connect} from 'react-redux';

import check from './check.svg';
import dropdownCaret from './dropdown-caret.svg';
import {MenuItem, Submenu} from '../menu/menu.jsx';
import {BLOCKS_CUSTOM, BLOCKS_DARK, BLOCKS_HIGH_CONTRAST, BLOCKS_THREE, Theme} from '../../lib/themes/index.js';
import {openBlocksThemeMenu, blocksThemeMenuOpen, closeSettingsMenu} from '../../reducers/menus.js';
import {setTheme} from '../../reducers/theme.js';
import {persistTheme} from '../../lib/themes/themePersistance.js';
import styles from './settings-menu.css';
import threeIcon from './tw-blocks-three.svg';
import highContrastIcon from './tw-blocks-high-contrast.svg';
import darkIcon from './tw-blocks-dark.svg';
import customIcon from './tw-blocks-custom.svg';
import openLinkIcon from './tw-open-link.svg';

const options = defineMessages({
    [BLOCKS_THREE]: {
        defaultMessage: 'Original',
        description: 'Name of normal Scratch block colors.',
        id: 'tw.blockColors.three'
    },
    [BLOCKS_HIGH_CONTRAST]: {
        defaultMessage: 'High Contrast',
        description: 'Name of the high contrast block colors.',
        id: 'tw.blockColors.highContrast'
    },
    [BLOCKS_DARK]: {
        defaultMessage: 'Dark (Beta)',
        description: 'Name of the dark block colors',
        id: 'tw.blockColors.dark'
    },
    [BLOCKS_CUSTOM]: {
        defaultMessage: 'Customize in Addon Settings',
        description: 'Link in block color list to open addon settings for more customization',
        id: 'tw.blockColors.custom'
    }
});

const icons = {
    [BLOCKS_THREE]: threeIcon,
    [BLOCKS_HIGH_CONTRAST]: highContrastIcon,
    [BLOCKS_DARK]: darkIcon,
    [BLOCKS_CUSTOM]: customIcon
};

const ThemeIcon = ({id}) => (
    <img
        src={icons[id]}
        draggable={false}
        width={24}
    />
);

ThemeIcon.propTypes = {
    id: PropTypes.string
};

const ThemeMenuItem = ({id, disabled, isSelected, onClick}) => (
    <MenuItem onClick={disabled ? null : onClick}>
        <div className={classNames(styles.option, {[styles.disabled]: disabled})}>
            <img
                width={15}
                height={12}
                className={classNames(styles.check, {[styles.selected]: isSelected})}
                src={check}
                draggable={false}
            />
            <ThemeIcon id={id} />
            <FormattedMessage {...options[id]} />
            {id === BLOCKS_CUSTOM && (
                <img
                    width={20}
                    height={20}
                    className={styles.openLink}
                    src={openLinkIcon}
                    draggable={false}
                />
            )}
        </div>
    </MenuItem>
);

ThemeMenuItem.propTypes = {
    id: PropTypes.string,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
};

const BlocksThemeMenu = ({
    isOpen,
    isRtl,
    onChangeTheme,
    onOpenCustomSettings,
    onOpenMenu,
    theme
}) => (
    <MenuItem expanded={isOpen}>
        <div
            className={styles.option}
            onClick={onOpenMenu}
        >
            <ThemeIcon id={theme.blocks} />
            <span className={styles.submenuLabel}>
                <FormattedMessage
                    defaultMessage="Block Colors"
                    description="Label for to choose what color blocks should be, eg. original or high contrast"
                    id="tw.menuBar.blockColors"
                />
            </span>
            <img
                className={styles.expandCaret}
                src={dropdownCaret}
                draggable={false}
            />
        </div>
        <Submenu place={isRtl ? 'left' : 'right'}>
            {[
                BLOCKS_THREE,
                BLOCKS_HIGH_CONTRAST,
                BLOCKS_DARK,
                ...(onOpenCustomSettings ? [BLOCKS_CUSTOM] : [])
            ].map(i => (
                <ThemeMenuItem
                    key={i}
                    id={i}
                    isSelected={theme.blocks === i}
                    // eslint-disable-next-line react/jsx-no-bind
                    onClick={
                        i === BLOCKS_CUSTOM ?
                            onOpenCustomSettings :
                            () => onChangeTheme(theme.set('blocks', i))
                    }
                    disabled={i !== BLOCKS_CUSTOM && theme.blocks === BLOCKS_CUSTOM}
                />
            ))}
        </Submenu>
    </MenuItem>
);

BlocksThemeMenu.propTypes = {
    isOpen: PropTypes.bool,
    isRtl: PropTypes.bool,
    onChangeTheme: PropTypes.func,
    onOpenCustomSettings: PropTypes.func,
    onOpenMenu: PropTypes.func,
    theme: PropTypes.instanceOf(Theme)
};

const mapStateToProps = state => ({
    isOpen: blocksThemeMenuOpen(state),
    isRtl: state.locales.isRtl,
    theme: state.scratchGui.theme.theme
});

const mapDispatchToProps = dispatch => ({
    onChangeTheme: theme => {
        dispatch(setTheme(theme));
        dispatch(closeSettingsMenu());
        persistTheme(theme);
    },
    onOpenMenu: () => dispatch(openBlocksThemeMenu())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlocksThemeMenu);
