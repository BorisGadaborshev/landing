import { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: radial-gradient(circle at top, #1f2937 0%, #0f172a 60%, #020617 100%);
  color: #e2e8f0;
  padding: 2rem;
`

const Card = styled.section`
  width: min(560px, 100%);
  border-radius: 20px;
  background: rgba(15, 23, 42, 0.75);
  border: 1px solid rgba(148, 163, 184, 0.2);
  backdrop-filter: blur(8px);
  box-shadow: 0 20px 50px rgba(2, 6, 23, 0.5);
  padding: 2rem;
  text-align: center;
`

const Title = styled.h1`
  margin: 0 0 0.75rem;
  font-size: clamp(1.8rem, 3vw, 2.4rem);
`

const Description = styled.p`
  margin: 0;
  color: #94a3b8;
`

const CounterButton = styled.button`
  margin-top: 1.5rem;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #f8fafc;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 24px rgba(99, 102, 241, 0.35);
  }
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <Wrapper>
      <Card>
        <Title>React + TypeScript + Vite</Title>
        <Description>
          Проект готов. Стили оформлены через styled-components.
        </Description>
        <CounterButton onClick={() => setCount((value) => value + 1)}>
          Нажато: {count}
        </CounterButton>
      </Card>
    </Wrapper>
  )
}

export default App
