import React from 'react'
import { ReactRadioButtonsGroup, ReactRadioButton } from 'react-radio-buttons-group'

const RadioButton = ({onChange}) => (
  <ReactRadioButtonsGroup group="sex" onChange={onChange}>
    <ReactRadioButton value="male">Male 👨</ReactRadioButton>
    <ReactRadioButton value="female">Female 👩</ReactRadioButton>
  </ReactRadioButtonsGroup>
)
RadioButton.propTypes = {
  children: React.PropTypes.string.isNotRequired,
  onChange: React.PropTypes.func
}

export default RadioButton
