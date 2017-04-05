import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import Button from './Button'
import RadioButton from './RadioButton'
import Welcome from './Welcome'

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
  ))

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ))
  .add('with both', () => (
    <Button onClick={action('clicked')}>😀 😎cool story</Button>
  ))

storiesOf('RadioButton', module)
  .add('with default props', () => (
    <RadioButton onChange={action('changed')} />
  ))
  .add('with custom options', () => (
    <RadioButton onChange={action('changed')} options={[{label: 'a', value: 'a'}, {label: 'b', value: 'b'}]} />
  ))
  .add('with three options', () => (
    <RadioButton onChange={action('changed')} options={[{label: 'a', value: 'a'}, {label: 'b', value: 'b'}, {label: 'c', value: 'c'}]} />
  ))
