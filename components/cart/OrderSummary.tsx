import { Grid, Typography } from "@mui/material"


export const OrderSummary = () => {
    return (
        <Grid container>
            <Grid item xs={6}>
                <Typography>Total: Products</Typography>
            </Grid>

            <Grid item xs={6} display="flex" justifyContent='end'>
                <Typography>3</Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography>Sub: Total</Typography>
            </Grid>

            <Grid item xs={6} display="flex" justifyContent='end'>
                <Typography>$378</Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography>Taxes: </Typography>
            </Grid>

            <Grid item xs={6} display="flex" justifyContent='end'>
                <Typography>$11.76</Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography sx={{ mt: 2 }} variant='subtitle1'>Total: </Typography>
            </Grid>

            <Grid item xs={6} display="flex" justifyContent='end'>
                <Typography sx={{ mt: 2 }} variant='subtitle1'>$231.76</Typography>
            </Grid>


        </Grid>
    )
}
