import Banner from '@/components/Banner'
import FamousItemsCard from '@/components/FamousItemsCard'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <Banner/>
      <FamousItemsCard/>
    </main>
  )
}
