import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function AutoSelect({data, fieldname, val}) {
    return (
        <Autocomplete
            id="made-select"
            sx={{ width: 200 }}
            options={data}
            autoHighlight
            onChange = {
                (event, newValue) => {
                    val(newValue);
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
                        autoComplete: 'new-password',
                    }}
                />
            )}
        />
    );
}

