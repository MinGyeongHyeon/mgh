import {NavLink} from 'react-router-dom';
import styled from "styled-components";
import imgFile from '../../assets/logo192.png';
import React,{useEffect,useRef,useState } from 'react'; 
import {MENU_LIST,CONTSTURL} from "../../vo/menuVo";
import {AiOutlineMail,AiFillGithub,AiOutlineMenu , AiOutlinePushpin,AiFillPushpin,AiOutlineDrag} from "react-icons/ai";

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
  margin-bottom : 20px;
  margin-left: -40px;
  background-color: #282c34;
`;

const Menu = styled.div`
  margin-top: 30px; 
  width: 30%;
  height : 50%;
  display: flex;
  flex-direction: column;
  -ms-user-select: none; 
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

const TopMenu = styled.div`
  left : 917px;
  top  : 17px;
  cursor      : pointer;
  height      : 6%;
  width       : 28%;
  z-index     : 10;
  display: flex;
  background-color: rgb(255,255,255);
  box-shadow: rgba(0, 0, 0, 0.10) 0px 20px 20px -10px;
  :hover{
    cursor : grab;
  }
  :active{
    cursor: grabbing;
  }
`
const Comment = styled.div`
  margin-bottom : 20%;
  width: 305px;
  margin-left: -120%;
`

const SideBottom = styled.div`
  margin-left: -68%;
  margin-top: 60%;
  width     : 30vw
`

const Sidebar = (props:MENU_LIST) : JSX.Element =>{

  const [pin , setPin] = useState(true);
  //const [screenx , setScreenx] = useState(0);

  const menus : Array<CONTSTURL>  = props.menulist;

  let childRef : React.MutableRefObject<any> = useRef<any>(null);
  let parentRef : React.MutableRefObject<any> = useRef<any>(null);
  let menuRef : React.MutableRefObject<any> = useRef<any>(null);
  let TopMenuRef : React.MutableRefObject<any> = useRef<any>(null);

  let moveBoolean : Boolean = false;
  useEffect(()=>{
    document.addEventListener('mouseup',SideMouseUp);
    window.addEventListener('resize',ResizeEnvet);
  });

/**
 * 사이드바 와 menu 위치 조정 함수
 * @param sidePx (사이드바 위치)
 * @param menuPx (menu위치)
 */
  const SidePxMenuPxSet = (sidePx : number , menuPx:number = 83.5) : void =>{
    childRef.current.style.transform = "translateX("+sidePx+"px)";
    menuRef.current.style.left = menuPx+'%';
    if(menuPx === 45){ // top 메뉴 아이콘 클릭시 left 설정
      moveCheck = "left";
    }
  }
 

  let defaulSize : number = (2133 - window.innerWidth)+ -1770;
  /**  
  * 브라우져 사이즈 변경시 사이드바 크기 조절 (전체화면 시 크기- 사이즈변경 시 크기 + 전체화면 기준 사이드바 위치)
  */
  const ResizeEnvet = () =>{
    let numPx : number = SidebarLocation();
    defaulSize = (2133 - window.innerWidth)+ -1770;
    if(numPx !== 0){
      SidePxMenuPxSet(defaulSize);
    }
  }

  let moveCheck : string = "right"; // 사이드바 오른쪽 왼쪽 움직일 기준 변수
  /**  
  * 현재 사이드바 위치 추적 하는 함수
  */
  const SidebarLocation = () : number =>{
    let strPx : string = childRef.current.style.transform;
    let split : string[] = strPx.split("(");
    let numPx : number = Number(split[1].replace(/px\)/,""));

    return numPx;
  }
  
  /**  
  * 사이드바 마우스 드래그 후 현재 위치에 맞게 사이드바 조절
  */
  const SideMouseUp = () : void =>{
    moveBoolean = false;
    let numPx : number = SidebarLocation();
    childRef.current.style.transition = "transform 500ms";
    menuRef.current.style.transition = "left 500ms";
    parentRef.current.style.backgroundColor = "rgb(255,255,255)"; // 뒷배경 원상복귀
    
    if(moveCheck === "right"){ // 접혀있을때의 기준
      if(numPx > defaulSize/1.2){
        // 반 이상 넘어 오면 전부 펼치기
        SidePxMenuPxSet(0,45);
        moveCheck = "left";
      }else{
        // 반 미만 으로 오면 원래 상태로 복귀
        SidePxMenuPxSet(defaulSize,83.5);
        moveCheck = "right";
      }
    }else{ // 전부 펼쳐 졌을때 의 기준
      if(numPx > defaulSize/5){
        // 전부 펼치기
        SidePxMenuPxSet(0,45);
        moveCheck = "left";
      }else{
        // 초기 상태로 되돌리기
        SidePxMenuPxSet(defaulSize,83.5);
        moveCheck = "right";
      }
    }

    //SideBar move 이벤트 삭제
    document.removeEventListener('mousemove',SideMoveListener);
  }

  let screenx : number = 0; // 사이드바 클릭시 현재 마우스 위치 넣기 변수
  let defaultWidth : number = 0; // 사이드바 펼칠때 기준이 되는 변수
  /**  
  * 마우스 Down 시 이벤트 연결 및 스타일 변경 함수
  */
  const SidMouseDown = (e:React.MouseEvent) :void =>{
    screenx = e.screenX;
    moveBoolean = true;
    childRef.current.style.transition = "transform 0ms";
    menuRef.current.style.transition = "left 0ms";
    parentRef.current.style.backgroundColor = "rgb(170,170,170)"; // 사이드바 를 클릭하면 뒷배경 변경

    SidebarLocation(); // 현재 사이드바 위치 설정
    //사이드 바에서 마우스 down 시 이벤트 연결
    document.addEventListener('mousemove',SideMoveListener);
  }
  /**  
  * 마우스 Down 후 이동시 사이드바 펼치기 혹은 접기 함수 (moveListener)
  */
   const SideMoveListener = (e:any) :void =>{
    if(moveBoolean){
      let menupx = 0;
      if(moveCheck === "right"){
        defaultWidth = defaulSize;
        menupx = 83.5;
      }else{
        defaultWidth = 0;
        menupx = 45;
      }
      defaultWidth += e.screenX-screenx; // 오른쪽 기준일시 defaulSize += (현재 마우스 위치 - 클릭 했을때 시점의 마우스 위치);

      if(defaultWidth >= -1) { // 전부 펼쳐졌으면 더이상 움직이지 않음
        return;
      }
      SidePxMenuPxSet(defaultWidth,menupx);
    }else{
      return;
    }
  }

  /**  
  * menu 클릭시 사이드바 메뉴바 원상복귀
  */
  const menuClick = ():void =>{ // menu 클릭 시 사이드바 접기
    SidePxMenuPxSet(defaulSize,83.5);
  }

  let prevPosX : number = 0; // 마우스 클릭시 현재 커서 x위치
  let prevPosY : number = 0; // 마우스 클릭시 현재 커서 y위치
