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
    document.addEventListener('mousemove',moveListener);
  });

  let moveCheck:string = "right"; // 사이드바 오른쪽 왼쪽 움직일 기준 변수
  const transitionPoint = () : number =>{ //현재 사이드바 위치 추적 하는 함수
    let strPx:string = ref2e.current.style.transform;
    let split : string[] = strPx.split("(");
    let numPx:number = Number(split[1].replace(/px\)/,""));
    if(numPx == -1735){
      // 왼쪽으로 접혀 있으면 오른쪽 기준
      moveCheck = "right";
    }else{
      // 전부다 펼쳐 있으면 왼쪽 기준
      moveCheck = "left";
    }
    return numPx;
  }
  
  // 사이드바 마우스 드래그 후 현재 위치에 맞게 사이드바 조절
  const mouseUp = () :void =>{
    moveBoolean = false;
    let numPx : number = transitionPoint();
    ref2e.current.style.transition = "transform 500ms";
    if(numPx > -800){
      // 반 이상 넘어 오면 전부 펼치기
      ref2e.current.style.transform = "translateX(0px)";
    }else{
      // 반 미만 으로 오면 원래 상태로 복귀
      ref2e.current.style.transform = "translateX(-1735px)";
    }

  }

  let screenx : number = 0; // 사이드바 클릭 시점 의 마우스 위치 변수
  let defaultWidth : number = 0; // 사이드바 펼칠시 기준이 되는 변수
  const mouseDown = (e:any) :void =>{
    screenx = e.screenX;
    moveBoolean = true;
    ref2e.current.style.transition = "transform 0ms";
    defaultWidth = transitionPoint();

  }

  const moveListener = (e:any) :void =>{ // 사이드바 움직일 시 함수
    if(moveBoolean){
      if(moveCheck === "right"){
        defaultWidth = -1735;
      }else{
        defaultWidth = 0;
      }
      defaultWidth += e.screenX-screenx; // 오른쪽 기준일시 -1735 += (현재 마우스 위치 - 클릭 했을때 시점의 마우스 위치);

      if(defaultWidth >= -1) {
        return;
      }
      ref2e.current.style.transform = "translateX("+ defaultWidth+ "px)";
    }else{

    }

  }

  return (
  <div className='sidebar sideT' style={{transform:"translateX(-1735px)"}} onMouseMove={(e) => moveListener(e)} onMouseDown={(e)=> mouseDown(e)} ref={ref2e}>
  <Side className='SideSlide notdrag'>
    <Menu>
    <Profile/>
      {
        menus.map((menu,index)=>{
          return(
            <NavLink exact className='notdrag' style={{color:"white",textDecoration:"none" , marginBottom:"15px"}} to={menu.path} key={index} activeStyle={{color:"red"}}>
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