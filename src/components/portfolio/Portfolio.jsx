import React, {useState} from 'react'
import "./portfolio.css";
import Menu from './Menu';

export default function Portfolio() {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updatedItems);
  }
  return (
<section className="work container section" id='work'>
  <h2 className="section__title"> My Recent Works</h2>

  <div className="work__filters">
  <span className="work__item" onClick={() => filterItem("blogs")} >Blogs</span>
  <span className="work__item" onClick={() => filterItem("projects")} >Projects</span>
  <span className="work__item" onClick={() => filterItem("design")} >Design</span>
  <span className="work__item" onClick={() => filterItem("branding")} >Branding</span>
 
  </div>
  <div className="work__container grid">
    {items.map((elem) => {
      const{id, category, title, image, desc, href} = elem;
      return (
        <div className="work__card" key={id}>
          <div className="work__thumbnail">
            <img src={image} alt="" className="work__img" />
            
            <h3 className='work__desc'>{desc}</h3>
            
          </div>
          <div className="work__mask"></div>
         
          <span className="work__category">{category}</span>
          <h3 className="work__title">{title}</h3>
          <a href={href} className="work__button">
            <i className='icon-link work__button-icon'></i>
          </a>
        </div>
      )
    })}
  </div>
</section>
  )
}
