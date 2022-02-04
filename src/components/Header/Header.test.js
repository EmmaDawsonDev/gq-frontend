import { render } from '@testing-library/react'

import Header from './Header'

describe('Header', () => {
  it('renders geoQuizzr text', () => {
    const { getByText } = render(<Header />)

    expect(getByText(/geoQuizzr/)).toBeTruthy()
  })
})

// Header should show login and signup buttons when logged out
// Header should not show login and signup buttons when loggged in
// Header should show logout button when signed in
// Header should not show logout button when signed out
// Header should be hamburger on small screens
// Header should not show hamburger on large screens
