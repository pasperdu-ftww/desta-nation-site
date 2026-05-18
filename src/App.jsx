import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Argument from './components/Argument.jsx'
import Video from './components/Video.jsx'
import Platform from './components/Platform.jsx'
import Modalities from './components/Modalities.jsx'
import Team from './components/Team.jsx'
import Creation from './components/Creation.jsx'
import Flow from './components/Flow.jsx'
import Retention from './components/Retention.jsx'
import Investment from './components/Investment.jsx'
import AddOns from './components/AddOns.jsx'
import CustomAgent from './components/CustomAgent.jsx'
import FAQ from './components/FAQ.jsx'
import ProofStatement from './components/ProofStatement.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { useScrollReveal } from './hooks/useScrollReveal.js'

export default function App() {
  useScrollReveal()

  return (
    <>
      <Nav />
      <Hero />
      <Argument />
      <Video />
      <Platform />
      <Modalities />
      <Team />
      <Creation />
      <Flow />
      <Retention />
      <Investment />
      <AddOns />
      <CustomAgent />
      <FAQ />
      <ProofStatement />
      <Contact />
      <Footer />
    </>
  )
}
