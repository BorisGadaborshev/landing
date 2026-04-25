import styled from 'styled-components'
import { u } from './design'
import { HeaderSection } from './components/HeaderSection'
import { HeroBackdrop } from './components/HeroBackdrop'
import { LetterCard } from './components/LetterCard'
import { MainCard } from './components/MainCard'

const Page = styled.main`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #0e1116;
  overflow-x: hidden;
`

const Stage = styled.div`
  position: relative;
  z-index: 1;
  width: ${u(1440)};
  height: ${u(1942)};
  margin: 0 auto;
  overflow: hidden;
  border-radius: ${u(20)};
  background: transparent;
`

function App() {
  return (
    <Page>
      <HeroBackdrop />
      <Stage>
        <LetterCard />
        {/* <img src="/images/letter-corner-from-figma.png" alt="" /> */}
        <HeaderSection />
        <MainCard />
      </Stage>
    </Page>
  )
}

export default App
