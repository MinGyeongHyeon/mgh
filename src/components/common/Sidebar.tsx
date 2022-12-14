import {NavLink} from 'react-router-dom';
import styled from "styled-components";
import imgFile from '../../assets/logo192.png';
import React,{useEffect,useRef } from 'react'; 
import {MENU_LIST,CONTSTURL} from "../../vo/menuVo";

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
  margin-bottom : 60px;
  margin-left: -40px;
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
  
  let childRef : React.MutableRefObject<any> = useRef<any>(null);
  let parentRef : React.MutableRefObject<any> = useRef<any>(null);
  let menutRef : React.MutableRefObject<any> = useRef<any>(null);

  let moveBoolean : Boolean = false;
  useEffect(()=>{
    document.addEventListener('mouseup',mouseUp);
    window.addEventListener('resize',ResizeEnvet);
  });

/**
 * @param pixel (사이드바 위치)
 * @param menuPx (menu위치)
 */
  const TranslateSet = (sidePx : number , menuPx:number = 83.5) : void =>{
    childRef.current.style.transform = "translateX("+sidePx+"px)";
    menutRef.current.style.left = menuPx+'%';
  }
 

  let defaulSize : number = (2133 - window.innerWidth)+ -1735;
  /**  
  * 브라우져 사이즈 변경시 사이드바 크기 조절 (전체화면 시 크기- 사이즈변경 시 크기 + 전체화면 기준 사이드바 위치)
  */
  const ResizeEnvet = () =>{
    let numPx : number = transitionPoint();
    defaulSize = (2133 - window.innerWidth)+ -1735;
    if(numPx !== 0){
      TranslateSet(defaulSize);
    }
  }

  let moveCheck : string = "right"; // 사이드바 오른쪽 왼쪽 움직일 기준 변수
  /**  
  * 현재 사이드바 위치 추적 하는 함수
  */
  const transitionPoint = () : number =>{
    let strPx : string = childRef.current.style.transform;
    let split : string[] = strPx.split("(");
    let numPx : number = Number(split[1].replace(/px\)/,""));
    if(numPx === defaulSize){
      // 왼쪽으로 접혀 있으면 오른쪽 기준
      moveCheck = "right";
    }else{
      // 전부다 펼쳐 있으면 왼쪽 기준
      moveCheck = "left";
    }
    return numPx;
  }
  
  /**  
  * 사이드바 마우스 드래그 후 현재 위치에 맞게 사이드바 조절
  */
  const mouseUp = () : void =>{
    moveBoolean = false;
    let numPx : number = transitionPoint();
    childRef.current.style.transition = "transform 500ms";
    menutRef.current.style.transition = "left 500ms";
    parentRef.current.style.backgroundColor = "rgb(255,255,255)"; // 뒷배경 원상복귀
    if(numPx > defaulSize/1.5){
      // 반 이상 넘어 오면 전부 펼치기
      TranslateSet(0,45);
    }else{
      // 반 미만 으로 오면 원래 상태로 복귀
      TranslateSet(defaulSize,83.5);
    }
    //move 이벤트 삭제
    document.removeEventListener('mousemove',moveListener);
  }

  let screenx : number = 0; // 사이드바 클릭시 현재 마우스 위치 넣기 변수
  let defaultWidth : number = 0; // 사이드바 펼칠때 기준이 되는 변수
  /**  
  * 마우스 Down 시 이벤트 연결 및 스타일 변경 함수
  */
  const mouseDown = (e:any) :void =>{
    screenx = e.screenX;
    moveBoolean = true;
    childRef.current.style.transition = "transform 0ms";
    menutRef.current.style.transition = "left 0ms";
    parentRef.current.style.backgroundColor = "rgb(170,170,170)"; // 사이드바 를 클릭하면 뒷배경 변경

    transitionPoint(); // 현재 사이드바 위치 설정
    //사이드 바에서 마우스 down 시 이벤트 연결
    document.addEventListener('mousemove',moveListener);
  }

  /**  
  * 마우스 Down 후 이동시 사이드바 펼치기 혹은 접기 함수 (moveListener)
  */
  const moveListener = (e:any) :void =>{
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
      TranslateSet(defaultWidth,menupx);
    }else{
      return;
    }
  }

  /**  
  * menu 클릭시 사이드바 메뉴바 원상복귀
  */
  const menuClick = ():void =>{ // menu 클릭 시 사이드바 접기
    TranslateSet(defaulSize,83.5);
  }

  return (
  <div style={{width:"202%", height:"100%",display: "flex",transition:"all 4s ease"}} ref={parentRef}>
  <div className='sidebar sideT' style={{transform:"translateX("+defaulSize+"px)"}} onMouseDown={(e)=> mouseDown(e)} ref={childRef}>
  <Side className='SideSlide Notdrag' ref={menutRef}>
    <Menu>
    <Profile/>
      {
        menus.map((menu,index)=>{
          return(
            <NavLink exact onClick={()=>menuClick()} 
                          className='Notdrag' 
                          style={{color:"white",textDecoration:"none" , marginBottom:"20px",fontSize:"20px"}} 
                          to={menu.path} 
                          key={index} 
                          activeStyle={{color:"red"}}
            >
              {menu.name}
            </NavLink>
          );
        })
      }
    </Menu>
  </Side>
  </div>
  </div>
  )
  
}

export default React.memo(Sidebar);