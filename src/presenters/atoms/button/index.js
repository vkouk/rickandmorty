import styled from 'styled-components'

const Button = styled('button')`
  text-transform: uppercase;
  border: ${(props) => `1px solid ${props.theme.colors.black}`};
  background: transparent;
  transition: all 0.5s ease;
  padding: ${(props) => props.padding || '0.5rem'};
  margin: ${(props) => props.margin || '0'};
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &:hover {
    background: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
  }
`

export default Button
