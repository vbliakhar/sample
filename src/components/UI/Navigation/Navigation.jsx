import React from 'react'
import { NavLink} from 'react-router-dom'
const links=[
  {to:'/', label: 'HomePage', exact:true},
  {to:'/page2', label: 'HomePage2', exact:true},
  {to:'/auth', label: 'HomePage3', exact:true},
]
class Navigation extends React.Component{
  render(){
  return(
    <div>
    <div>
       {links.map((link,index)=>{
         return(
           <p key={index}>
            <NavLink
              to={link.to}
              exact={link.exact}
            >
              {link.label}
             </NavLink>
           </p>
         )
       })}
    
    </div>
    {this.props.children}
    </div>
  ) }
}
export default Navigation