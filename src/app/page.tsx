import Banner from '@/components/Banner'
import FamousItemsCard from '@/components/FamousItemsCard'
import Image from 'next/image'
import Food from './food/page'
import Category from './category/page'

export default function Home() {
  return (
    <main className="">
      <Banner/>
      <FamousItemsCard/>
      <Food/>
      <Category/>
    </main>
  )
}
