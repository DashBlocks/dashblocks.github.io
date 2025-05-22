import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import bindAll from 'lodash.bindall';
import {closeFontsModal} from '../reducers/modals';
import FontsModalComponent from '../components/tw-fonts-modal/fonts-modal.jsx';

class TWFontsModal extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleClose',
            'handleCustomFontsChanged',
            'handleCancelAddFont',
            'handleOpenSystemFonts',
            'handleOpenLibaryFonts',
            'handleOpenCustomFonts'
        ]);
        this.state = {
            fonts: this.props.vm.runtime.fontManager.getFonts(),
            screen: ''
        };
    }

    componentDidMount () {
        this.props.vm.runtime.fontManager.on('change', this.handleCustomFontsChanged);
    }

    componentWillUnmount () {
        this.props.vm.runtime.fontManager.off('change', this.handleCustomFontsChanged);
    }

    handleClose () {
        if (this.state.screen) {
            this.setState({
                screen: ''
            });
        } else {
            this.props.onClose();
        }
    }

    handleCustomFontsChanged () {
        this.setState({
            fonts: this.props.vm.runtime.fontManager.getFonts()
        });
    }

    handleCancelAddFont () {
        this.setState({
            screen: ''
        });
    }

    handleOpenSystemFonts () {
        this.setState({
            screen: 'system'
        });
    }

    handleOpenLibaryFonts () {
        this.setState({
            screen: 'library'
        });
    }

    handleOpenCustomFonts () {
        this.setState({
            screen: 'custom'
        });
    }

    render () {
        return (
            <FontsModalComponent
                onClose={this.handleClose}
                screen={this.state.screen}
                fonts={this.state.fonts}
                fontManager={this.props.vm.runtime.fontManager}
                onCancelAddFont={this.handleCancelAddFont}
                onOpenSystemFonts={this.handleOpenSystemFonts}
                onOpenLibraryFonts={this.handleOpenLibaryFonts}
                onOpenCustomFonts={this.handleOpenCustomFonts}
            />
        );
    }
}

TWFontsModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    vm: PropTypes.shape({
        runtime: PropTypes.shape({
            fontManager: PropTypes.shape({
                getFonts: PropTypes.func,
                addSystemFont: PropTypes.func,
                on: PropTypes.func,
                off: PropTypes.func
            })
        })
    })
};

const mapStateToProps = state => ({
    vm: state.scratchGui.vm
});

const mapDispatchToProps = dispatch => ({
    onClose: () => dispatch(closeFontsModal())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TWFontsModal);
