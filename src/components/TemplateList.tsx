import styled from 'styled-components'
import { u } from '../design'

type TemplateOption = {
  id: string
  top: number
  title: string
  titleTop: number
  titleWidth: number
  description: string
  descriptionTop: number
  descriptionWidth: number
  image: string
  imageLeft: number
  imageTop: number
  imageSize: number
}

const options: TemplateOption[] = [
  {
    id: 'wave',
    top: 0,
    title: 'Поднимет руку и машет',
    titleTop: 20,
    titleWidth: 250,
    description: 'Рука плавно поднимается, человек здоровается.',
    descriptionTop: 77,
    descriptionWidth: 233,
    image: '/images/template-1.png',
    imageLeft: -13.38,
    imageTop: 0,
    imageSize: 202.76,
  },
  {
    id: 'smile',
    top: 202,
    title: 'Наклонит голову и улыбнётся',
    titleTop: 21,
    titleWidth: 258,
    description: 'Голова слегка наклоняется, появляется улыбка.',
    descriptionTop: 78,
    descriptionWidth: 233,
    image: '/images/template-2.png',
    imageLeft: -13.38,
    imageTop: 0,
    imageSize: 202.76,
  },
  {
    id: 'hug',
    top: 405,
    title: 'Люди обнимутся',
    titleTop: 20,
    titleWidth: 178,
    description: 'Люди поворачиваются друг к другу, обнимаются, улыбаются.',
    descriptionTop: 56,
    descriptionWidth: 233,
    image: '/images/template-3.png',
    imageLeft: -9.26,
    imageTop: -4.12,
    imageSize: 185.26,
  },
]

const Card = styled.section`
  position: absolute;
  left: ${u(725)};
  top: ${u(403)};
  width: ${u(537)};
  height: ${u(613)};
  background: #ebe6df;
  border-radius: ${u(20)};
  box-shadow: ${u(3)} ${u(4)} ${u(4)} rgba(0, 0, 0, 0.47),
    inset 0 ${u(4)} ${u(4)} rgba(0, 0, 0, 0.36);
`

const Inner = styled.div`
  position: absolute;
  left: ${u(35)};
  top: ${u(16)};
  width: ${u(449)};
  height: ${u(581)};
`

const Option = styled.article<{ $top: number }>`
  position: absolute;
  left: 0;
  top: ${({ $top }) => u($top)};
  width: ${u(449)};
  height: ${u(176)};
  background: #0e1116;
  color: #ebe6df;
  border-radius: ${u(20)};
  overflow: hidden;
`

const ThumbMask = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: ${u(176)};
  height: ${u(176)};
  border-radius: ${u(20)};
  overflow: hidden;
  background: #d9d9d9;
`

const ThumbImage = styled.img<{ $left: number; $top: number; $size: number }>`
  position: absolute;
  left: ${({ $left }) => u($left)};
  top: ${({ $top }) => u($top)};
  width: ${({ $size }) => u($size)};
  height: ${({ $size }) => u($size)};
  object-fit: cover;
  display: block;
`

const OptionTitle = styled.h4<{ $top: number; $width: number }>`
  position: absolute;
  margin: 0;
  left: ${u(191)};
  top: ${({ $top }) => u($top)};
  width: ${({ $width }) => u($width)};
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: ${u(26)};
  line-height: 0.8077;
`

const OptionDescription = styled.p<{ $top: number; $width: number }>`
  position: absolute;
  margin: 0;
  left: ${u(191)};
  top: ${({ $top }) => u($top)};
  width: ${({ $width }) => u($width)};
  font-family: Roboto, sans-serif;
  font-weight: 300;
  font-size: ${u(20)};
  line-height: 1;
`

export function TemplateList() {
  return (
    <Card>
      <Inner>
        {options.map((option) => (
          <Option key={option.id} $top={option.top}>
            <ThumbMask>
              <ThumbImage
                src={option.image}
                alt=""
                $left={option.imageLeft}
                $top={option.imageTop}
                $size={option.imageSize}
              />
            </ThumbMask>
            <OptionTitle $top={option.titleTop} $width={option.titleWidth}>
              {option.title}
            </OptionTitle>
            <OptionDescription
              $top={option.descriptionTop}
              $width={option.descriptionWidth}
            >
              {option.description}
            </OptionDescription>
          </Option>
        ))}
      </Inner>
    </Card>
  )
}
