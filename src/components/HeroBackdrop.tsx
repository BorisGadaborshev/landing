import styled from 'styled-components'
import { u } from '../design'

const Group = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: ${u(809)};
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`

const Scene = styled.div`
  position: absolute;
  left: 50%;
  top: ${u(-20)};
  width: ${u(1516)};
  height: ${u(809)};
  transform: translateX(-50%);
  filter: blur(${u(6)});
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
  top: ${u(-20)};
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

const BottomFade = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${u(240)};
  background: linear-gradient(
    180deg,
    rgba(14, 17, 22, 0) 0%,
    rgba(14, 17, 22, 0.58) 58%,
    rgba(14, 17, 22, 0.9) 82%,
    #0e1116 100%
  );
`

export function HeroBackdrop() {
  return (
    <Group aria-hidden="true">
      <Scene>
        <BaseLayer />
        <HeroImage src="/images/hero-background-7eaeba.png" alt="" />
        <Vignette />
      </Scene>
      <BottomFade />
    </Group>
  )
}
