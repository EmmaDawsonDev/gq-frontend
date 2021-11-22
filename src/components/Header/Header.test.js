import { render } from '@testing-library/react'

import Header from './Header'

describe('Header', () => {
  it('renders geoQuizzr text', () => {
    const { getByText } = render(<Header />)

    expect(getByText(/geoQuizzr/)).toBeTruthy()
  })
})
