import styled from 'styled-components'
import { u } from '../design'

const Group = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  width: 100vw;
  height: ${u(809)};
  transform: translateX(-50%);
  filter: blur(${u(6)});
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`

const BaseLayer = styled.div`
  position: absolute;
  inset: 0;
  background: #d9d9d9;
`

const HeroImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
