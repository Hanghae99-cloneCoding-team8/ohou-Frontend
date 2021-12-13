import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const { is_container, children, is_flex, flex_align, flex_justify } = props;
  const styles = {
    is_container,
    is_flex,
    flex_align,
    flex_justify,
  };
  return (
  <GridBox {...styles}>
      {children}
  </GridBox>);
};

Grid.defaultProps = {
  is_container: false,
  is_flex: false,
  flex_align: false,
  flex_justify: false,
};
const GridBox = styled.div`
  ${(props) => props.is_container && `max-width: 1129px; margin: 0 auto;`}
  ${(props) => props.is_flex && `display: flex;`}
  ${(props) => props.flex_align && `align-items: ${props.flex_align};`} 
  ${(props) => props.flex_justify && `justify-contents: ${props.flex_justify};`}
`;

export default Grid;
