import styled from 'styled-components'

const Card = styled.aside`
  position: absolute;
  right: -4.6rem;
  top: -1rem;
  width: min(43vw, 540px);
  min-height: 530px;
  padding: 7.2rem 3rem 3rem;
  border-radius: 20px;
  background-image: url('/images/letter-paper-289ebe.png');
  background-size: cover;
  background-position: center;
  box-shadow: 8px 41px 4px rgba(0, 0, 0, 0.25);
  opacity: 0.91;
  filter: blur(0.4px);
  transform: rotate(-3deg);
  z-index: 0;

  @media (max-width: 1340px) {
    display: none;
  }
`

const Text = styled.p`
  margin: 0;
  color: #1f1f1f;
  font-family: 'Brush Script MT', 'Segoe Script', cursive;
  font-size: clamp(1.8rem, 2.6vw, 2.7rem);
  line-height: 1.25;
  white-space: pre-line;
`

export function LetterCard() {
  return (
    <Card aria-hidden="true">
      <Text>
        {`Дорогая моя,\nкак хочется снова увидеть твою улыбку, услышать твой смех...\n\nЗдесь тяжело, но мысли о тебе греют сильнее любого огня.\nВернусь с Победой и будем вместе, как мечтали.`}
      </Text>
    </Card>
  )
}
