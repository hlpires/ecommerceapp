import React from 'react'
import {client} from '../lib/client'
import {Header,FooterBanner,Banner} from '../components/index'



const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
    </div>
  )

  //export const getServerSideProps = async =>{
  //  const query = '*[_type == "product"]';
 //   const products = await client.fetch(query);
 // }
 // return{
 //   props: {products,bannerData}
 // }
}

export default Home