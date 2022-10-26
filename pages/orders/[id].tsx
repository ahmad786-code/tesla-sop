import NextLink from 'next/link'
import { Chip, Card, CardContent, Divider, Grid, Typography ,Link} from '@mui/material'
import {CreditCardOffOutlined, CreditScoreOutlined} from '@mui/icons-material'
import { Box } from '@mui/system'
import { CartList, OrderSummary } from '../../components/cart'
import { ShopLayout } from '../../components/layouts'

const OrderPage = () => {
  return (
    <ShopLayout title={'Order Summary 12322443'} pageDescription={'Summary of the order'}>
    <Typography variant="h1" component='h1'>Order: 123213</Typography>

    {/* <Chip sx={{my:2}} label="Payment padding" variant="outlined" color="error" icon={<CreditCardOffOutlined/>}/> */}
    <Chip sx={{my:2}} label="Payment Success" variant="outlined" color="success" icon={<CreditScoreOutlined/>}/>

    <Grid container>
        <Grid item xs={12} sm={7}>
            <CartList  />
        </Grid>
        <Grid item xs={12} sm={5}>
            <Card className="summary-card">
                <CardContent>
                    <Typography variant='h2'>Summary (3 Products)</Typography>

                    <Divider sx={{ my: 1 }} />

                    <Box display="flex" justifyContent='space-between'>
                    <Typography variant='subtitle1'>Edit address</Typography>
                        <NextLink href="/checkout/address" passHref>
                            <Link underline="always">Edit</Link>
                        </NextLink>
                    </Box>
                    
                    <Typography >Ahmed Raza</Typography>
                    <Typography >35400</Typography>
                    <Typography >Pakistan</Typography>
                    <Typography >Punjab</Typography>
                    <Typography >Chiniot</Typography>
                    <Typography >047-63361494</Typography>

                    <Divider sx={{ my: 1 }} />

            
                    <Box display="flex" justifyContent='end'>
                     
                        <NextLink href="/cart" passHref>
                            <Link underline="always">Edit</Link>
                        </NextLink>
                    </Box>

                    <OrderSummary />

                    <Box sx={{ mt: 3 }}>
                         <h1>Pay</h1>
                         <Chip sx={{my:2}} label="Payment Success" variant="outlined" color="success" icon={<CreditScoreOutlined/>}/>
                    </Box>
                </CardContent>
            </Card>
        </Grid>

    </Grid>
</ShopLayout>
  )
}

export default OrderPage