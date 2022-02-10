import styled from 'styled-components';

export const Stack = styled.div`
  display: ${({ inline = false }) => (inline ? 'inline-grid' : 'grid')};
  grid-auto-flow: ${({ flow = 'column' }) => flow};
  grid-gap: ${({ gap = 0 }) =>
    Array.isArray(gap) ? `${gap[0]}rem ${gap[1]}rem` : `${gap}rem`};
  align-items: ${({ alignItems = 'center' }) => alignItems};
  justify-content: ${({ justifyContent = 'normal' }) => justifyContent};
  grid-auto-columns: ${({ autoColumns = 'auto' }) => autoColumns};
  grid-template-columns: ${({ templateColumns = 'none' }) => templateColumns};
  grid-auto-rows: ${({ autoRows = 'auto' }) => autoRows};
  grid-template-rows: ${({ templateRows = 'none' }) => templateRows};
  justify-items: ${({ justifyItems = 'legacy' }) => justifyItems};
  text-align: ${({ textAlign = 'left' }) => textAlign};
`;



export default Stack;