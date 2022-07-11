import { Container, Grid, Paper } from '@mui/material'
import { TextField, Typography, Divider } from '@mui/material'
import React, { useContext } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { FilterContext } from 'src/contexts/FilterContext';

const Filters = ({ typeArray = [] }: { typeArray: string[] }) => {

    const { type, setType, name, setName, platForm, setPlatForm } = useContext(FilterContext)
    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value);
    };

    return (
        <Container sx={{ textAlign: 'center', p: '5px' }}>
            <Grid sx={{ p: '5px', backgroundColor: '#303136' }}>
                <Grid textAlign="left" sx={{ p: '5px' }}>
                    <Typography
                        gutterBottom
                        variant="subtitle1"
                        color="text.secondary"
                    >
                        Search your result
                    </Typography>
                </Grid>
                <Grid container>
                    <Grid sm={4} sx={{ p: '5px' }}>
                        <TextField
                            label='Name'
                            placeholder='Enter name...'
                            type='name'
                            variant="outlined"
                            fullWidth
                            value={name}
                            color="error"
                            onChange={(e: any) => setName(e.target.value)}
                        />
                    </Grid>
                    <Grid sm={4} sx={{ p: '5px' }}>
                        <TextField
                            label='platForm'
                            placeholder='Enter platForm...'
                            type='platForm'
                            variant="outlined"
                            fullWidth

                            value={platForm}
                            color="error"
                            onChange={(e: any) => setPlatForm(e.target.value)}
                        />
                    </Grid>
                    <Grid sm={4} sx={{ p: '5px' }}>
                        <FormControl fullWidth color="error">
                            <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={type}
                                label="Type"
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {typeArray.map(item => <MenuItem key={item} value={item}>{item}</MenuItem>)}
                            </Select>

                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>

            <Divider />
        </Container>
    )
}

export default Filters