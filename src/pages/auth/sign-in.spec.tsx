import { QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'

import { queryClient } from '@/lib/react-query'

import { SignIn } from './sign-in'

describe('Sign In', () => {
  it('should set default email input value if email is present on search params', () => {
    const wrapper = render(<SignIn />, {
      wrapper: ({ children }) => {
        return (
          <HelmetProvider>
            <QueryClientProvider client={queryClient}>
              <MemoryRouter
                initialEntries={['/sign-in?email=rbussolo91@gmail.com']}
              >
                {children}
              </MemoryRouter>
            </QueryClientProvider>
          </HelmetProvider>
        )
      },
    })

    const inputEmail = wrapper.getByLabelText('Seu e-mail') as HTMLInputElement

    expect(inputEmail.value).toEqual('rbussolo91@gmail.com')
    expect(inputEmail.value).not.toEqual('outro.email@gmail.com')
  })
})
