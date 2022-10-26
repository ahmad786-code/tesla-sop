import NextLink from 'next/link'
import { ShopLayout } from '../../components/layouts'
import { Box, Typography, Link } from '@mui/material'
import { RemoveShoppingCartOutlined } from '@mui/icons-material'


const EmptyPage = () => {
    return (
        <ShopLayout title={'Cart Empty'} pageDescription={'lorem ipsum dollar'}>
            <Box display="flex" justifyContent='center' alignItems='center' height='calc(100vh - 200px)'
                sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
            >
                <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
                <Box display='flex' flexDirection='column' alignItems='center'>
                    <Typography>Your Cart is Empty</Typography>
                    <NextLink href="/" passHref>
                        <Link  variant='h4' color="secondary">
                            Back Home
                        </Link>
                    </NextLink>
                </Box>
            </Box>
        </ShopLayout>
    )
}

export default EmptyPage