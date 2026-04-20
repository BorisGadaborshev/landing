import styled from 'styled-components'
import { u } from '../design'

const Group = styled.div`
  position: absolute;
  left: ${u(-38)};
  top: ${u(-20)};
  width: ${u(1516)};
  height: ${u(809)};
  filter: blur(${u(6)});
  pointer-events: none;
  z-index: 0;
`

const BaseLayer = styled.div`
  position: absolute;
  inset: 0;
  background: #d9d9d9;
  border-radius: ${u(20)};
`

const HeroImage = styled.img`
  position: absolute;
  left: ${u(-20)};
  top: ${u(-60)};
  width: ${u(1536)};
  height: ${u(1024)};
  object-fit: fill;
`

const Vignette = styled.div`
  position: absolute;
  left: ${u(-278)};
  top: ${u(-81)};
  width: ${u(1124.73)};
  height: ${u(1165)};
  background: #000;
  opacity: 0.62;
  filter: blur(${u(205.3)});
`

export function HeroBackdrop() {
  return (
    <Group aria-hidden="true">
      <BaseLayer />
      <HeroImage src="/images/hero-background-7eaeba.png" alt="" />
      <Vignette />
    </Group>
  )
}
