import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

import { getImage, downloadImage } from '../utils'
import { BodyPartType } from '../state/reducers/bodyPart'
import { State } from '../state'

import './Preview.scss'

interface PreviewProps {}

export const Preview: React.FC<PreviewProps> = () => {
  const state = useSelector((state: State) => state)
  const imgRef = useRef<null | HTMLImageElement>(null)
  const renderPreview = async (bodyPart: BodyPartType) => {
    const imageSrc = await getImage(Object.values(bodyPart))
    const img = imgRef.current
    if (img) {
      img.src = imageSrc
    }
  }
  useEffect(() => {
    renderPreview(state.bodyPart)
  }, [state])

  return (
    <div className="component-preview">
      <img
        src="/alpaca/default-image"
        ref={imgRef}
        alt="alpaca-preview"
        className="alpaca-preview"
      />
    </div>
  )
}
