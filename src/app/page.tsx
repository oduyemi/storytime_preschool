import { Banner } from '@/components/Banner'
import { Features } from '@/components/Features'
import { Header } from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <Header />
      <Banner />
      <Features />
    </main>
  )
}
