import React from 'react';
import PropTypes from 'prop-types';
import bindAll from 'lodash.bindall';
import classNames from 'classnames';

import styles from './menu-bar.css';

class MenuLabel extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleClick',
            'handleMouseUp',
            'menuRef'
        ]);
    }
    componentDidMount () {
        if (this.props.open) this.addListeners();
    }
    componentDidUpdate (prevProps) {
        if (this.props.open && !prevProps.open) this.addListeners();
        if (!this.props.open && prevProps.open) this.removeListeners();
    }
    componentWillUnmount () {
        this.removeListeners();
    }
    addListeners () {
        document.addEventListener('mouseup', this.handleMouseUp);
    }
    removeListeners () {
        document.removeEventListener('mouseup', this.handleMouseUp);
    }
    handleClick (e) {
        // this is a bit sketchy, but we want to allow clicking on the menu itself and the images
        // and text directly inside it, but not the items inside the menu, which are under the button
        // in the DOM.
        if (e.target.closest('div') === this.menuEl) {
            if (this.props.open) {
                this.props.onClose();
            } else {
                this.props.onOpen();
            }
        }
    }
    handleMouseUp (e) {
        if (this.props.open && !this.menuEl.contains(e.target)) {
            this.props.onClose();
        }
    }
    menuRef (c) {
        this.menuEl = c;
    }
    render () {
        return (
            <div
                className={classNames(styles.menuBarItem, styles.hoverable, {
                    [styles.active]: this.props.open
                })}
                onClick={this.handleClick}
                ref={this.menuRef}
            >
                {this.props.children}
            </div>
        );
    }
}

MenuLabel.propTypes = {
    children: PropTypes.node,
    open: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func
};

export default MenuLabel;
