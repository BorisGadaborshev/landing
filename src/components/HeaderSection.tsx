import styled from 'styled-components'

const Header = styled.header`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: clamp(0.6rem, 1.5vw, 1.25rem);
  padding-left: clamp(0rem, 0.6vw, 0.6rem);
`

const Title = styled.h1`
  margin: 0;
  max-width: 650px;
  font-size: clamp(2.1rem, 5vw, 4.5rem);
  line-height: 0.81;
  font-weight: 800;
  background: linear-gradient(180deg, #ffefd8 30%, #c9872b 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

const Subtitle = styled.p`
  margin: 0;
  max-width: 760px;
  font-size: clamp(1.1rem, 2.2vw, 1.875rem);
  line-height: 1.17;
  background: linear-gradient(205deg, #f1d5c5 19%, #c5a28e 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

export function HeaderSection() {
  return (
    <Header>
      <Title>Оживите фотографии ко Дню Победы</Title>
      <Subtitle>Подарите новую жизнь вашим дорогим воспоминаниям.</Subtitle>
    </Header>
  )
}
