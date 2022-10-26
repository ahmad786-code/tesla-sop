import React, { FC } from 'react'
import Head from 'next/head'
import { Navbar, SideMenu } from '../ui'

interface Props {
  title: string
  pageDescription: string
  imageFullUrl?: string
  children?: React.ReactNode;
}

export const ShopLayout: FC<Props> = ({ children, title, imageFullUrl, pageDescription }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />

        {
          imageFullUrl && (
            <meta name="description" content={imageFullUrl} />
          )
        }
      </Head>

      <Navbar/>

      <SideMenu/>
      
      <main style={{ margin: '80px auto', maxWidth: '1440px', padding: '0 30px' }}>
        {children}
      </main>
      <footer>
        footer
      </footer>
    </>
  )
}
