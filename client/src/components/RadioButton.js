import React from 'react'
import { ReactRadioButtonsGroup, ReactRadioButton } from 'react-radio-buttons-group'

const RadioButton = ({onChange, options}) => (
  <ReactRadioButtonsGroup group="sex" onChange={onChange}>
    {options.map(option => (<ReactRadioButton value={option.value} key={option.value}>{option.label}</ReactRadioButton>))}
  </ReactRadioButtonsGroup>
)
RadioButton.defaultProps = {
  onChange: value => console.log(value),
  options: [{label: 'Male 👨', value: 'male'}, {label: 'Female 👩', value: 'female'}]
}
RadioButton.propTypes = {
  onChange: React.PropTypes.func,
  options: React.PropTypes.array
}

export default RadioButton
