import React from 'react';
import TextFieldSubmit from './TextFieldSubmit';

export default function UpdateSubmit(props) {
  return (
    <TextFieldSubmit
    onSubmit={props.onSubmit}
    >
      <p>Name of person you are chatting to</p>
    </TextFieldSubmit>
  )
}