import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ActionCreators, State } from '../state'
import { imageMapping } from '../types'
import { Button } from './Button'
import './ControlPanel.scss'

interface ControlPanelProps {}

export const ControlPanel: React.FC<ControlPanelProps> = () => {
  const dispatch = useDispatch()
  const bodyPart = useSelector((state: State) => state.bodyPart)
  const { setBodyPart } = bindActionCreators(ActionCreators, dispatch)

  const [selectedPart, setSelectedPart] = useState('neck')
  const [selectedStyle, setSelectedStyle] = useState('default')
  const currentStyle = bodyPart[`${selectedPart}Path`]
    .split('/')
    .pop()
    ?.slice(0, -4)

  const formatDisplayedText = (text: string) => {
    return text.replace('-', ' ')
  }

  const handleStyleButtonClick = (style: string) => {
    setSelectedStyle(style)
  }

  useEffect(() => {
    setBodyPart({
      part: `${selectedPart}Path`,
      path: `/alpaca/${selectedPart}/${selectedStyle}.png`,
    })
    // eslint-disable-next-line
  }, [selectedStyle])

  return (
    <>
      <div className="component-control-panel">
        <section className="accessory-section">
          <h4 className="section-title">ACCESSORIZE THE ALPACA'S</h4>
          {Object.keys(imageMapping).map((part: string) => {
            return (
              <Button
                isActive={selectedPart === part}
                text={formatDisplayedText(part)}
                onClick={() => setSelectedPart(part)}
                key={part}
              />
            )
          })}
        </section>
        <section className="style-section">
          <h4 className="section-title">Style</h4>
          {imageMapping[selectedPart].map((style: string) => {
            return (
              <Button
                isActive={currentStyle === style}
                text={formatDisplayedText(style)}
                onClick={() => handleStyleButtonClick(style)}
                key={style}
              />
            )
          })}
        </section>
      </div>
    </>
  )
}
