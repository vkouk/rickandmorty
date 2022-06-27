import styled from 'styled-components'

const Button = styled('button')`
  text-transform: uppercase;
  border: ${(props) => `1px solid ${props.theme.colors.black}`};
  background: transparent;
  transition: all 0.5s ease;
  padding: 0.5rem;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &:hover {
    background: ${(props) => props.theme.colors.black};
    color: white;
  }
`

export default Button
