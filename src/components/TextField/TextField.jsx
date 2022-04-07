import styled from 'styled-components';
import { TextField } from '@mui/material';

const StyledTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#57AE5B',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#57AE5B',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#57AE5B',
    },
  },
});

export default StyledTextField;
