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
  position: absolute;
  margin: 0;
  left: 0;
  top: 0;
  height: ${u(35)};
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: ${u(30)};
  line-height: 1.171875;
`

const Steps = styled.div`
  position: absolute;
  left: ${u(38)};
  top: ${u(44)};
  display: flex;
  align-items: flex-start;
  margin-top: ${u(20)};
`

const Step = styled.p`
  margin: 0;
  width: ${u(600)};
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: ${u(26)};
  line-height: 1.171875;
  white-space: pre-line;
`

const StepTitle = styled.strong`
  display: block;
  font-weight: 500
  font-style: underline;
`

export function InstructionSection() {
  return (
    <Group>
      <Heading>Как оживить фотографию?</Heading>
      <Steps>
        <Step>
          <StepTitle>1. Загрузите фотографию</StepTitle>
          {'Выберите изображение с одним или несколькими людьми.\n'}
          <StepTitle>2. Выберите шаблон анимации</StepTitle>
          {'Определите, как фото оживёт: движение, эмоция или сцена.'}
        </Step>
        <Step>
          <StepTitle>3. Нажмите «Сгенерировать»</StepTitle>
          {'Подождите несколько секунд — система создаст видео.\n'}
          <StepTitle>4. Скачайте результат</StepTitle>
          {'Готовое оживлённое видео можно сохранить и поделиться.'}
        </Step>
      </Steps>
    </Group>
  )
}
