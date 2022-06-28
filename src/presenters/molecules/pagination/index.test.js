import React, { useState } from 'react'
import { screen, fireEvent, render } from '@testing-library/react'

import TestProvider from 'base/providers/test'

import { Grid } from 'presenters/atoms/grid'
import Pagination from 'presenters/molecules/pagination'

const TestComponent = () => {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <Grid column>
      <span data-testhook-id="current-page">Current page: {currentPage}</span>
      <Pagination
        isPrevPageDisabled={currentPage === 1}
        isNextPageDisabled={currentPage === 5}
        onPrevPage={() => setCurrentPage((prevPage) => prevPage - 1)}
        onNextPage={() => setCurrentPage((prevPage) => prevPage + 1)}
      />
    </Grid>
  )
}

describe('<Pagination />', () => {
  it('has prev button disabled when is at first page', () => {
    render(
      <TestProvider>
        <TestComponent />
      </TestProvider>
    )

    expect(screen.getByTestId('current-page')).toHaveTextContent(
      'Current page: 1'
    )
    expect(screen.getByTestId('prev-page-btn')).toBeDisabled()
    expect(screen.getByTestId('prev-page-btn')).toHaveStyle({
      opacity: '0.5',
      pointerEvents: 'none'
    })
  })

  it('moves to next page', () => {
    render(
      <TestProvider>
        <TestComponent />
      </TestProvider>
    )

    expect(screen.getByTestId('current-page')).toHaveTextContent(
      'Current page: 1'
    )
    expect(screen.getByTestId('prev-page-btn')).toBeDisabled()

    fireEvent.click(screen.getByTestId('next-page-btn'))

    expect(screen.getByTestId('current-page')).toHaveTextContent(
      'Current page: 2'
    )
    expect(screen.getByTestId('prev-page-btn')).not.toBeDisabled()
  })

  it('moves to next and previous page', () => {
    render(
      <TestProvider>
        <TestComponent />
      </TestProvider>
    )

    expect(screen.getByTestId('current-page')).toHaveTextContent(
      'Current page: 1'
    )
    expect(screen.getByTestId('prev-page-btn')).toBeDisabled()

    fireEvent.click(screen.getByTestId('next-page-btn'))

    expect(screen.getByTestId('current-page')).toHaveTextContent(
      'Current page: 2'
    )
    expect(screen.getByTestId('prev-page-btn')).not.toBeDisabled()

    fireEvent.click(screen.getByTestId('prev-page-btn'))

    expect(screen.getByTestId('current-page')).toHaveTextContent(
      'Current page: 1'
    )
    expect(screen.getByTestId('prev-page-btn')).toBeDisabled()
  })

  it('has next page button disabled if reached limit', () => {
    render(
      <TestProvider>
        <TestComponent />
      </TestProvider>
    )

    expect(screen.getByTestId('current-page')).toHaveTextContent(
      'Current page: 1'
    )
    expect(screen.getByTestId('next-page-btn')).not.toBeDisabled()

    fireEvent.click(screen.getByTestId('next-page-btn'))
    fireEvent.click(screen.getByTestId('next-page-btn'))
    fireEvent.click(screen.getByTestId('next-page-btn'))
    fireEvent.click(screen.getByTestId('next-page-btn'))

    expect(screen.getByTestId('current-page')).toHaveTextContent(
      'Current page: 5'
    )
    expect(screen.getByTestId('next-page-btn')).toBeDisabled()
    expect(screen.getByTestId('next-page-btn')).toHaveStyle({
      opacity: '0.5',
      pointerEvents: 'none'
    })
  })
})
