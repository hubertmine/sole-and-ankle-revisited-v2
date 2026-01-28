import { BREAKPOINTS } from './constants';

const theme = {
  colors: {
    primary: '#000',
    secondary: '#fff',
  },
  breakpoints: {
    laptopAndBelow: `(max-width: ${BREAKPOINTS.laptop})`,
    tabletAndBelow: `(max-width: ${BREAKPOINTS.tablet})`,
    phoneAndBelow: `(max-width: ${BREAKPOINTS.phone})`,
  },
};
export default theme;
