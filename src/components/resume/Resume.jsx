import React from 'react'
import "./resume.css"
import Data from './Data'
import Card from './Card'
export default function Resume() {
  return (
<section className="resume container section" id='resume'>
  <h2 className="section__title">Where I’ve Worked</h2>
  
  <div className="resume__container grid">
    <div className="timeline grid">
      {Data.map((val, id) => {
        if (val.category === "education") {
          return (
          <Card key={id}
           icon= {val.icon}
            title= {val.title}
             year={val.year}
             company={val.company}
              desc={val.desc} />
              
          )
        }
      })}
    </div>
{/* 
    <div className="timeline grid">
      {Data.map((val, index) => {
        if (val.category === "experience") {
          return (
            <Card key={index}
             icon= {val.icon}
              title= {val.title}
              company={val.company}
               year={val.year}
                desc={val.desc} />
          )
        }
      })}
    </div> */}
  </div>
</section>
  )
}
