import { MENU_LIST, SIDE_MENU } from "../../vo/menuVo";
import {useEffect,useRef,useState } from 'react'; 
import styled from "styled-components";
import {AiOutlineFundProjectionScreen,AiOutlineMenu,AiOutlineMail,AiFillGithub,AiOutlineHome,AiFillHtml5} from "react-icons/ai";
import {FiRss} from "react-icons/fi";
import {NavLink} from 'react-router-dom';
const Side = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 15%;
  height : 100%;
`;

const Menu = styled.div` 
  width: 100%;
  height : 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;
const SideBottom = styled.div`
  margin-left: -80%;
  margin-top: 60%;
  width     : 30vw
`
const MobilSidebar = (props:MENU_LIST) : JSX.Element => {

    let [icon , setIcon] = useState(true);

    let parentRef : React.MutableRefObject<any> = useRef<any>(null);
    let childRef : React.MutableRefObject<any> = useRef<any>(null);

    const menus : Array<SIDE_MENU> = props.menulist;

    /**  
    * 메뉴 아이콘 클릭시 사이드바 펼치기 및 접기
    */
    const unFoldSidebar = () : void => {
        if(icon){
            parentRef.current.style.transform = "translateX(0%)";
            childRef.current.style.transform = "translateX(10%)";
            setIcon(false);
        }else{
            FoldSidebar();
        }
    }

    /**  
    * 사이드바가 펼쳐져 있을때 메뉴 클릭시 사이드바 접기
    */
    const FoldSidebar = () : void =>{
        if(!icon){
            parentRef.current.style.transform = "translateX(-85%)";
            childRef.current.style.transform = "translateX(283%)";
            setIcon(true);
        }
    }

    return(
        <div className='sidebar' style={{backgroundSize:"100% 100%",transform:"translateX(-85%)",transition:"transform 500ms"}} ref={parentRef}>
        <Side style={{transform:"translateX(283%)",transition:"transform 500ms"}} ref={childRef}>
            <AiOutlineMenu className="mobilIcon" style={{marginTop:"30px"}} onClick={()=>unFoldSidebar()}/>
            <Menu>
                {
                    menus.map((menu,index)=>{
                            return(
                                <NavLink exact
                                            className='SideMenu' 
                                            to={menu.path} 
                                            key={index} 
                                            onClick={()=>FoldSidebar()}
                              >
                                {
                                icon ? 
                                    index == 0 ? <AiOutlineHome className="mobilIcon"/>
                                    : index == 1 ? <AiFillHtml5 className="mobilIcon"/>
                                    : index == 2 ? <AiOutlineFundProjectionScreen className="mobilIcon"/> 
                                    : <FiRss className="mobilIcon"/>
                                : menu.name
                                }
                                </NavLink>
                            );
                    }) 
                }
                { !icon ? 
                <SideBottom>
                    <ul>
                        <li><a href="https://github.com/MinGyeongHyeon/mgh" target="_blank" className='bottomMenu'><AiFillGithub size="29" color='rgb(255,255,255)'/></a></li>
                        <li><a href="mailto:rudgus1004@gmail.com" className='bottomMenu'><AiOutlineMail size="29" color='rgb(255,255,255)'/></a></li>
                    </ul>
                </SideBottom> : null
                }
            </Menu>
        </Side>
        </div>
    );
}

export default MobilSidebar;