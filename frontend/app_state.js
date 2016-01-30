import Immutable from "immutable";

var defaultState = {
    chars: [],
    charMap: {}
}


export default Immutable.fromJS(window.bootstrapState || defaultState);
