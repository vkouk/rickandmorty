import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Grid } from 'presenters/atoms/grid'
import Button from 'presenters/atoms/button'

const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
    <Grid
      column
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      padding="1rem"
    >
      <span>Page not found</span>
      <Button margin="1rem 0 0 0" onClick={() => navigate('/')}>
        Return to home page
      </Button>
    </Grid>
  )
}

export default NotFoundPage
