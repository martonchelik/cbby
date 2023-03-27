import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ModelSelect({data, fieldname, val, madeval}) {
    const modelname= [];
    data.map(car=>{
        if (madeval === car.made) {modelname.push(car.model)}
    })
    const umodelname =  new Set(modelname)
    return (
        <Autocomplete
            id="made-select"
            sx={{ width: 200 }}
            options={Array.from(umodelname)}
            autoHighlight
            disabled={madeval ? false:true}

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
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
}

