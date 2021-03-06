import React from 'react'
import { shallow } from 'enzyme'
import Notification from '.'
import { findByTestAttr } from '../testsUtils'

const compSelector = () => shallow(<Notification/>)

describe('Notification Component', () => {
    it('renders without crashing', () => {
        const component = compSelector()
        const container = findByTestAttr(component, 'notificationContainer')
        expect(container.length).toBe(1)
    })

    it('should render an indication text', () => {
        const component = compSelector()
        const paragraph = findByTestAttr(component, 'notificationIndicator')
        expect(paragraph.length).toBe(1)
    })
})