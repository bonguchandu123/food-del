import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

function ExploreMenu (props)  {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">choose from divers menu featuring a divertable array</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div  onClick ={() => props.setCategory(prev => prev===item.menu_name? "All":"item.menu_name")} key = {index} className="explore-menu-list-item">
              <img  className = { props.category ===item.menu_name?"active":''} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
