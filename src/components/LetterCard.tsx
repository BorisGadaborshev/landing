import styled from 'styled-components'
import { u } from '../design'

const Group = styled.div`
  position: absolute;
  left: ${u(604)};
  top: ${u(-10.51)};
  width: ${u(910.38)};
  height: ${u(897.27)};
  opacity: 0.91;
  filter: blur(${u(1)})
    drop-shadow(${u(8)} ${u(41)} ${u(4)} rgba(0, 0, 0, 0.25));
  pointer-events: none;
  z-index: 1;
`

const LetterImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

export function LetterCard() {
  return (
    <Group aria-hidden="true">
      <LetterImage src="/images/letter-corner-from-figma.png" alt="" />
    </Group>
  )
}
