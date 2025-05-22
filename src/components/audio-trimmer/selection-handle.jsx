import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Box from '../box/box.jsx';
import styles from './audio-trimmer.css';
import TWRenderRecoloredImage from '../../lib/tw-recolor/render.jsx';
import handleIcon from '!../../lib/tw-recolor/build!./icon--handle.svg';

const SelectionHandle = props => (
    <Box
        className={classNames(styles.trimLine, props.handleStyle)}
        onMouseDown={props.onMouseDown}
        onTouchStart={props.onMouseDown}
    >
        <Box className={classNames(styles.trimHandle, styles.topTrimHandle)}>
            <TWRenderRecoloredImage
                src={handleIcon}
                draggable={false}
            />
        </Box>
        <Box className={classNames(styles.trimHandle, styles.bottomTrimHandle)}>
            <TWRenderRecoloredImage
                src={handleIcon}
                draggable={false}
            />
        </Box>
    </Box>
);

SelectionHandle.propTypes = {
    handleStyle: PropTypes.string,
    onMouseDown: PropTypes.func
};

export default SelectionHandle;
