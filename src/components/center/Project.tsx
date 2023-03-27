import { MENU_LIST, PROJECT_MENU } from "../../vo/menuVo";
import {CenterChildrenDiv, CenterDiv} from "../../const/StyledConst";
import {Document, Page , pdfjs} from 'react-pdf';
import styled from "styled-components";
import dpf from "../../assets/pdf/SixDestiny.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Project = (props:MENU_LIST) : JSX.Element => {
    
    const menus : Array<PROJECT_MENU> = props.menulist;
    
    return(
        <CenterDiv>
            <CenterChildrenDiv>
                <h1 className="title">Project</h1>
                <div className="hr"></div>
                <p style={{fontSize:"30px"}}>Academy Projcet</p>
                <Document file={"../../assets/pdf/Six.pdf"}>
                    <Page height={400} pageNumber={1}/>
                </Document>
            </CenterChildrenDiv>
        </CenterDiv>
    );

}

export default Project;
