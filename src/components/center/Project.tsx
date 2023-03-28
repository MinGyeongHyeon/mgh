import { MENU_LIST, PROJECT_MENU } from "../../vo/menuVo";
import {CenterChildrenDiv, CenterDiv} from "../../const/StyledConst";
import {Document, Page , pdfjs} from 'react-pdf';
import styled from "styled-components";
import sabre from "../../assets/imgs/AsianaSabre.png";
//import dpf from "./sixde.pdf";
//import dd from "../../assets/pdf/sixde.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Sabre = styled.img.attrs({
    src : `${sabre}`
})`
    width : 100%;
    height: 100%;
`;

const RowDiv = styled.div`
    display:flex;
    width: 70%;
    flex-direction: column;
`
const BoxDiv = styled.div`
    height: 100%;
    width: 100%;
    max-width: 50vw;
    border-radius: 4px;
    margin: 0 auto 30px;
    background: #fff;
    box-shadow: 0 3px 6px rgba(0,0,0,.2), 0 3px 6px rgba(0,0,0,.2);
    display: flex;
    flex-direction: row;
`
const BoxChildrenDiv = styled.div`
    width : 50%
`

const Project = (props:MENU_LIST) : JSX.Element => {
    //
    const menus : Array<PROJECT_MENU> = props.menulist;
    
    return(
        <CenterDiv>
            <CenterChildrenDiv>
                <h1 className="title">Project</h1>
                <div className="hr"></div>
                <p style={{fontSize:"30px"}}>Academy Projcet</p>
                {/* <Document file={"./sixde.pdf"}>
                    <Page height={400} pageNumber={1}/>
                </Document> */}
                <br/>
                <br/>
                <br/>
                <hr/>
                <br/>
                <p style={{fontSize:"30px"}}>SI Projcet</p>
                <RowDiv>
                    <BoxDiv>
                        <BoxChildrenDiv>
                            <a href="https://www.asianasabre.co.kr/Product/Workspace" target={"_blank"}><Sabre/></a>
                        </BoxChildrenDiv>
                        <BoxChildrenDiv>
                            <p style={{fontSize:"25px"}}>항공 SR(Sabre Red) 360 App Project</p>
                            <p style={{fontSize:"18px"}}>근 무 처 : (주)Maius</p>
                            <p style={{fontSize:"18px"}}>고객 : Asiana Sabre</p>
                            <p style={{fontSize:"18px"}}>개발 기간 : 2020.02 ~ 2021.08</p>
                            <p style={{fontSize:"15px"}}>Red 360앱 프로그램 구축 사업 항공권 발권 및 예약 Booking 시스템 개발 </p>
                            <p style={{fontSize:"13px",color:"black"}}>#Java #TypeScript #Rest Api #Soap Api #Full Stack #Sabre ngv module</p>
                        </BoxChildrenDiv>
                    </BoxDiv>

                    <BoxDiv>
                        <BoxChildrenDiv>
                            <a href="https://www.asianasabre.co.kr/Product/Sr360Web" target={"_blank"}><Sabre/></a>
                        </BoxChildrenDiv>
                        <BoxChildrenDiv>
                            <p style={{fontSize:"25px"}}>항공 SR(Sabre Red) 360 Web Project</p>
                            <p style={{fontSize:"18px"}}>근 무 처 : (주)Maius</p>
                            <p style={{fontSize:"18px"}}>고객 : Asiana Sabre</p>
                            <p style={{fontSize:"18px"}}>개발 기간 : 2021.08 ~ 2022.03</p>
                            <p style={{fontSize:"15px"}}>기존 Red 360 App 에서 Web으로 추가 개발 (발권,예약 주요기능 제외)</p>
                            <p style={{fontSize:"13px",color:"black"}}>#Java #TypeScript #Rest Api #Soap Api #Full Stack #Sabre ngv module #Post Message</p>
                        </BoxChildrenDiv>
                    </BoxDiv>

                </RowDiv>
            </CenterChildrenDiv>
        </CenterDiv>
    );

}

export default Project;
