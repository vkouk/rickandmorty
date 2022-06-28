import React from 'react'
import PropTypes from 'prop-types'

import { Grid } from 'presenters/atoms/grid'
import Button from 'presenters/atoms/button'

const Pagination = ({
  onPrevPage,
  onNextPage,
  isPrevPageDisabled = false,
  isNextPageDisabled = false
}) => {
  Pagination.propTypes = {
    onPrevPage: PropTypes.func.isRequired,
    onNextPage: PropTypes.func.isRequired,
    isPrevPageDisabled: PropTypes.bool,
    isNextPageDisabled: PropTypes.bool
  }

  return (
    <Grid margin="2rem 0 0 0" justifyContent="space-between">
      <Button
        onClick={onPrevPage}
        disabled={isPrevPageDisabled}
        data-testhook-id="prev-page-btn"
      >
        Prev Page
      </Button>
      <Button
        onClick={onNextPage}
        disabled={isNextPageDisabled}
        data-testhook-id="next-page-btn"
      >
        Next Page
      </Button>
    </Grid>
  )
}

export default Pagination
