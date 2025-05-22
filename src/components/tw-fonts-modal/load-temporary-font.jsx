import React from 'react';
import PropTypes from 'prop-types';

let fontId = 0;

class LoadFont extends React.Component {
    constructor (props) {
        super(props);
        this.id = ++fontId;
    }

    componentDidMount () {
        this.style = document.createElement('style');
        this.style.className = 'gui-temp-font';
        document.head.appendChild(this.style);
        this.updateStyle();
    }

    componentDidUpdate (prevProps) {
        if (this.props.url !== prevProps.url) {
            this.updateStyle();
        }
    }

    componentWillUnmount () {
        this.style.remove();
    }

    updateStyle () {
        this.style.textContent = `@font-face { font-family: "${this.getFamily()}"; src: url("${this.props.url}"); }`;
    }

    getFamily () {
        return `GUITempFont${this.id}`;
    }

    render () {
        return this.props.children(this.getFamily());
    }
}

LoadFont.propTypes = {
    url: PropTypes.string.isRequired,
    children: PropTypes.func.isRequired
};

export default LoadFont;
