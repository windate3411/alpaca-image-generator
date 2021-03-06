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
          <div className="options-wrapper">
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
          </div>
        </section>
        <section className="style-section">
          <h4 className="section-title">STYLE</h4>
          <div className="options-wrapper">
            {imageMapping[selectedPart].map((style: string) => {
              return selectedPart === 'backgrounds' ? (
                <img
                  className="background-image"
                  src={`/alpaca/${selectedPart}/${style}.png`}
                  alt="alpaca-background"
                  onClick={() => handleStyleButtonClick(style)}
                />
              ) : (
                <Button
                  isActive={currentStyle === style}
                  text={formatDisplayedText(style)}
                  onClick={() => handleStyleButtonClick(style)}
                  key={style}
                />
              )
            })}
          </div>
        </section>
      </div>
    </>
  )
}
