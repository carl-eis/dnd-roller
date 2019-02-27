import Select from '@material-ui/core/Select';
import styled from 'styled-components';
import { media } from '~/core/styles';

export const StyledSelect = styled(Select)<any>`
  max-width: 250px;
  ${media.phone`max-width: 100%;`}
`;
