import { applyMiddleware, createStore } from "redux";
import todoReducer from "./todoReducer";


const middleware = store => next => action => {
    if(typeof action === 'function') {
        return action(next)
    }
    return next(action)
}

const store = createStore(todoReducer,applyMiddleware(middleware))

export default store;