# Summary of this Project (FormPlus Templates Task)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `List of Stack/Technologies Used`

a. React - Functional Components with hooks.\
b. Redux - State Management Library.\
c. Styled Components - CSS in JS Styling Effect.\
d. Hero Icons - For Crisp Icons.\
e. Jest & Enzyme - For Unit & Integration Testing Concerns/Completion.

## Highlight of Functionalities Implemented & Inclusive

### `Auto-Fetch Templates from API`

The App is able to fetch templates properties from the dummy API on first load and on every reload

### `Pagination`

The response from the API is immediately displayed on a paginated platform to avoid overloading or overuse of memory in local browser or machine storage. In this implementation,
- 15 template objects are displayed per page.
- The number of pages is handled by a definitive calculation.
- Next and Previous buttons are provided for page navigation and are disabled on reaching extreme endpoints (at page 1 and last page).

### `Filter Templates by Categories`

The Header bar of the app contains three(3) implementations of dropdown components, one of which helps in the seemless filtration of templates based in their categorical descriptions in which case a template may belong to just one, two or more categories  

### `Order Templates by Name`

The Header bar of the app contains three(3) implementations of dropdown components, one of which helps in the seemless ordering of templates alphabetically in ascending or descending format based on the letters of their title/name. In this implementation,
- The default order as recieved from the API is preserved.
- The active category/filter is kept in memory/preserved and can be ordered through.

### `Order Templates by Date`

The Header bar of the app contains three(3) implementations of dropdown components, one of which helps in the seemless ordering of templates in ascending or descending format based on their dates. In this implementation,
- The default order as recieved from the API is preserved.
- The active category/filter is kept in memory/preserved and can be ordered through.

### `Search Templates by Name`

The Header bar of the app contains a search input field that makes it possible to instantaneously search through the list of templates by characters/letters present in their names. In this implementation,
- Case sensitivity is non-existent.
- Blank spaces are inclusive as characters.
- Absence or no matches found error is being handled.

### `Other Extra Functionalities`
- A spinning loading icon is provided to indicate loading state during data fetch
- Error during data fetching is handled and indicated with an error icon on failed loading
- The search input and the filter/order dropdown components are disabled during loading state or when data is being fetched from the database
- Pagination is made unavailabe or unrendered during loading state or when data is being fetched from the database or when search input does not match any template
- The intentional disabling of components is to prevent tampering with state data when other all components are not yet avalibale
- Jump to last page on last page number click is possible
- Go back to first page/page one link shows up after exceeding page 40 is clickable 
