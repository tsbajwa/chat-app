import React from 'react';

export default function Tabs(props) {
  return (
    <div>
      {props.tab.map((t) => (
        <button key={t.id} onClick={() => props.onClick(t.id)}>{t.name}</button>
        ))
      }
    </div>
  )
}