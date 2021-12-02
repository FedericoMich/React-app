import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export const DropdownFilter = () => {
    return (
      <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={classList.map((option) => option.className)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Selezione la classe"
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
        />
      </Stack>
    );
  }

  const classList = [
    { className: 'Fullstack Developer with Cloud Technologies '},
    { className: 'Cloud Administrator e Security Engineer'},
    { className: 'Big Data Engineer e Solutions Architect'},
    { className: 'Fullstack 4 Digital Marketing'},
  ];
