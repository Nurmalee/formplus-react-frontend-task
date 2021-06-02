import * as ACTION from '../../constants/templates'
import templateReducer from './templates'

describe ('template reducer', () => {
    it('should return default state', () => {
        const newState = templateReducer(
            {
                templates: [],
                activeTemplates: [],
                filterBy: 'All'
            }, {})
        expect(newState).toEqual(
            {
                templates: [],
                activeTemplates: [],
                filterBy: 'All'
            })
    })

    it('should return new state if receiving action type', () => {
        const templates = [
                {
                    "category": [
                        "Health", 
                        "E-commerce", 
                        "Education"
                    ], 
                    "created": "2021-05-20T11:20:26.626765", 
                    "description": "consectetur nostrud cillum fugiat adipiscing", 
                    "link": "https://formpl.us/templates", 
                    "name": "veniam, elit, ipsum"
                }, 
                {
                    "category": [
                        "Health", 
                        "E-commerce", 
                        "Education"
                    ], 
                    "created": "2021-05-20T11:20:26.613537", 
                    "description": "tempor cupidatat dolor ullamco cillum", 
                    "link": "https://formpl.us/templates", 
                    "name": "laborum. occaecat dolore"
                }, 
                {
                    "category": [
                        "Health", 
                        "E-commerce", 
                        "Education"
                    ], 
                    "created": "2021-05-20T11:20:26.646795", 
                    "description": "Lorem proident, veniam, occaecat deserunt", 
                    "link": "https://formpl.us/templates", 
                    "name": "deserunt minim mollit"
                },
            ];
        const newState = templateReducer(
            {
                templates: [],
                activeTemplates: [],
                filterBy: 'All'
            }, {
                type: ACTION.FETCH_TEMPLATES_SUCCESS,
                payload: templates
            })
        expect(newState.templates).toEqual(templates)
    })
})