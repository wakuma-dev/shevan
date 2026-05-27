import Hero from './components/Hero';
import { Helmet } from "react-helmet-async"
const Home = () => {
  return (
    <main>
      <Helmet>
        <title>
          SHEVAN | Jewelry Bodywear - shevan.world
        </title>
        
      </Helmet>
      <Hero />
    </main>
  )
}

export default Home
