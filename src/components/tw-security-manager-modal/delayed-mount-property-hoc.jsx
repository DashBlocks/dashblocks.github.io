import React from 'react';

const DelayedMountPropertyHOC = function (WrappedComponent, duration, delayedProps) {
    class DelayedMountProperty extends React.Component {
        constructor (props) {
            super(props);
            this.state = {
                done: false
            };
        }
        componentDidMount () {
            this.timeout = setTimeout(() => {
                this.setState({
                    done: true
                });
            }, duration);
        }
        componentWillUnmount () {
            clearTimeout(this.timeout);
        }
        render () {
            return (
                <WrappedComponent
                    {...this.state.done ? {
                        ...this.props,
                        ...delayedProps
                    } : this.props}
                />
            );
        }
    }

    return DelayedMountProperty;
};

export default DelayedMountPropertyHOC;
