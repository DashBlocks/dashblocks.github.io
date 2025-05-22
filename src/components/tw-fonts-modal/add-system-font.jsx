import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import bindAll from 'lodash.bindall';
import FontName from './font-name.jsx';
import FontPlayground from './font-playground.jsx';
import FontFallback from './font-fallback.jsx';
import AddButton from './add-button.jsx';

class AddSystemFont extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleChangeName',
            'handleChangeFallback',
            'handleFinish'
        ]);
        this.state = {
            name: '',
            fallback: FontFallback.DEFAULT
        };
    }

    handleChangeName (name) {
        this.setState({
            name
        });
    }

    handleChangeFallback (fallback) {
        this.setState({
            fallback
        });
    }

    handleFinish () {
        this.props.fontManager.addSystemFont(this.state.name, this.state.fallback);
        this.props.onClose();
    }

    render () {
        return (
            <React.Fragment>
                <p>
                    <FormattedMessage
                        // eslint-disable-next-line max-len
                        defaultMessage="Type in the name of any font built in to your computer. The font may not appear correctly for everyone."
                        description="Part of font management modal."
                        id="tw.fonts.system.name"
                    />
                </p>

                <FontName
                    name={this.state.name}
                    onChange={this.handleChangeName}
                    fontManager={this.props.fontManager}
                    placeholder="Wingdings"
                    isCustom={false}
                />

                {this.state.name && (
                    <React.Fragment>
                        <FontPlayground family={`${this.state.name}, ${this.state.fallback}`} />

                        <FontFallback
                            fallback={this.state.fallback}
                            onChange={this.handleChangeFallback}
                        />
                    </React.Fragment>
                )}

                <AddButton
                    onClick={this.handleFinish}
                    disabled={!this.state.name}
                />
            </React.Fragment>
        );
    }
}

AddSystemFont.propTypes = {
    fontManager: PropTypes.shape({
        addSystemFont: PropTypes.func.isRequired,
        hasFont: PropTypes.func.isRequired
    }).isRequired,
    onClose: PropTypes.func.isRequired
};

export default AddSystemFont;
