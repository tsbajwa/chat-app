import React from 'react';

export default function Tabs(props) {
  return (
    <div className='tabContainer'>
        {props.tabs.map((t) => (
          <button
            key={t.id} 
            onClick={() => props.onClick(t.id)}
            className={t.active ? 'tabContainer__tab': 'tabContainer__tab' }
            >{t.title}</button>
          ))
        }
    </div>
  )
}
