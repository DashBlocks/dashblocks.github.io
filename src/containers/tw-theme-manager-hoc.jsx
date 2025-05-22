import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import bindAll from 'lodash.bindall';
import {applyGuiColors} from '../lib/themes/guiHelpers';
import {BLOCKS_CUSTOM, Theme} from '../lib/themes';
import {detectTheme, onSystemPreferenceChange} from '../lib/themes/themePersistance';
import {setTheme} from '../reducers/theme';

const TWThemeManagerHOC = function (WrappedComponent) {
    class TWThemeManagerComponent extends React.Component {
        constructor (props) {
            super(props);
            bindAll(this, [
                'handleSystemThemeChange'
            ]);
            applyGuiColors(props.reduxTheme);
        }
        componentDidMount () {
            this.removeListeners = onSystemPreferenceChange(this.handleSystemThemeChange);
        }
        componentDidUpdate (prevProps) {
            if (prevProps.reduxTheme !== this.props.reduxTheme) {
                applyGuiColors(this.props.reduxTheme);
            }
        }
        componentWillUnmount () {
            this.removeListeners();
        }
        handleSystemThemeChange () {
            let newTheme = detectTheme();
            if (this.props.reduxTheme.blocks === BLOCKS_CUSTOM) {
                newTheme = newTheme.set('blocks', BLOCKS_CUSTOM);
            }
            this.props.onChangeTheme(newTheme);
        }
        render () {
            const {
                /* eslint-disable no-unused-vars */
                reduxTheme,
                onChangeTheme,
                /* eslint-enable no-unused-vars */
                ...props
            } = this.props;
            return (
                <WrappedComponent
                    {...props}
                />
            );
        }
    }

    TWThemeManagerComponent.propTypes = {
        reduxTheme: PropTypes.instanceOf(Theme),
        onChangeTheme: PropTypes.func
    };

    const mapStateToProps = (state, ownProps) => ({
        // Allow embed page to override theme
        reduxTheme: ownProps.theme || state.scratchGui.theme.theme
    });

    const mapDispatchToProps = dispatch => ({
        onChangeTheme: theme => dispatch(setTheme(theme))
    });

    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(TWThemeManagerComponent);
};

export default TWThemeManagerHOC;
