import React from 'react'

export default function Card(props) {
  return (
 <div className="timeline__item">
  <i className={props.icon}></i>
  <span className="timeline__date">{props.year}</span>
  <span className='company__name'>{props.company}</span>
  <h3 className="timeline__title">{props.title}</h3>
  <p className="timeline__text">{props.desc}</p>
 </div>
  )
}
