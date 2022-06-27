import styled from 'styled-components'

import { Grid } from 'presenters/atoms/grid'

const CardImage = styled('img')`
  transition: all 0.5s ease-in-out;
  width: 100%;
  opacity: 1;
  border-radius: 5%;

  &:hover {
    opacity: 0.5;
  }
`

const CardText = styled('span')`
  font-size: 1rem;
  line-height: 1.5rem;
  text-transform: ${(props) => props.textTransform || 'none'};
`

const CardCaption = styled('span')`
  font-size: 0.8125rem;
  line-height: normal;
`

const CardBody = styled(Grid)`
  padding: 1rem;
  flex-direction: column;
`

const Card = styled(Grid)`
  flex-direction: column;
  width: 100%;
  border: ${(props) => `1px solid ${props.theme.colors.black}`};
  border-radius: 5%;
  cursor: pointer;
`

Card.Image = CardImage
Card.Text = CardText
Card.Caption = CardCaption
Card.Body = CardBody

export default Card
