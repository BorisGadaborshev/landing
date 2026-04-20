import styled from 'styled-components'

const Wrapper = styled.section`
  color: #0e1116;
`

const Heading = styled.h2`
  margin: 0 0 clamp(0.85rem, 1.4vw, 1.2rem);
  font-size: clamp(1.3rem, 2.1vw, 1.875rem);
  font-weight: 500;
  line-height: 1.17;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(0.75rem, 2vw, 2.3rem);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

const Step = styled.p`
  margin: 0;
  max-width: 600px;
  font-size: clamp(0.98rem, 1.7vw, 1.625rem);
  line-height: 1.17;
  font-weight: 400;
`

const Label = styled.span`
  display: block;
  font-weight: 500;
  margin-bottom: 0.2rem;
`

export function InstructionSection() {
  return (
    <Wrapper>
      <Heading>Как оживить фотографию?</Heading>
      <Grid>
        <Step>
          <Label>Загрузите фотографию</Label>
          Выберите изображение с одним или несколькими людьми. Выберите шаблон
          анимации. Определите, как фото оживет: движение, эмоция или сцена.
        </Step>
        <Step>
          <Label>Нажмите «Сгенерировать»</Label>
          Подождите несколько секунд — система создаст видео. Скачайте
          результат: готовое оживленное видео можно сохранить и поделиться.
        </Step>
      </Grid>
    </Wrapper>
  )
}
