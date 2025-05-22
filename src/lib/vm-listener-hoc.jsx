import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import VM from 'scratch-vm';

import {connect} from 'react-redux';

import {updateTargets} from '../reducers/targets';
import {updateBlockDrag} from '../reducers/block-drag';
import {updateMonitors} from '../reducers/monitors';
import {setProjectChanged, setProjectUnchanged} from '../reducers/project-changed';
import {setRunningState, setTurboState, setStartedState} from '../reducers/vm-status';
import {showExtensionAlert} from '../reducers/alerts';
import {updateMicIndicator} from '../reducers/mic-indicator';
import {
    setFramerateState,
    setCompilerOptionsState,
    addCompileError,
    clearCompileErrors,
    setRuntimeOptionsState,
    setInterpolationState,
    setHasCloudVariables,
    setPlatformMismatchDetails
} from '../reducers/tw';
import {setCustomStageSize} from '../reducers/custom-stage-size';
import {openUnknownPlatformModal} from '../reducers/modals';
import implementGuiAPI from './tw-extension-gui-api';

let compileErrorCounter = 0;

/*
 * Higher Order Component to manage events emitted by the VM
 * @param {React.Component} WrappedComponent component to manage VM events for
 * @returns {React.Component} connected component with vm events bound to redux
 */
