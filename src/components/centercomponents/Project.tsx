import { MENU_LIST, PROJECT_MENU } from "../../vo/menuVo";
import {CenterChildrenDiv, CenterDiv} from "../../const/StyledConst";
import {SiJavascript} from "react-icons/si";
const Project = (props:MENU_LIST) : JSX.Element => {
    
    const menus : Array<PROJECT_MENU> = props.menulist;
    
    return(
        <CenterDiv>
            <CenterChildrenDiv>
                <h1 className="title">Project</h1>
                <div className="hr"></div>
                <SiJavascript style={{fontSize:"100px"}}></SiJavascript>
            </CenterChildrenDiv>
        </CenterDiv>
    );

}

export default Project;
