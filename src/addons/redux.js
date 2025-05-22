import EventTargetShim from './event-target';
import AddonHooks from './hooks';

class AddonRedux extends EventTargetShim {
    constructor () {
        super();

        this._isInReducer = false;
        this._nextState = null;

        AddonHooks.appStateReducer = (action, prev, next) => {
            this._isInReducer = true;
            this._nextState = next;
            this.dispatchEvent(new CustomEvent('statechanged', {
                detail: {
                    action,
                    prev,
                    next
                }
            }));
            this._nextState = null;
            this._isInReducer = false;
        };
    }

    initialize () {
        // no-op; it is always initialized
    }

    dispatch (m) {
        if (this._isInReducer) {
            queueMicrotask(() => AddonHooks.appStateStore.dispatch(m));
        } else {
            AddonHooks.appStateStore.dispatch(m);
        }
    }

    get state () {
        if (this._nextState) return this._nextState;
        return AddonHooks.appStateStore.getState();
    }
}

const reduxInstance = new AddonRedux();

export default reduxInstance;
