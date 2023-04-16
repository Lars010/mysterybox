import Head from 'next/head'
import Image from 'next/image' 
import Layout from '../components/layout'
import Header from '../components/header'
import MysteryBoxes from '../components/mystery-boxes'

export default function Home() {
  return (
    <Layout>
      <Header />
      <MysteryBoxes />
    </Layout>
  )
}
