import styled from 'styled-components'
import { u } from '../design'

const Title = styled.h1`
  position: absolute;
  margin: 0;
  left: ${u(70)};
  top: ${u(240)};
  width: ${u(650)};
  font-family: Roboto, sans-serif;
  font-weight: 800;
  font-size: ${u(72)};
  line-height: 0.8056;
  background: linear-gradient(
    182deg,
    rgba(255, 239, 216, 1) 30%,
    rgba(201, 135, 43, 1) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: drop-shadow(0 ${u(4)} ${u(4)} rgba(0, 0, 0, 0.25));
  z-index: 2;
`

const Subtitle = styled.p`
  position: absolute;
  margin: 0;
  left: ${u(70)};
  top: ${u(435)};
  width: ${u(600)};
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: ${u(30)};
  line-height: 1.171875;
  background: linear-gradient(
    205deg,
    rgba(241, 213, 197, 1) 19%,
    rgba(197, 162, 142, 1) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: drop-shadow(0 ${u(4)} ${u(4)} rgba(0, 0, 0, 0.25));
  z-index: 2;
`

export function HeaderSection() {
  return (
    <>
      <Title>Оживите фотографии ко Дню Победы</Title>
      <Subtitle>Подарите новую жизнь вашим дорогим воспоминаниям.</Subtitle>
    </>
  )
}
