import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the HOME page sections', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Ryota Kawagishi' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'HOME' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'ABOUT' }),
    ).toHaveAttribute('href', '/about')
    expect(
      screen.getByRole('heading', { level: 2, name: 'Contact' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'GitHub' }),
    ).toHaveAttribute('href', 'https://github.com/RyotaKawagishi')
  })

  it('navigates to the ABOUT page', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('link', { name: 'ABOUT' }))

    expect(
      screen.getByRole('heading', { level: 2, name: 'Skill' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Experience' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Education' }),
    ).toBeInTheDocument()
  })
})
