import { MENU_LIST, SIDE_MENU } from "../../vo/menuVo";
import styled from "styled-components";
import {AiOutlineFundProjectionScreen} from "react-icons/ai";
import {NavLink} from 'react-router-dom';
const Side = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  height : 100%;
  background-color: black;
`;

const Menu = styled.div` 
  width: 100%;
  height : 100%;
  display: flex;
  flex-direction: column;
`;
const MobilSidebar = (props:MENU_LIST) : JSX.Element => {

    const menus : Array<SIDE_MENU> = props.menulist;

    return(
        <Side>
            <Menu>
                {
                    menus.map((menu,index)=>{
                        return(
                            <NavLink exact
                                        className='Notdrag SideMenu' 
                                        to={menu.path} 
                                        key={index} 
                                          
                          >
                            <AiOutlineFundProjectionScreen className="mobilIcon"/>{menu.name}
                           </NavLink>
                        );
                    }) 
                }
                
            </Menu>
        </Side>
    );
}

export default MobilSidebar;