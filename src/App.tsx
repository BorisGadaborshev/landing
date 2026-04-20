import styled from 'styled-components'
import { HeaderSection } from './components/HeaderSection'
import { InstructionSection } from './components/InstructionSection'
import { LetterCard } from './components/LetterCard'
import { TemplateList } from './components/TemplateList'
import { UploadSection } from './components/UploadSection'

const Page = styled.main`
  min-height: 100vh;
  padding: 0 0 2.5rem;
  background: #0e1116;
  color: #0e1116;
  overflow: hidden;
`

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-image: url('/images/hero-background-7eaeba.png');
  background-size: cover;
  background-position: center top;
  opacity: 0.46;
  filter: blur(4px);
  pointer-events: none;
`

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1440px;
  margin: 0 auto;
  padding: clamp(1.1rem, 2vw, 1.7rem) clamp(1rem, 3vw, 3.125rem) 0;

  @media (max-width: 768px) {
    padding-inline: 0.8rem;
  }
`

const Card = styled.section`
  position: relative;
  margin-top: clamp(8rem, 14vw, 17rem);
  background: #ebe6df;
  border-radius: 35px;
  box-shadow: 4px -6px 12px rgba(0, 0, 0, 0.48);
  padding: clamp(1.3rem, 2vw, 1.9rem) clamp(1rem, 1.6vw, 1.55rem)
    clamp(1.35rem, 2.3vw, 2.25rem);

  @media (max-width: 768px) {
    margin-top: 2rem;
    border-radius: 22px;
  }
`

const CardHeading = styled.h2`
  margin: 0 0 clamp(0.65rem, 1.2vw, 1rem);
  font-size: clamp(2rem, 4.8vw, 4.5rem);
  line-height: 0.81;
  font-weight: 500;
  text-align: center;
`

const Divider = styled.hr`
  border: none;
  border-top: 2px solid #404040;
  margin: 0 0 clamp(0.85rem, 1.3vw, 1.25rem);
`

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(350px, 613px) minmax(300px, 537px);
  justify-content: space-between;
  align-items: start;
  gap: clamp(1rem, 2vw, 2rem);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

const Actions = styled.div`
  display: grid;
  gap: 0.85rem;
  align-content: start;

  @media (max-width: 1024px) {
    gap: 0.75rem;
  }
`

const GenerateButton = styled.button`
  justify-self: end;
  border: none;
  border-radius: 999px;
  background: #0e1116;
  color: #ebe6df;
  padding: clamp(0.85rem, 1.4vw, 1.375rem) clamp(1.6rem, 4vw, 6.25rem);
  font-size: clamp(1.1rem, 2.2vw, 2.25rem);
  font-weight: 500;
  line-height: 1.17;
  cursor: pointer;

  @media (max-width: 1024px) {
    justify-self: stretch;
    padding-inline: 1.5rem;
  }
`

const PriceHint = styled.p`
  margin: 0;
  justify-self: end;
  color: #0e1116;
  opacity: 0.8;
  font-size: clamp(0.95rem, 1.6vw, 1.625rem);
  line-height: 1.17;

  @media (max-width: 1024px) {
    justify-self: center;
  }
`

function App() {
  return (
    <Page>
      <Backdrop />
      <Content>
        <LetterCard />
        <HeaderSection />
        <Card>
          <CardHeading>Оживите свою фотографию</CardHeading>
          <Divider />
          <InstructionSection />
          <Divider />
          <MainGrid>
            <UploadSection />
            <Actions>
              <TemplateList />
              <GenerateButton type="button">Сгенерировать</GenerateButton>
              <PriceHint>(оплата QR-кодом; 189 руб)</PriceHint>
            </Actions>
          </MainGrid>
        </Card>
      </Content>
    </Page>
  )
}

export default App
