import makeStyles from 'styled-components';
import { Select } from '@mui/material';

const SelectStyles = makeStyles(Select)`
    Select: {
      "&:after": {
        borderBottomColor: "darkred",
      },
      "& .MuiSvgIcon-root": {
        color: "darkred",
      },
    },
  }`;

export default SelectStyles;
