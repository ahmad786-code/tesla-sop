
import { Typography } from '@mui/material'
import { ShopLayout } from '../../components/layouts'
import { ProductList } from '../../components/products'
import { useProducts } from '../../hooks'
import { FullScreenLoading } from '../../components/ui'

const KidPage = () => {
    const { products, isError, isLoading } = useProducts('/products?gender=kid')
    return (
      <ShopLayout title={'Tesla-Shop - Kids'} pageDescription={'Buy Tesla '} >
        <Typography variant='h1' component='h1'>Tesla Home</Typography>
        <Typography variant='h2' sx={{ mb: 1 }}>Todo Products</Typography>
  
        {
          isLoading ? <FullScreenLoading /> : <ProductList products={products} />
        }
  
      </ShopLayout>
    )
}

export default KidPage