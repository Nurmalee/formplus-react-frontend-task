import Header from '.'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { reduxProvider } from '../testsUtils'
import userEvent from '@testing-library/user-event'

describe('input field works well', () => {
	it('should render input field correctly', () => {
		const { getByTestId } = render(reduxProvider(<Header />))
		const inputField = getByTestId('search_bar')
		expect(inputField).toBeTruthy()
	})

	it('should render field value without errorn- with act', async () => {
		await act(async () => {
			const { getByTestId } = render(reduxProvider(<Header />))
			const inputField = getByTestId('search_bar')
			const testValue = 'educational'
			fireEvent.change(inputField, { target: { value: testValue } })
			await waitFor(() => expect(inputField.value).toBe(testValue))
		})
	})

    it('should render field value without error - without act', () => {
		const { getByTestId } = render(reduxProvider(<Header />))
		const inputField = getByTestId('search_bar')
		const testValue = 'educational'
		fireEvent.change(inputField, { target: { value: testValue } })
		expect(inputField.value).toBe(testValue)
	})
})
