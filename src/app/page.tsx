import Banner from '@/components/Banner'
import FamousItemsCard from '@/components/FamousItemsCard'
import Image from 'next/image'
import Food from './food/page'

export default function Home() {
  return (
    <main className="">
      <Banner/>
      <FamousItemsCard/>
      <Food/>
    </main>
  )
}
