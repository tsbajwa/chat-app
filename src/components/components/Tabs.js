import React from 'react';

export default function Tabs(props) {
  return (
    <div className='tabContainer'>
        {props.tabs.map((t) => (
          <div>
          <button
            key={t.id} 
            onClick={() => props.onClick(t.id)}
            className={t.active ? 'tabContainer__tab--active': 'tabContainer__tab' }
            >{t.title}</button>
            </div>
          ))
        }
    </div>
  )
}
