import React from 'react'
import { shallow } from 'enzyme'
import SingleTemplate from '.'
import { findByTestAttr, checkProps } from '../testsUtils'

describe('Single Template Component', () => {
    describe('Checking PropTypes', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps ={
                name: 'sample template name',
                description: 'sample template description',
                link: 'http://sample-template-link',
            }
            const propsError = checkProps(SingleTemplate, expectedProps)
            expect(propsError).toBeUndefined()
        })
    })

    describe('Component should render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                name: 'sample name',
                description: 'sample description',
                link: 'http://sample-link',
            }
            wrapper = shallow(<SingleTemplate {...props} />)
        })

        it('Should render template box without error', () => {
            const singleTemplateBox = findByTestAttr(wrapper, 'singleTemplateBox')
            expect(singleTemplateBox.length).toBe(1)
        })

        it('Should render template title without error', () => {
            const singleTemplateTitle = findByTestAttr(wrapper, 'singleTemplateTitle')
            expect(singleTemplateTitle.length).toBe(1)
        })

        it('Should render template description without error', () => {
            const singleTemplateDesc = findByTestAttr(wrapper, 'singleTemplateDesc')
            expect(singleTemplateDesc.length).toBe(1)
        })

        it('Should render template link without error', () => {
            const singleTemplateLink = findByTestAttr(wrapper, 'singleTemplateLink')
            expect(singleTemplateLink.length).toBe(1)
        })
    })
})