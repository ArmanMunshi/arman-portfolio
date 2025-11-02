import dynamic from 'next/dynamic'
const ArmanMunshiPortfolio = dynamic(() => import('../components/ArmanMunshiPortfolio'), { ssr: false })

export default function Home() {
  return <ArmanMunshiPortfolio />
}
