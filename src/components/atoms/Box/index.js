import styled from 'styled-components/native';

import {
    borderProps,
    colorProps,
    colorPropsTypes,
    flexProps,
    flexPropsTypes,
    marginProps,
    marginPropsTypes,
    paddingProps,
    paddingPropsTypes,
    sizeProps,
    sizePropsTypes,
} from '@styles/styleProps';

const Box = styled.View`
  ${sizeProps}
  ${flexProps}
  ${colorProps}
  ${paddingProps}
  ${marginProps}
  ${borderProps}
`;

Box.propTypes = {
    ...sizePropsTypes,
    ...flexPropsTypes,
    ...colorPropsTypes,
    ...paddingPropsTypes,
    ...marginPropsTypes,
};

export default Box;