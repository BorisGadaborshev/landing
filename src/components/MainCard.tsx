import styled from 'styled-components'
import { u } from '../design'
import { InstructionSection } from './InstructionSection'
import { TemplateList } from './TemplateList'
import { UploadSection } from './UploadSection'

const Card = styled.section`
  position: absolute;
  left: ${u(50)};
  top: ${u(665)};
  width: ${u(1340)};
  height: ${u(1551)};
  background: #ebe6df;
  border-radius: ${u(35)};
  box-shadow: ${u(4)} ${u(-6)} ${u(12)} rgba(0, 0, 0, 0.48);
  color: #0e1116;
  z-index: 2;
`

const Heading = styled.h2`
  position: absolute;
  margin: 0;
  left: ${u(266)};
  top: ${u(40)};
  width: ${u(808)};
  text-align: center;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: ${u(72)};
  line-height: 0.8056;
`

const Divider = styled.div`
  position: absolute;
  left: ${u(55)};
  top: ${u(133)};
  width: ${u(1230)};
  height: ${u(2.5)};
  background: #404040;
`

const PrimaryButton = styled.button<{ $left: number; $top: number }>`
  position: absolute;
  left: ${({ $left }) => u($left)};
  top: ${({ $top }) => u($top)};
  padding: ${u(22)} ${u(100)};
  border: 0;
  border-radius: ${u(100)};
  background: #0e1116;
  color: #ebe6df;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: ${u(36)};
  line-height: 1.171875;
  cursor: pointer;
`

const Hint = styled.p<{ $left: number; $top: number; $width?: number }>`
  position: absolute;
  margin: 0;
  left: ${({ $left }) => u($left)};
  top: ${({ $top }) => u($top)};
  width: ${({ $width }) => ($width !== undefined ? u($width) : 'auto')};
  padding: ${u(10)};
  font-family: Roboto, sans-serif;
  font-weight: 300;
  font-size: ${u(26)};
  line-height: 1.171875;
  text-align: center;
  color: #0e1116;
`

const ScrollIcon = styled.div`
  position: absolute;
  left: ${u(1227)};
  top: ${u(427)};
  width: ${u(8)};
  height: ${u(68)};
  border-radius: ${u(4)};
  background: linear-gradient(
    180deg,
    rgba(99, 99, 99, 0) 0%,
    rgba(99, 99, 99, 0.85) 20%,
    rgba(99, 99, 99, 0.85) 80%,
    rgba(99, 99, 99, 0) 100%
  );
`

export function MainCard() {
  return (
    <Card>
      <Heading>Оживите свою фотографию</Heading>
      <Divider />
      <InstructionSection />
      <UploadSection />
      <TemplateList />
      <ScrollIcon aria-hidden="true" />
      <PrimaryButton type="button" $left={108} $top={1041}>
        Загрузить своё фото
      </PrimaryButton>
      <Hint $left={138} $top={1127} $width={472}>
        (или просто перетащите сюда ваше изображение)
      </Hint>
      <PrimaryButton type="button" $left={756} $top={1041}>
        Сгенерировать
      </PrimaryButton>
      <Hint $left={812} $top={1127}>
        (оплата QR-кодом; 189 руб)
      </Hint>
    </Card>
  )
}
