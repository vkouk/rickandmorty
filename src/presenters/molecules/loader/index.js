import React from 'react'
import styled, { keyframes } from 'styled-components'

import { Grid } from 'presenters/atoms/grid'

const spinAnimation = keyframes`
 0% { transform: rotate(0deg); }    
 100% { transform: rotate(360deg); }
`

const LoaderBall = styled('div')`
  width: 10rem;
  height: 10rem;
  border: ${(props) => `0.85rem solid ${props.theme.colors['grey-100']}`};
  border-top: ${(props) => `0.85rem solid ${props.theme.colors['blue-100']}`};
  border-radius: 50%;
  animation: ${spinAnimation} 2s linear infinite;
`

const Loader = () => (
  <Grid width="100%" height="100%" justifyContent="center" alignItems="center">
    <LoaderBall />
  </Grid>
)

export default Loader
