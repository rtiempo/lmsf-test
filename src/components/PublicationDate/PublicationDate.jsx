import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

export default function PublicationDate() {
    const [state, setState] = React.useState({
        // gilad: true,
        // jason: false,
        // antoine: false,
    });
    const [type, setType] = React.useState('');

    const handleChange2 = (event) => {
        setType(event.target.value);
    };
    const [value, setValueFordateFrom] = React.useState(null);
    const [value2, setValueForDateTo] = React.useState(null);

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    return (
        <Box sx={{ display: 'flex', marginTop: "10px", marginLeft: "35px" }}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                <FormLabel component="legend" sx={{ color: "black", fontSize: "12px" }}>PUBLICATION DATE</FormLabel>
                <Box sx={{ width: "170px", marginLeft: "1px", marginTop: "10px", fontSize: "-10px" }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker inputProps={{ style: { fontSize: 10,fontFamily: 'Lato' , } }}
                            label="From"
                            value={value}
                            onChange={(newValue) => {
                                setValueFordateFrom(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} InputLabelProps={{ style: { fontSize: 15 } }} />}
                        />
                    </LocalizationProvider>
                </Box>
                <Box sx={{ width: "170px", marginLeft: "1px", marginTop: "10px", fontSize: "-10px" }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker inputProps={{ style: { fontSize: 10, fontFamily: 'Lato' ,} }}
                            label="To"
                            value={value2}
                            onChange={(newValue) => {
                                setValueForDateTo(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} InputLabelProps={{ style: { fontSize: 15 } }} />}
                        />
                    </LocalizationProvider>
                </Box>
            </FormControl>
        </Box>
    );
}
