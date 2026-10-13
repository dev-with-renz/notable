import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Register from '../../pages/Register'
import PrivacyAndTerms from '../../pages/PrivacyAndTerms'

describe('Privacy and Terms page', () => {
  it('shows privacy and terms on the same page', () => {
    render(
      <MemoryRouter>
        <PrivacyAndTerms />
      </MemoryRouter>,
    )

    expect(screen.getByRole('heading', { name: 'Privacy notice & terms' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Privacy notice/, level: 2 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Terms of service/, level: 2 })).toBeInTheDocument()
    expect(screen.getByText(/Google Gemini and Groq/)).toBeInTheDocument()
  })
})

describe('Registration legal acknowledgement', () => {
  it('requires accepting the linked notice before email or OAuth registration', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>,
    )

    expect(screen.getByRole('link', { name: 'Terms of Service' })).toHaveAttribute(
      'href',
      '/privacy-and-terms#terms',
    )
    expect(screen.getByRole('link', { name: 'Privacy Notice' })).toHaveAttribute(
      'href',
      '/privacy-and-terms#privacy',
    )
    expect(screen.getByRole('button', { name: 'Create account' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Continue with Google' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Continue with GitHub' })).toBeDisabled()

    await user.click(screen.getByRole('checkbox'))

    expect(screen.getByRole('button', { name: 'Create account' })).toBeEnabled()
    expect(screen.getByRole('button', { name: 'Continue with Google' })).toBeEnabled()
    expect(screen.getByRole('button', { name: 'Continue with GitHub' })).toBeEnabled()
  })
})
