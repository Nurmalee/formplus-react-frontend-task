import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'
import thunk from 'redux-thunk'
import reducer from '../../redux/reducer'
import checkPropTypes from 'check-prop-types'

export function reduxProvider(children) {
	return <Provider store={store}>{children}</Provider>
}

export const testStore = (initialState) => {
	const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
	return createStoreWithMiddleware(reducer, initialState)
}

export const findByTestAttr = (component, attr) =>
	component.find(`[data-test='${attr}']`)

export const checkProps = (component, expectedProps) =>
	checkPropTypes(component.propTypes, expectedProps, 'props', component.name)
