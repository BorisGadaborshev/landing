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

type TemplateListProps = {
  selectedOptionId: string
  onSelectOption: (id: string) => void
}

const options: TemplateOption[] = [
  {
    id: 'wave',
    top: 0,
    title: 'Наклонит голову и улыбнётся',
    titleTop: 20,
    titleWidth: 250,
    description: 'Голова слегка наклоняется, появляется улыбка.',
    descriptionTop: 77,
    descriptionWidth: 233,
    image: '/images/output_1.gif',
    imageLeft: -13.38,
    imageTop: 0,
    imageSize: 202.76,
  },
  {
    id: 'smile',
    top: 202,
    title: 'Поднимет руку и машет',
    titleTop: 21,
    titleWidth: 258,
    description: 'Рука плавно поднимается, человек здоровается.',
    descriptionTop: 78,
    descriptionWidth: 233,
    image: '/images/output_2.gif',
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
    descriptionTop: 68,
    descriptionWidth: 233,
    image: '/images/output_3.gif',
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
  box-shadow: ${u(2)} ${u(3)} ${u(4)} rgba(0, 0, 0, 0.33),
    inset 0 ${u(2)} ${u(3)} rgba(0, 0, 0, 0.2);
`

const Inner = styled.div`
  position: absolute;
  left: ${u(35)};
  top: ${u(16)};
  width: ${u(449)};
  height: ${u(581)};
`

const Option = styled.button<{ $top: number; $isSelected: boolean }>`
  position: absolute;
  left: 0;
  top: ${({ $top }) => u($top)};
  width: ${u(449)};
  height: ${u(176)};
  background: ${({ $isSelected }) =>
    $isSelected ? '#0e1116' : 'rgba(98, 98, 98, 0.62)'};
  color: #ebe6df;
  border-radius: ${u(22)};
  overflow: hidden;
  border: ${u(3)} solid transparent;
  cursor: pointer;
  text-align: left;
  padding: 0;
  box-shadow: none;
  transition: border-color 0.15s ease, transform 0.15s ease, background 0.15s ease;

  &:hover {
    border-color: rgba(235, 230, 223, 0.75);
  }

  &:focus-visible {
    border-color: rgba(235, 230, 223, 0.95);
    outline: none;
  }
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

const ThumbImage = styled.img<{
  $left: number
  $top: number
  $size: number
  $fillMask?: boolean
}>`
  position: absolute;
  left: ${({ $left, $fillMask }) => ($fillMask ? 0 : u($left))};
  top: ${({ $top, $fillMask }) => ($fillMask ? 0 : u($top))};
  width: ${({ $size, $fillMask }) => ($fillMask ? '100%' : u($size))};
  height: ${({ $size, $fillMask }) => ($fillMask ? '100%' : u($size))};
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

export function TemplateList({
  selectedOptionId,
  onSelectOption,
}: TemplateListProps) {
  return (
    <Card>
      <Inner>
        {options.map((option) => (
          <Option
            key={option.id}
            type="button"
            $top={option.top}
            $isSelected={selectedOptionId === option.id}
            onClick={() => onSelectOption(option.id)}
            aria-pressed={selectedOptionId === option.id}
          >
            <ThumbMask>
              <ThumbImage
                src={option.image}
                alt={option.title}
                $left={option.imageLeft}
                $top={option.imageTop}
                $size={option.imageSize}
                $fillMask={false}
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