const vmListenerHOC = function (WrappedComponent) {
    class VMListener extends React.Component {
        constructor (props) {
            super(props);
            bindAll(this, [
                'handleKeyDown',
                'handleKeyUp',
                'handleProjectChanged',
                'handleTargetsUpdate',
                'handleCloudDataUpdate',
                'handleCompileError'
            ]);
            // We have to start listening to the vm here rather than in
            // componentDidMount because the HOC mounts the wrapped component,
            // so the HOC componentDidMount triggers after the wrapped component
            // mounts.
            // If the wrapped component uses the vm in componentDidMount, then
            // we need to start listening before mounting the wrapped component.
            this.props.vm.on('targetsUpdate', this.handleTargetsUpdate);
            this.props.vm.on('MONITORS_UPDATE', this.props.onMonitorsUpdate);
            this.props.vm.on('BLOCK_DRAG_UPDATE', this.props.onBlockDragUpdate);
            this.props.vm.on('TURBO_MODE_ON', this.props.onTurboModeOn);
            this.props.vm.on('TURBO_MODE_OFF', this.props.onTurboModeOff);
            this.props.vm.on('PROJECT_RUN_START', this.props.onProjectRunStart);
            this.props.vm.on('PROJECT_RUN_STOP', this.props.onProjectRunStop);
            this.props.vm.on('PROJECT_CHANGED', this.handleProjectChanged);
            this.props.vm.on('RUNTIME_STARTED', this.props.onRuntimeStarted);
            this.props.vm.on('RUNTIME_STOPPED', this.props.onRuntimeStopped);
            this.props.vm.on('PROJECT_START', this.props.onGreenFlag);
            this.props.vm.on('PERIPHERAL_CONNECTION_LOST_ERROR', this.props.onShowExtensionAlert);
            this.props.vm.on('MIC_LISTENING', this.props.onMicListeningUpdate);
            this.props.vm.on('MIC_LISTENING', this.props.onMicListeningUpdate);
            // tw: add handlers for our events
            this.props.vm.on('HAS_CLOUD_DATA_UPDATE', this.handleCloudDataUpdate);
            this.props.vm.on('COMPILER_OPTIONS_CHANGED', this.props.onCompilerOptionsChanged);
            this.props.vm.on('RUNTIME_OPTIONS_CHANGED', this.props.onRuntimeOptionsChanged);
            this.props.vm.on('FRAMERATE_CHANGED', this.props.onFramerateChanged);
            this.props.vm.on('INTERPOLATION_CHANGED', this.props.onInterpolationChanged);
            this.props.vm.on('COMPILE_ERROR', this.handleCompileError);
            this.props.vm.on('RUNTIME_STARTED', this.props.onClearCompileErrors);
            this.props.vm.on('STAGE_SIZE_CHANGED', this.props.onStageSizeChanged);
            this.props.vm.on('CREATE_UNSANDBOXED_EXTENSION_API', implementGuiAPI);
            this.props.vm.runtime.on('PLATFORM_MISMATCH', this.props.onPlatformMismatch);
        }
        componentDidMount () {
            if (this.props.attachKeyboardEvents) {
                document.addEventListener('keydown', this.handleKeyDown);
                document.addEventListener('keyup', this.handleKeyUp);
            }
            this.props.vm.postIOData('userData', {username: this.props.username});
        }
        componentDidUpdate (prevProps) {
            if (prevProps.username !== this.props.username) {
                this.props.vm.postIOData('userData', {username: this.props.username});
            }

            // Re-request a targets update when the shouldUpdateTargets state changes to true
            // i.e. when the editor transitions out of fullscreen/player only modes
            if (this.props.shouldUpdateTargets && !prevProps.shouldUpdateTargets) {
                this.props.vm.emitTargetsUpdate(false /* Emit the event, but do not trigger project change */);
            }
        }
        componentWillUnmount () {
            if (this.props.attachKeyboardEvents) {
                document.removeEventListener('keydown', this.handleKeyDown);
                document.removeEventListener('keyup', this.handleKeyUp);
            }

            this.props.vm.off('targetsUpdate', this.handleTargetsUpdate);
            this.props.vm.off('MONITORS_UPDATE', this.props.onMonitorsUpdate);
            this.props.vm.off('BLOCK_DRAG_UPDATE', this.props.onBlockDragUpdate);
            this.props.vm.off('TURBO_MODE_ON', this.props.onTurboModeOn);
            this.props.vm.off('TURBO_MODE_OFF', this.props.onTurboModeOff);
            this.props.vm.off('PROJECT_RUN_START', this.props.onProjectRunStart);
            this.props.vm.off('PROJECT_RUN_STOP', this.props.onProjectRunStop);
            this.props.vm.off('PROJECT_CHANGED', this.handleProjectChanged);
            this.props.vm.off('RUNTIME_STARTED', this.props.onRuntimeStarted);
            this.props.vm.off('RUNTIME_STOPPED', this.props.onRuntimeStopped);
            this.props.vm.off('PROJECT_START', this.props.onGreenFlag);
            this.props.vm.off('PERIPHERAL_CONNECTION_LOST_ERROR', this.props.onShowExtensionAlert);
            this.props.vm.off('MIC_LISTENING', this.props.onMicListeningUpdate);
            this.props.vm.off('MIC_LISTENING', this.props.onMicListeningUpdate);
            this.props.vm.off('HAS_CLOUD_DATA_UPDATE', this.handleCloudDataUpdate);
            this.props.vm.off('COMPILER_OPTIONS_CHANGED', this.props.onCompilerOptionsChanged);
            this.props.vm.off('RUNTIME_OPTIONS_CHANGED', this.props.onRuntimeOptionsChanged);
            this.props.vm.off('FRAMERATE_CHANGED', this.props.onFramerateChanged);
            this.props.vm.off('INTERPOLATION_CHANGED', this.props.onInterpolationChanged);
            this.props.vm.off('COMPILE_ERROR', this.handleCompileError);
            this.props.vm.off('RUNTIME_STARTED', this.props.onClearCompileErrors);
            this.props.vm.off('STAGE_SIZE_CHANGED', this.props.onStageSizeChanged);
            this.props.vm.off('CREATE_UNSANDBOXED_EXTENSION_API', implementGuiAPI);
            this.props.vm.runtime.off('PLATFORM_MISMATCH', this.props.onPlatformMismatch);
        }
        handleCloudDataUpdate (hasCloudVariables) {
            if (this.props.hasCloudVariables !== hasCloudVariables) {
                this.props.onHasCloudVariablesChanged(hasCloudVariables);
            }
        }
        // tw: handling for compile errors
        handleCompileError (target, error) {
            const errorMessage = `${error}`;
            // Ignore intentonal errors
            if (errorMessage.includes('Script explicitly disables compilation')) {
                return;
            }

            this.props.onCompileError({
                sprite: target.getName(),
                error: errorMessage,
                id: compileErrorCounter++
            });
        }
        handleProjectChanged () {
            if (this.props.shouldUpdateProjectChanged && !this.props.projectChanged) {
                this.props.onProjectChanged();
            }
        }
        handleTargetsUpdate (data) {
            if (this.props.shouldUpdateTargets) {
                this.props.onTargetsUpdate(data);
            }
        }
        handleKeyDown (e) {
            // Don't capture keys intended for Blockly inputs.
            if (e.target !== document && e.target !== document.body) return;

            const key = (!e.key || e.key === 'Dead') ? e.keyCode : e.key;
            this.props.vm.postIOData('keyboard', {
                key: key,
                keyCode: e.keyCode,
                isDown: true
            });

            // Prevent space/arrow key from scrolling the page.
            if (e.keyCode === 32 || // 32=space
                (e.keyCode >= 37 && e.keyCode <= 40)) { // 37, 38, 39, 40 are arrows
                e.preventDefault();
            }

            // tw: prevent backspace from going back
            if (e.keyCode === 8) {
                e.preventDefault();
            }
            // tw: prevent ' and / from opening quick find in Firefox
            if (e.keyCode === 222 || e.keyCode === 191) {
                e.preventDefault();
            }
        }
        handleKeyUp (e) {
            // Always capture up events,
            // even those that have switched to other targets.
            const key = (!e.key || e.key === 'Dead') ? e.keyCode : e.key;
            this.props.vm.postIOData('keyboard', {
                key: key,
                keyCode: e.keyCode,
                isDown: false
            });

            // E.g., prevent scroll.
            if (e.target !== document && e.target !== document.body) {
                e.preventDefault();
            }
        }
        render () {
            const {
                /* eslint-disable no-unused-vars */
                attachKeyboardEvents,
                projectChanged,
                shouldUpdateTargets,
                shouldUpdateProjectChanged,
                onBlockDragUpdate,
                onGreenFlag,
                onKeyDown,
                onKeyUp,
                onMicListeningUpdate,
                onMonitorsUpdate,
                onTargetsUpdate,
                onProjectChanged,
                onProjectRunStart,
                onProjectRunStop,
                onProjectSaved,
                onRuntimeStarted,
                onRuntimeStopped,
                onTurboModeOff,
                onTurboModeOn,
                hasCloudVariables,
                onHasCloudVariablesChanged,
                onFramerateChanged,
                onInterpolationChanged,
                onCompilerOptionsChanged,
                onPlatformMismatch,
                onRuntimeOptionsChanged,
                onStageSizeChanged,
                onCompileError,
                onClearCompileErrors,
                onShowExtensionAlert,
                /* eslint-enable no-unused-vars */
                ...props
            } = this.props;
            return <WrappedComponent {...props} />;
        }
    }
    VMListener.propTypes = {
        attachKeyboardEvents: PropTypes.bool,
        onBlockDragUpdate: PropTypes.func.isRequired,
        onGreenFlag: PropTypes.func,
        onKeyDown: PropTypes.func,
        onKeyUp: PropTypes.func,
        onMicListeningUpdate: PropTypes.func.isRequired,
        onMonitorsUpdate: PropTypes.func.isRequired,
        onProjectChanged: PropTypes.func.isRequired,
        onProjectRunStart: PropTypes.func.isRequired,
        onProjectRunStop: PropTypes.func.isRequired,
        onProjectSaved: PropTypes.func.isRequired,
        onRuntimeStarted: PropTypes.func.isRequired,
        onRuntimeStopped: PropTypes.func.isRequired,
        onShowExtensionAlert: PropTypes.func.isRequired,
        onTargetsUpdate: PropTypes.func.isRequired,
        onTurboModeOff: PropTypes.func.isRequired,
        onTurboModeOn: PropTypes.func.isRequired,
        hasCloudVariables: PropTypes.bool,
        onHasCloudVariablesChanged: PropTypes.func.isRequired,
        onFramerateChanged: PropTypes.func.isRequired,
        onInterpolationChanged: PropTypes.func.isRequired,
        onCompilerOptionsChanged: PropTypes.func.isRequired,
        onPlatformMismatch: PropTypes.func.isRequired,
        onRuntimeOptionsChanged: PropTypes.func.isRequired,
        onStageSizeChanged: PropTypes.func,
        onCompileError: PropTypes.func,
        onClearCompileErrors: PropTypes.func,
        projectChanged: PropTypes.bool,
        shouldUpdateTargets: PropTypes.bool,
        shouldUpdateProjectChanged: PropTypes.bool,
        username: PropTypes.string,
        vm: PropTypes.instanceOf(VM).isRequired
    };
    VMListener.defaultProps = {
        attachKeyboardEvents: true,
        onGreenFlag: () => ({})
    };
    const mapStateToProps = state => ({
        hasCloudVariables: state.scratchGui.tw.hasCloudVariables,
        projectChanged: state.scratchGui.projectChanged,
        // Do not emit target or project updates in fullscreen or player only mode
        // or when recording sounds (it leads to garbled recordings on low-power machines)
        shouldUpdateTargets: !state.scratchGui.mode.isFullScreen && !state.scratchGui.mode.isPlayerOnly &&
            !state.scratchGui.modals.soundRecorder,
        // Do not update the projectChanged state in fullscreen or player only mode
        shouldUpdateProjectChanged: !state.scratchGui.mode.isFullScreen && !state.scratchGui.mode.isPlayerOnly,
        vm: state.scratchGui.vm,
        username: state.session && state.session.session && state.session.session.user ?
            state.session.session.user.username : state.scratchGui.tw ? state.scratchGui.tw.username : ''
    });
    const mapDispatchToProps = dispatch => ({
        onTargetsUpdate: data => {
            dispatch(updateTargets(data.targetList, data.editingTarget));
        },
        onMonitorsUpdate: monitorList => {
            dispatch(updateMonitors(monitorList));
        },
        onBlockDragUpdate: areBlocksOverGui => {
            dispatch(updateBlockDrag(areBlocksOverGui));
        },
        onProjectRunStart: () => dispatch(setRunningState(true)),
        onProjectRunStop: () => dispatch(setRunningState(false)),
        onProjectChanged: () => dispatch(setProjectChanged()),
        onProjectSaved: () => dispatch(setProjectUnchanged()),
        onRuntimeStarted: () => dispatch(setStartedState(true)),
        onRuntimeStopped: () => dispatch(setStartedState(false)),
        onTurboModeOn: () => dispatch(setTurboState(true)),
        onTurboModeOff: () => dispatch(setTurboState(false)),
        onHasCloudVariablesChanged: hasCloudVariables => dispatch(setHasCloudVariables(hasCloudVariables)),
        onFramerateChanged: framerate => dispatch(setFramerateState(framerate)),
        onInterpolationChanged: interpolation => dispatch(setInterpolationState(interpolation)),
        onCompilerOptionsChanged: options => dispatch(setCompilerOptionsState(options)),
        onPlatformMismatch: (platform, callback) => {
            dispatch(setPlatformMismatchDetails(platform, callback));
            dispatch(openUnknownPlatformModal());
        },
        onRuntimeOptionsChanged: options => dispatch(setRuntimeOptionsState(options)),
        onStageSizeChanged: (width, height) => dispatch(setCustomStageSize(width, height)),
        onCompileError: errors => dispatch(addCompileError(errors)),
        onClearCompileErrors: () => dispatch(clearCompileErrors()),
        onShowExtensionAlert: data => {
            dispatch(showExtensionAlert(data));
        },
        onMicListeningUpdate: listening => {
            dispatch(updateMicIndicator(listening));
        }
    });
    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(VMListener);
};

export default vmListenerHOC;
