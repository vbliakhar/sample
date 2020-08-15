import React from 'react'
import './LinksItem.scss'
import {NavLink} from 'react-router-dom'
function LinksItem (props){
  return(
    <div className='LinksItem'>
      <ul>
       
          {props.menuLinks.menu.map((link,index)=>{
            return(
            <li
              key={index}
              onClick={props.onClose}
            >
              <NavLink
                to={link.to}npm
                exact={link.exact}
              >
                {link.text}
              </NavLink>
            
            </li>
            )
          })}
        
        
      </ul>
    </div>
  )
}
export default LinksItem