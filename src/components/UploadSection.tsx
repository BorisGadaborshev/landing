import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  gap: clamp(0.7rem, 1.2vw, 1rem);
`

const Preview = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 20px;
  overflow: hidden;
  background: #d9d9d9;
  border: 1px solid rgba(14, 17, 22, 0.14);
`

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

const Action = styled.button`
  border: none;
  border-radius: 999px;
  background: #0e1116;
  color: #ebe6df;
  font-size: clamp(1.1rem, 2.2vw, 2.25rem);
  font-weight: 500;
  line-height: 1.17;
  padding: clamp(0.85rem, 1.4vw, 1.375rem) clamp(1.6rem, 4vw, 6.25rem);
  cursor: pointer;
`

const Hint = styled.p`
  margin: 0;
  text-align: center;
  color: #0e1116;
  opacity: 0.75;
  font-size: clamp(0.95rem, 1.6vw, 1.625rem);
  line-height: 1.17;
  font-weight: 300;
`

export function UploadSection() {
  return (
    <Wrapper>
      <Preview>
        <PreviewImage src="/images/upload-preview.png" alt="Пример загруженной фотографии" />
      </Preview>
      <Action type="button">Загрузить свое фото</Action>
      <Hint>(или просто перетащите сюда ваше изображение)</Hint>
    </Wrapper>
  )
}
