import { useState } from 'react'
import {NextPage, GetServerSideProps, GetStaticPaths , GetStaticProps} from 'next'
import { Grid, Box, Typography, Button, Chip } from '@mui/material'
import { ShopLayout } from '../../components/layouts'
import { ItemCounter } from '../../components/ui'
import { ProductSlideShow, SizeSelector } from '../../components/products'
import { useRouter } from 'next/router'
import { IProduct, ICartProduct, ISize} from '../../interfaces'
import { dbProducts  } from '../../database'

 

interface Props {
  product: IProduct
}

const ProductPage:NextPage<Props> = ({product}) => {
  const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
    _id: product._id,
    image: product.images[0],
    price:product.price ,
    size: undefined,
    slug:product.slug,
    title:product.title,
    gender:product.gender,
    quantity: 2
  })

  const router =  useRouter()

  const selectedSize = (size: ISize) => {
    setTempCartProduct((currentProduct) => ({
      ...currentProduct,
      size
    }))
    
  }

  const onUpdateQuantity = (quantity: number) => {
    setTempCartProduct((currentProduct) => ({
      ...currentProduct,
      quantity
    }))
    
  }

  const onAddProduct = () => {
    if(!tempCartProduct.size) {return}
    router.push('/cart')
  }


  return (
    <ShopLayout title={product.title} pageDescription={product.description} imageFullUrl='undif' >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlideShow images={product.images} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display='flex' flexDirection='column'>
            {/* Title */}
            <Typography variant='h1' component="h1">{product.title}</Typography>
            <Typography variant='subtitle1' component="h2">{product.price}</Typography>

            {/* Amount */}
            <Box sx={{ my: 2 }}>
              <Typography variant='subtitle2'>Quantity</Typography>
              <ItemCounter maxValue={product.inStock} currentValue={tempCartProduct.quantity} updatedQuality={onUpdateQuantity} />

              <SizeSelector
                selectedSize={ tempCartProduct.size}
                sizes={product.sizes}
                onSelectedSize={selectedSize }
                 />
            </Box>
            {/* Add */}
            {
            product.inStock > 0 ? 
            <Button color="secondary" className='circular-btn'>{tempCartProduct ? 'Add to cart' : 'Select a size'}</Button>
            : <Chip label="Out of stock" color='error' variant='outlined'/>
            }

            

            {/* Description */}
            <Box sx={{ mt: 3 }}>
              <Typography variant='subtitle2'>Description</Typography>
              <Typography variant='body2'>{product.description}</Typography>
            </Box>


          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time


// export const getServerSideProps: GetServerSideProps = async ({params}) => {
 
//   const {slug} = params as {slug: string}
//   const product = await  dbProducts.getProductBySlug(slug)

//   if(!product) {
//     return {
//       redirect:{
//         redirect: '/',
//         permanent: false
//       } 
      
//     }
//   }

//   return {
//     props: {
//       product
//     }
//   }
// }

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes


export const getStaticPaths: GetStaticPaths = async (ctx) => {
 
  const productSlug = await dbProducts.getAllProductSlug()

  return {
    paths: productSlug.map(({slug}) => ({
      params: {
        slug
      }
    })),
    // [
    //   {
    //     params: {
          
    //     }
    //   }
    // ],
    fallback: "blocking"
  }
}





export const getStaticProps: GetStaticProps = async ({params}) => {

  const {slug = ''} = params as {slug: string}

const product = await  dbProducts.getProductBySlug(slug)

  if(!product) {
    return {
      redirect:{
        redirect: '/',
        permanent: false
      } 
      
    }
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24
  }
}

export default ProductPage