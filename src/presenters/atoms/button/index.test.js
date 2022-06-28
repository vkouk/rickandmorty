import { screen, fireEvent, render } from '@testing-library/react'

import TestProvider from 'base/providers/test'

import Button from 'presenters/atoms/button'

describe('<Button />', () => {
  const mockClickFn = jest.fn()

  it('renders + call onClick event', () => {
    render(
      <TestProvider>
        <Button onClick={mockClickFn} data-testhook-id="custom-btn">
          I am a button
        </Button>
      </TestProvider>
    )

    expect(screen.getByText('I am a button')).toBeVisible()

    fireEvent.click(screen.getByTestId('custom-btn'))

    expect(mockClickFn).toHaveBeenCalled()
    expect(mockClickFn).toHaveBeenCalledTimes(1)
  })

  it('adds additional styling if is disabled', () => {
    render(
      <TestProvider>
        <Button onClick={mockClickFn} data-testhook-id="custom-btn" disabled>
          I am a disabled button
        </Button>
      </TestProvider>
    )

    expect(screen.getByText('I am a disabled button')).toBeVisible()
    expect(screen.getByTestId('custom-btn')).toHaveStyle({
      opacity: '0.5',
      pointerEvents: 'none'
    })
  })
})
