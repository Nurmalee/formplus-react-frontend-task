import moxios from 'moxios';
import { testStore } from '../testsUtils'
import { fetchTemplates } from '../../redux/actionsCreators/templates'

describe('fetchTemplates action', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('Store is updated correctly', () => {

        const expectedState = {
        "activeTemplates" : [
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
    ]};
        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        });

        return store.dispatch(fetchTemplates())
        .then(() => {
            const newState = store.getState();
            expect(newState.templates.activeTemplates).toBe(expectedState);
        })
        
    });
});