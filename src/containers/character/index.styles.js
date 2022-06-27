import styled from 'styled-components'

import { Grid } from 'presenters/atoms/grid'

const Container = styled(Grid)`
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 1rem;
`

const Image = styled('img')`
  width: 100%;
  max-width: 20rem;
  height: 20rem;
  border-radius: 5%;
`

const Text = styled('span')`
  font-size: 0.95rem;
  font-weight: ${(props) => props.weight || 'normal'};
  line-height: 1rem;
  margin: ${(props) => props.margin || '0.5rem 0'};
  text-transform: ${(props) => props.textTransform || 'none'};
  word-break: break-all;
  text-align: center;

  ${(props) =>
    props.appendSlash &&
    `
    &:after {
      content: '/';
      margin-left: 0.5rem;
    }
  `}
`

const Header = styled(Grid)`
  width: 100%;
  flex-direction: column;
  align-items: center;
  border-bottom: ${(props) => `1px solid ${props.theme.colors.black}`};
`

export { Container, Image, Text, Header }
