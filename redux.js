let createStore = (reducer) => {
    let state;
    let listeners = [];
    let getState = () => state;
    let dispath = (action) => {
        state = reducer(state, action);
        listeners.forEach((listener) => listener())
    }
    let subscribe = (listener) => {
        listeners.push(listener);
    }
    return {
        getState,
        dispath,
        subscribe
    }
}
let combineReducers=(reducers)=>{
    return function(state={},action={}){
        let newState={};
        for(var attr in reducers){
            newState[attr]=reducers[attr](state[attr], action);
        }
        return newState;
    }
}
export {createStore,combineReducers};