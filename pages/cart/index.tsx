import { Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { CartList, OrderSummary } from '../../components/cart'
import { ShopLayout } from '../../components/layouts'

const CartPage = () => {
    return (
        <ShopLayout title={'Cart - 3'} pageDescription={'Add products to cart'}>
            <Typography variant="h1" component='h1'>Cart</Typography>

            <Grid container>
                <Grid item xs={12} sm={7}>
                    <CartList  />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Card className="summary-card">
                        <CardContent>
                            <Typography variant='h2'>Order</Typography>
                            <Divider sx={{ my: 1 }} />
                            <OrderSummary />
                            <Box sx={{ mt: 3 }}>
                                <Button color="secondary" fullWidth className="circular-btn">Checkout</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </ShopLayout>
    )
}

export default CartPage