import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// This is a wrapper around <img> that forces re-render when theme state updates.

const TWRenderRecoloredImage = ({
    src,
    ...props
}) => (
    <img
        src={typeof src === 'function' ? src() : src}
        {...props}
    />
);

TWRenderRecoloredImage.propTypes = {
    src: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

const mapStateToProps = state => ({
    theme: state.scratchGui.theme.theme
});

const mapDispatchToProps = () => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TWRenderRecoloredImage);
