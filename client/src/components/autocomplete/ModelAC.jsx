import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function ModelSelect({data, fieldname, val, setVal, madeval}) {
    return (
        <Autocomplete
            id="model-select"
            sx={{ width: 200 }}
            value={madeval ? val : null}
            options={data}
            autoHighlight
            disabled={madeval ? false:true}
            isOptionEqualToValue={(option, value) => option.value === value.value || option.value === ''}
            onChange = {
                (event, newValue) => {
                    setVal(newValue);
                }
            }
            getOptionLabel={(option) => option}
            renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>

                    {option}
                </Box>
            )}

            renderInput={(params) => (
                <TextField
                    {...params}
                    label= {fieldname}
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}

                />
            )}
        />
    );
}