/**
 * TopMenu 에서 클릭시 현재 마우스위치 설정과 move 이벤트 연결 함수
 * @param e (MouseEvent)
 */
  const TopMenuDown = (e:React.MouseEvent) :void =>{
    prevPosX = e.clientX;
    prevPosY = e.clientY;
    if(pin){ // 마우스 Down 시 move 이벤트 연결
      document.addEventListener("mousemove",TopMenuMove);
    }
  }

/**
 * TopMenu 에서 마우스 Up 시 move 이벤트 연결 해제 함수
 */
  const TopMenuUp = () : void =>{ // 마우스 Up 시 move 이벤트 삭제
    document.removeEventListener("mousemove",TopMenuMove);
  }

/**
 * TopMenu 에서 클릭후 드래그시 이동 되는 함수
 * @param e (MouseEvent)
 */
  const TopMenuMove = (e:any) : void =>{ // 마우스 Down 상태에서 이동시 해당 메뉴 이동
    if (!pin) return;
    const posX : number = prevPosX - e.clientX; 
    const posY : number = prevPosY - e.clientY; 

    prevPosX = e.clientX; //현재 커서 위치 재설정
    prevPosY = e.clientY; //현재 커서 위치 재설정

    TopMenuRef.current.style.left = (TopMenuRef.current.offsetLeft - posX) + "px";
    TopMenuRef.current.style.top = (TopMenuRef.current.offsetTop - posY) + "px";
  }

  return (
  <div style={{width:"202%", height:"100%",display: "flex",transition:"all 4s ease"}} ref={parentRef}>
  
  <TopMenu ref={TopMenuRef} onMouseDown={(e)=>TopMenuDown(e)} onMouseUp={()=>TopMenuUp()} style={{position:"fixed"}}>
    <AiOutlineMenu className='menuIcon' onClick={()=>SidePxMenuPxSet(0,45)}/>
  {
        menus.map((menu,index)=>{
          return(
            <NavLink exact className='TopMenu' 
                          to={menu.path} 
                          key={index}
            >
              {menu.name}
            </NavLink>
          );
        })
      }
      {
        !pin ? <AiFillPushpin className='pinIcon' onClick={()=>setPin(true)}/> : <AiOutlinePushpin className='pinIcon' onClick={()=>setPin(false)}/>
      }   
  </TopMenu>
  <div className='sidebar Notdrag' style={{transform:"translateX("+defaulSize+"px)"}} onMouseDown={(e)=> SidMouseDown(e)} ref={childRef}>
  <Side className='SideSlide Notdrag' ref={menuRef}>
    <Menu>
    <Profile/>
    <Comment>
      {/* <p style={{color:"rgba(255,255,255,0.75)",fontSize:"22px"}}>Front End 개발자를 꿈꾸는 직장인 입니다.</p> */}
    </Comment>
      {
        menus.map((menu,index)=>{
          return(
            <NavLink exact onClick={()=>menuClick()} 
                          className='Notdrag SideMenu' 
                          to={menu.path} 
                          key={index} 
                          
            >
              {menu.name}
            </NavLink>
          );
        }) 
      }
      <SideBottom>
        <ul>
          <li><a href="https://github.com/MinGyeongHyeon/mgh" target="_blank" className='bottomMenu'><AiFillGithub size="29" color='rgb(255,255,255)'/></a></li>
          <li><a href="mailto:rudgus1004@gmail.com" className='bottomMenu'><AiOutlineMail size="29" color='rgb(255,255,255)'/></a></li>
        </ul>
        
      </SideBottom>
    </Menu>
  </Side>
  </div>

  </div>
  )
  
}

export default Sidebar;
