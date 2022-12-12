import { Route, Switch , NavLink} from 'react-router-dom';
import styled from "styled-components";
import imgFile from '../../assets/logo192.png';
import React,{useEffect,useState, useCallback,useRef } from 'react'; 
import {MENU_LIST,CONTSTURL} from "../../vo/menuVo";
//border-right: 1px solid #e0e0e0;
const Side = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 15%;
  height : 90%;
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
  useEffect(()=>{
    document.addEventListener('mouseup',mouseUp);
  });

  let moveCheck:string = "right";
  const transitionPoint = () : number =>{
    let strPx:string = ref2e.current.style.transform;
    let split : string[] = strPx.split("(");
    let numPx:number = Number(split[1].replace(/px\)/,""));
    if(numPx == -1400){
      moveCheck = "right";
    }else{
      moveCheck = "left";
    }
    return numPx;
  }

  const mouseUp = () :void =>{
    moveBoolean = false;
    console.log(ref2e.current);
    let numPx : number = transitionPoint();
    ref2e.current.style.transition = "transform 500ms";
    if(numPx > -800){
      ref2e.current.style.transform = "translateX(0px)";
    }else{
      ref2e.current.style.transform = "translateX(-1400px)";
    }
    
  }

  let screenx = 0;
  let defaultWidth:number = 0;
  const mouseDown = (e:any) :void =>{
    screenx = e.screenX;
    moveBoolean = true;
    ref2e.current.style.transition = "transform 0ms";
    defaultWidth = transitionPoint();

  }

  const moveListener = (e:any) :void =>{
    ref2e.current.style.transition = "transform 0ms";
    if(moveBoolean){
      if(moveCheck === "right"){
        defaultWidth = -1400;
      }else{
        defaultWidth = 0;
      }
      defaultWidth += e.screenX-screenx;

      if(defaultWidth >= -1) {
        return;
      }
      ref2e.current.style.transform = "translateX("+ defaultWidth+ "px)";
    }else{

    }

  }

  return (
  <div className='sidebar sideT' style={{transform:"translateX(-1400px)"}} onMouseMove={(e) => moveListener(e)} onMouseDown={(e)=> mouseDown(e)} ref={ref2e}>
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