import React, { useState, useEffect } from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Stack,
  InputLabel, Grid
} from '@mui/material';
import { DeleteBtn } from './InputGroup.styles'
import Author from '../Contributors/Author/Author';
import Organization from '../Contributors/Organization/Organization';
import Advanced from '../Contributors/Advanced/Advanced';



const InputGroup = ({ contributors, setContributors, id }) => {
  const [value, setValue] = useState('author');

  const handleChange = async (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const index = contributors.findIndex(
      (contributor) => contributor.id === id
    );
    const temp = contributors;
    temp[index] = { ...temp[index] };
    setContributors(temp);
  }, [value, contributors, id, setContributors]);

  const DeleteID = () => {
    const items = contributors.filter(index => index.id === id);
    setContributors(items);
  }
  return (
    <Stack>
      <FormControl style={{marginRight: 'auto', marginLeft: 'auto'}}>
        <Grid container spacing={2} columns={16} >
          <RadioGroup
            row
            aria-label="gender"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel value="author" control={<Radio />} label="Author" />
            <FormControlLabel value="organization"
              control={<Radio />}
              label="Organization" />
              <FormControlLabel value="advanced"
            control={<Radio />}
            label="Advanced" />
          </RadioGroup>
        </Grid>
      </FormControl>
      {/* <FormControl component="fieldset" sx={{marginLeft: '13%', marginTop: '-3%'}}>
        <RadioGroup
          row
          aria-label="gender"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="author" control={<Radio />} label="Author" />
          <FormControlLabel
            value="organization"
            control={<Radio />}
            label="Organization"
          />
          <FormControlLabel
            value="advanced"
            control={<Radio />}
            label="Advanced"
          />
          
        </RadioGroup>
      </FormControl> */}
      {value === 'author' && (
        <Author
          contributors={contributors}
          setContributors={setContributors}
          type={value}
          id={id}
        />
      )}
      {value === 'organization' && (
        <Organization
          contributors={contributors}
          setContributors={setContributors}
          type={value}
          id={id}
        />
      )}
      {value === 'advanced' && (
        <Advanced
          contributors={contributors}
          setContributors={setContributors}
          type={value}
          id={id}
        />
      )}
      {/* <DeleteBtn onClick={DeleteID} /> */}
    </Stack>

  );
};

export default InputGroup;
