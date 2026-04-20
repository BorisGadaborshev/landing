import styled from 'styled-components'

type TemplateItem = {
  id: string
  title: string
  description: string
  image: string
}

const templates: TemplateItem[] = [
  {
    id: 'wave',
    title: 'Поднимет руку и машет',
    description: 'Рука плавно поднимается, человек здоровается.',
    image: '/images/template-1.png',
  },
  {
    id: 'smile',
    title: 'Наклонит голову и улыбнется',
    description: 'Голова слегка наклоняется, появляется улыбка.',
    image: '/images/template-2.png',
  },
  {
    id: 'hug',
    title: 'Люди обнимутся',
    description: 'Люди поворачиваются друг к другу, обнимаются, улыбаются.',
    image: '/images/template-3.png',
  },
]

const Wrapper = styled.section`
  background: #ebe6df;
  border-radius: 20px;
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.47), inset 0 4px 4px rgba(0, 0, 0, 0.36);
  padding: clamp(0.75rem, 1.2vw, 1rem);
`

const List = styled.div`
  display: grid;
  gap: clamp(0.65rem, 1.2vw, 0.85rem);
`

const Item = styled.article`
  display: grid;
  grid-template-columns: 176px 1fr;
  align-items: center;
  background: #0e1116;
  color: #ebe6df;
  border-radius: 20px;
  overflow: hidden;
  min-height: 176px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    min-height: unset;
  }
`

const Thumb = styled.img`
  width: 100%;
  height: 100%;
  min-height: 176px;
  max-height: 176px;
  object-fit: cover;

  @media (max-width: 720px) {
    min-height: 210px;
    max-height: 260px;
  }
`

const Content = styled.div`
  padding: 1rem 1rem 1rem 1.15rem;
`

const Title = styled.h3`
  margin: 0 0 0.45rem;
  font-size: clamp(1.02rem, 1.6vw, 1.625rem);
  line-height: 0.81;
  font-weight: 500;
`

const Description = styled.p`
  margin: 0;
  font-size: clamp(0.88rem, 1.2vw, 1.25rem);
  line-height: 1;
  font-weight: 300;
`

export function TemplateList() {
  return (
    <Wrapper>
      <List>
        {templates.map((template) => (
          <Item key={template.id}>
            <Thumb src={template.image} alt={template.title} />
            <Content>
              <Title>{template.title}</Title>
              <Description>{template.description}</Description>
            </Content>
          </Item>
        ))}
      </List>
    </Wrapper>
  )
}
