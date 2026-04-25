import type { DragEvent } from 'react'
import styled from 'styled-components'
import { u } from '../design'

type UploadSectionProps = {
  previewSrc: string
  isDragOver: boolean
  onDragEnter: () => void
  onDragLeave: () => void
  onDragOver: (event: DragEvent<HTMLDivElement>) => void
  onDrop: (event: DragEvent<HTMLDivElement>) => void
}

const Area = styled.div<{ $isDragOver: boolean }>`
  position: absolute;
  left: ${u(77)};
  top: ${u(403)};
  width: ${u(613)};
  height: ${u(613)};
  border-radius: ${u(20)};
  overflow: hidden;
  background: #d9d9d9;
  outline: ${u(4)} solid
    ${({ $isDragOver }) => ($isDragOver ? 'rgba(14, 17, 22, 0.55)' : 'transparent')};
  outline-offset: ${u(-8)};
  transition: outline-color 0.15s ease;
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

export function UploadSection({
  previewSrc,
  isDragOver,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
}: UploadSectionProps) {
  return (
    <Area
      $isDragOver={isDragOver}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <PreviewImage src={previewSrc} alt="Загруженная фотография" />
    </Area>
  )
}
