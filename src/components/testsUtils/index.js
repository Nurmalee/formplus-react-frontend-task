import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../../redux/reducer'
import checkPropTypes from 'check-prop-types';

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
    return createStoreWithMiddleware(reducer, initialState);
};

export const findByTestAttr = (component, attr) => component.find(`[data-test='${attr}']`)

export const checkProps = (component, expectedProps) => checkPropTypes(component.propTypes, expectedProps, 'props', component.name);