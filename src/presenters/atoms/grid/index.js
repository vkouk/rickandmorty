import styled from 'styled-components'

const Grid = styled('div')`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  ${(props) => (props.column ? '' : 'flex-wrap: wrap')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  padding: ${(props) => (props.padding ? props.padding : '0')};
  ${(props) =>
    props.justifyContent ? `justify-content: ${props.justifyContent}` : ''};
  ${(props) => (props.alignItems ? `align-items: ${props.alignItems}` : '')};
  ${(props) => (props.width ? `width: ${props.width}` : '')};
  ${(props) => (props.height ? `height: ${props.height}` : '')};
  ${(props) => (props.flex ? `flex: ${props.flex}` : '')};
  ${(props) => (props.scrollable ? 'overflow-y:auto' : '')};
`

const GridContainer = styled('div')`
  display: grid;
  grid-template-columns: ${(props) =>
    `repeat(auto-fill, minmax(${props.colWidth || '13rem'}, 1fr))`};
  grid-gap: 2rem;
  ${(props) => (props.width ? `width: ${props.width}` : '')};
`

export { Grid, GridContainer }
