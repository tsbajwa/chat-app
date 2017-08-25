import React from 'react';

export default function Tabs(props) {
  return (
    <div>
      {props.tabs.map((t) => (
        <button key={t.id} onClick={() => props.onClick(t.id)}>{t.title}</button>
        ))
      }
    </div>
  )
}
//props.active when selected use for css styling