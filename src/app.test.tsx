/// <reference lib="dom" />
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './app'

describe('App', () => {
  it('should render "Hello world!"', () => {
    render(<App />)
    const headline = screen.getByText('Hello world!')
    expect(headline).toBeInTheDocument()
  })
})
