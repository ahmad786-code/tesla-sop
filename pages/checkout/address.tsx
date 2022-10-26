import { Typography, Grid, TextField, FormControl, InputLabel, Select, MenuItem, Box, Button } from '@mui/material'
import { ShopLayout } from '../../components/layouts'

const AddressPage = () => {
    return (
        <ShopLayout title={'Address'} pageDescription={'Lorem ipsum dollar'}>
            <Typography variant='h1' component='h1'>Address</Typography>

            <Grid container spacing={2} sx={{mt:2}}>
                <Grid item xs={12} sm={6}>
                    <TextField label="Name" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Surname" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Address" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Address 2" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Postal Code" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="City" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel>Country</InputLabel>
                        <Select variant='filled' label="Country" value={1}>
                            <MenuItem value={1}>Mexico</MenuItem>
                            <MenuItem value={1}>Germany</MenuItem>
                            <MenuItem value={1}>Turkey</MenuItem>
                            <MenuItem value={1}>San Francisco</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Phone" variant='filled' fullWidth />
                </Grid>
            </Grid>
            <Box sx={{mt:5}} display="flex" justifyContent='center'>
                <Button color="secondary" className='circular-btn' size="large">Proceed Order</Button>
            </Box>
        </ShopLayout>
    )
}

export default AddressPage