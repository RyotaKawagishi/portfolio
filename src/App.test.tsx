import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the MVP portfolio sections', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Taro Yamada' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'About' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Contact' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'taro@example.com' }),
    ).toHaveAttribute('href', 'mailto:taro@example.com')
  })
})
