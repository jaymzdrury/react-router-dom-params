import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {BrowserRouter} from 'react-router-dom'
import Lists from '../Lists'

test('full app rendering/navigating', async () => {
  render(<Lists />, {wrapper: BrowserRouter});
  const user = userEvent
  expect(screen.getByText(/1/i)).toBeInTheDocument()
  await user.click(screen.getByText(/1/i))
  expect(screen.getByText(/1/i))
})
