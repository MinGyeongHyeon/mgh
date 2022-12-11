import { Route, Switch , NavLink} from 'react-router-dom';
import styled from "styled-components";
import imgFile from '../../assets/logo192.png';
import React,{useState, useCallback,useRef } from 'react'; 
import {MENU_LIST,CONTSTURL} from "../../vo/menuVo";
//border-right: 1px solid #e0e0e0;
const Side = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200%;
  height : 100%;
`;
const Profile = styled.img.attrs({
  src : `${imgFile}`
})`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  margin-bottom : 10%;
  margin-left: -9%;
`;

const Menu = styled.div`
  margin-top: 30px;
  width: 30%;
  height : 50%;
  display: flex;
  flex-direction: column;
`;

const Sidebar = (props:MENU_LIST) =>{

  //const [moved , setMoved] = useState(false);
  //const [screenx , setScreenx] = useState(0);

  const menus : CONTSTURL[] = props.menulist;
  
  let ref2e = useRef<any>(null);
  let moveBoolean : Boolean = false;
  const mouseUp = () :void =>{
    moveBoolean = false;
  }

  const mouseDown = (e:any) :void =>{
    moveBoolean = true;
  }

  let defaultWidth:number = 20;
  const moveListener = (e:any) :void =>{
    if(moveBoolean){
      defaultWidth += 0.4;
    //  ref2e.current.style.width = defaultWidth +"vw";
    }else{

    }

  }

  return (
  <div className='sidebar sideT' onMouseMove={(e) => moveListener(e)} onMouseDown={(e)=> mouseDown(e)} onMouseUp={() => mouseUp() } ref={ref2e}>
  <Side className='SideSlide'>
    <Menu>
    <Profile/>
      {
        menus.map((menu,index)=>{
          return(
            <NavLink exact style={{color:"white",textDecoration:"none" , marginBottom:"15px"}} to={menu.path} key={index} activeStyle={{color:"red"}}>
              {menu.name}
            </NavLink>
          );
        })
      }
    </Menu>
  </Side>
  </div>

  )
  
}

export default React.memo(Sidebar);