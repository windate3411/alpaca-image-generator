import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getImage, downloadImage, getRandomItem } from '../utils'
import { imageMapping } from '../types'
import { BodyPartType } from '../state/reducers/bodyPart'
import { ActionCreators, State } from '../state'

import './Preview.scss'

interface PreviewProps {}

export const Preview: React.FC<PreviewProps> = () => {
  const [imgSrc, setImgSrc] = useState('')
  const state = useSelector((state: State) => state)
  const imgRef = useRef<null | HTMLImageElement>(null)
  const dispatch = useDispatch()
  const { setBodyPart } = bindActionCreators(ActionCreators, dispatch)

  const renderPreview = async (bodyPart: BodyPartType) => {
    const imageSrc = await getImage(Object.values(bodyPart))
    const img = imgRef.current
    if (img) {
      img.src = imageSrc
      setImgSrc(imageSrc)
    }
  }

  const handleRandomBtnClick = async () => {
    for (let [k, v] of Object.entries(imageMapping)) {
      setBodyPart({
        part: `${k}Path`,
        path: `/alpaca/${k}/${getRandomItem(v)}.png`,
      })
    }
  }
  useEffect(() => {
    renderPreview(state.bodyPart)
  }, [state])

  return (
    <div className="component-preview">
      <img
        src="/alpaca/default-image.png"
        ref={imgRef}
        alt="alpaca-preview"
        className="alpaca-preview"
      />
      <div className="footer-actions">
        <button onClick={handleRandomBtnClick}>Random</button>
        <button onClick={() => downloadImage(imgSrc)}>Download</button>
      </div>
    </div>
  )
}
