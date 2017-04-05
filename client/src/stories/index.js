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
  .add('with text', () => (
    <RadioButton onChange={action('changed')} />
  ))
  .add('as buttons', () => (
    <RadioButton onChange={action('changed')} buttons />
  ))
