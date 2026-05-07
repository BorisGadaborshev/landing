import styled from 'styled-components'
import { u } from '../design'

const Group = styled.section`
  position: absolute;
  left: ${u(55)};
  top: ${u(153)};
  width: ${u(1238)};
  height: ${u(224)};
  color: #0e1116;
`

const Heading = styled.h3`
  margin-bottom: ${u(20)};
  margin-top: 0;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: ${u(30)};
  line-height: 1.171875;
`

const Steps = styled.div`
  position: absolute;
  left: ${u(22)};
  top: ${u(44)};
  display: flex;
  align-items: flex-start;
  gap: ${u(35)};
`

const Step = styled.p<{ $width: number }>`
  margin: 0;
  width: ${({ $width }) => u($width)};
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: ${u(26)};
  line-height: 1.171875;
  white-space: pre-line;
`

const StepTitle = styled.strong`
  display: block;
  font-weight: 600;
  text-decoration: underline;
`

export function InstructionSection() {
  return (
    <Group>
      <Heading>Как оживить фотографию?</Heading>
      <Steps>
        <Step $width={613}>
          <StepTitle>1. Загрузите фотографию</StepTitle>
          {'Выберите изображение с одним или несколькими людьми.\n'}
          <StepTitle>2. Выберите шаблон анимации</StepTitle>
          {'Определите, как фото оживёт: движение, эмоция или сцена.'}
        </Step>
        <Step $width={537}>
          <StepTitle>3. Нажмите «Сгенерировать»</StepTitle>
          {'Подождите несколько секунд — система создаст видео.\n'}
          <StepTitle>4. Скачайте результат</StepTitle>
          {'Готовое оживлённое видео можно сохранить и поделиться.'}
        </Step>
      </Steps>
    </Group>
  )
}
