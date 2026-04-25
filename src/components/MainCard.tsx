import { useEffect, useRef, useState, type ChangeEvent, type DragEvent } from 'react'
import styled from 'styled-components'
import { u } from '../design'
import { InstructionSection } from './InstructionSection'
import { TemplateList } from './TemplateList'
import { UploadSection } from './UploadSection'

const Card = styled.section`
  position: absolute;
  left: ${u(50)};
  top: ${u(665)};
  width: ${u(1340)};
  height: ${u(1551)};
  background: #ebe6df;
  border-radius: ${u(35)};
  box-shadow: ${u(4)} ${u(-6)} ${u(12)} rgba(0, 0, 0, 0.48);
  color: #0e1116;
  z-index: 2;
`

const Heading = styled.h2`
  position: absolute;
  margin: 0;
  left: ${u(55)};
  top: ${u(30)};
  width: ${u(1230)};
  text-align: center;
  white-space: nowrap;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: ${u(72)};
  line-height: 0.8056;
`

const Divider = styled.div`
  position: absolute;
  left: ${u(55)};
  top: ${u(133)};
  width: ${u(1230)};
  height: ${u(2.5)};
  background: #404040;
`

const PrimaryButton = styled.button<{ $left: number; $top: number }>`
  position: absolute;
  left: ${({ $left }) => u($left)};
  top: ${({ $top }) => u($top)};
  padding: ${u(22)} ${u(100)};
  border: 0;
  border-radius: ${u(100)};
  background: #0e1116;
  color: #ebe6df;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: ${u(36)};
  line-height: 1.171875;
  cursor: pointer;
`

const Hint = styled.p<{ $left: number; $top: number; $width?: number }>`
  position: absolute;
  margin: 0;
  left: ${({ $left }) => u($left)};
  top: ${({ $top }) => u($top)};
  width: ${({ $width }) => ($width !== undefined ? u($width) : 'auto')};
  padding: ${u(10)};
  font-family: Roboto, sans-serif;
  font-weight: 300;
  font-size: ${u(26)};
  line-height: 1.171875;
  text-align: center;
  color: #0e1116;
`

const HiddenInput = styled.input`
  display: none;
`

const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(14, 17, 22, 0.58);
  display: grid;
  place-items: center;
  z-index: 1000;
`

const ModalCard = styled.div`
  width: min(${u(520)}, 92vw);
  border-radius: ${u(20)};
  background: #ebe6df;
  color: #0e1116;
  box-shadow: ${u(12)} ${u(18)} ${u(45)} rgba(0, 0, 0, 0.35);
  padding: ${u(28)} ${u(28)} ${u(22)};
`

const ModalTitle = styled.h3`
  margin: 0 0 ${u(10)};
  font-family: Roboto, sans-serif;
  font-weight: 600;
  font-size: ${u(34)};
  line-height: 1.15;
`

const ModalText = styled.p`
  margin: 0 0 ${u(22)};
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: ${u(22)};
  line-height: 1.25;
`

const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${u(12)};
`

const ModalButton = styled.button<{ $kind: 'cancel' | 'pay' }>`
  border: 0;
  border-radius: ${u(100)};
  padding: ${u(12)} ${u(26)};
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: ${u(22)};
  cursor: pointer;
  background: ${({ $kind }) => ($kind === 'pay' ? '#0e1116' : 'rgba(14, 17, 22, 0.12)')};
  color: ${({ $kind }) => ($kind === 'pay' ? '#ebe6df' : '#0e1116')};
`

const DEFAULT_PREVIEW_SRC = '/images/upload-preview.png'

export function MainCard() {
  const [previewSrc, setPreviewSrc] = useState(DEFAULT_PREVIEW_SRC)
  const [isDragOver, setIsDragOver] = useState(false)
  const [selectedOptionId, setSelectedOptionId] = useState('wave')
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const objectUrlRef = useRef<string | null>(null)

  useEffect(() => {
    return () => {
      if (objectUrlRef.current) {
        URL.revokeObjectURL(objectUrlRef.current)
      }
    }
  }, [])

  const applyFile = (file: File | undefined) => {
    if (!file || !file.type.startsWith('image/')) {
      return
    }

    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current)
    }

    const objectUrl = URL.createObjectURL(file)
    objectUrlRef.current = objectUrl
    setPreviewSrc(objectUrl)
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    applyFile(event.target.files?.[0])
    event.target.value = ''
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragOver(true)
  }

  const handleDragEnter = () => {
    setIsDragOver(true)
  }

  const handleDragLeave = () => {
    setIsDragOver(false)
  }

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragOver(false)
    applyFile(event.dataTransfer.files?.[0])
  }

  const handleGenerateClick = () => {
    setIsPaymentModalOpen(true)
  }

  const handleCancelPayment = () => {
    setIsPaymentModalOpen(false)
  }

  const handleConfirmPayment = () => {
    setIsPaymentModalOpen(false)
  }

  return (
    <>
      <Card>
        <HiddenInput
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleInputChange}
        />
        <Heading>Оживите свою фотографию</Heading>
        <Divider />
        <InstructionSection />
        <UploadSection
          previewSrc={previewSrc}
          isDragOver={isDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        />
        <TemplateList
          selectedOptionId={selectedOptionId}
          onSelectOption={setSelectedOptionId}
        />
        <PrimaryButton type="button" $left={108} $top={1041} onClick={handleUploadClick}>
          Загрузить своё фото
        </PrimaryButton>
        <Hint $left={138} $top={1127} $width={472}>
          (или просто перетащите сюда ваше изображение)
        </Hint>
        <PrimaryButton type="button" $left={756} $top={1041} onClick={handleGenerateClick}>
          Сгенерировать
        </PrimaryButton>
        <Hint $left={812} $top={1127}>
          (оплата QR-кодом; 189 руб)
        </Hint>
      </Card>
      {isPaymentModalOpen && (
        <ModalBackdrop>
          <ModalCard role="dialog" aria-modal="true" aria-label="Подтверждение оплаты">
            <ModalTitle>Подтвердите оплату</ModalTitle>
            <ModalText>Стоимость генерации: 189 руб.</ModalText>
            <ModalActions>
              <ModalButton type="button" $kind="cancel" onClick={handleCancelPayment}>
                Отменить
              </ModalButton>
              <ModalButton type="button" $kind="pay" onClick={handleConfirmPayment}>
                Оплатить
              </ModalButton>
            </ModalActions>
          </ModalCard>
        </ModalBackdrop>
      )}
    </>
  )
}
