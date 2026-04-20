import styled from 'styled-components'
import { u } from '../design'

const Area = styled.div`
  position: absolute;
  left: ${u(77)};
  top: ${u(403)};
  width: ${u(613)};
  height: ${u(613)};
  border-radius: ${u(20)};
  overflow: hidden;
  background: #d9d9d9;
`

const PreviewImage = styled.img`
  position: absolute;
  left: ${u(-5)};
  top: ${u(-5)};
  width: ${u(623)};
  height: ${u(623)};
  object-fit: cover;
  display: block;
`

export function UploadSection() {
  return (
    <Area>
      <PreviewImage src="/images/upload-preview.png" alt="Пример фотографии" />
    </Area>
  )
}
