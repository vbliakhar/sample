import React from 'react'
import LinksItem from './LinksItem/LinksItem.jsx'
import './Layout.scss'
import Blackdrop from '../../components/UI/Blackdrop/Blackdrop'
import {NavLink} from 'react-router-dom'




const menuLinks = [
  {link:"1 Menu", id:'1'},
  {link:"2 Menu", id:'2'},
  {link:"3 Menu", id:'3'},
  {link:"4 Menu", id:'4'},
  {link:"5 Menu", id:'5'},
]
const items =[
  {
    id:1,
    menu:[
      {to:'/', text:"Pagehome", exact:true},
      {to:'/auth', text:" Authentication", exact:false},
      {to:'/second', text: "Second", exact:false},

    ]
  },
  {
    id:2,
    menu:[
      {text:"2oneBlock"},
      {text:"2oneBlock"},
      {text:"2oneBlock"},
      {text:"2oneBlock"},
      {text:"2oneBlock"},
    ]
  },
  {
    id:3,
    menu:[
      {text:"3oneBlock"},
      {text:"3oneBlock"},
      {text:"3oneBlock"},
      {text:"3oneBlock"},
      {text:"3oneBlock"},
    ]
  },
  {
    id:4,
    menu:[
    {text:"under development"}
  ]},
  {
    id:5,
    menu:[
      {text:"5 Under development"}
    ]
  },
]


class HomePage extends React.Component{
  state={
      menuPage:false,
      idLink:0
  }

  onAnswerClickHandler=(event)=>{
    this.setState({
      idLink:event-1,
      menuPage:true
    })
  }
  beginPage=()=>{
    this.setState({
      menuPage:!true
    })
  }
  render(){
    return(
      <React.Fragment>

     
      <div className='HomePage_Layout'>
        <div className='HomePage'>
         <ul>
           
            {menuLinks.map((link,index)=>{
              return(
                <li
                  key={index}
                  onClick={()=>this.onAnswerClickHandler(link.id)}
                >
                  {link.link}
                </li>
              )
            })}
         </ul>
        </div>
        {this.state.menuPage
        ?
        <LinksItem
          menuLinks={items[0]}
          onClose={this.beginPage}
        />
        // this.state.idLink
        :null}
      </div>
      
      {this.state.menuPage
          ?
          <Blackdrop
            onClick={this.beginPage}
          />
      :null}
          <hr/>
            {items[0].menu.map((item, index)=>{
              return(
                <div
                  key={index}
                >
                  <NavLink
                    to={item.to}
                    exact={item.exact}
                  >
                   {item.text}
                  </NavLink>
                </div>
              )
            })}
          <hr/>
         <main>  
          {this.props.children}
        </main>
      </React.Fragment>
    )
  }
}


export default HomePage;