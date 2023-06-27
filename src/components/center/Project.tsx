import { PROJECT_MENU } from "../../vo/projectVo";
import {CenterChildrenDiv, CenterDiv} from "../../const/StyledConst";
import styled from "styled-components";
import {useState} from "react";
import ProjectModalList from "../modal/ProjectModal";
import BottomComment from "../common/BottomComment";
import { useMediaQuery } from 'react-responsive'
const Imgs = styled.img`
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
    @media screen and (max-width: 850px) {
        max-width: 100vw;
        width: 135%;
        margin-left : 5px;
    }
`
const BoxChildrenDiv = styled.div`
    width : 50%;
    @media screen and (max-width: 850px) {
        width : 100%;
    }
`
type ProjectProps = {
    projectList : Array<PROJECT_MENU>
}

const Project = (props:ProjectProps) : JSX.Element => {
    const isDesktop : Boolean = useMediaQuery({query: "(min-width: 850px)" });
    const [ModalOpen, setModalOpen] = useState(false);
    const [pdfUrl, setPdfUrl] = useState<string>();
    const [ModalId, setModalId] = useState<string>();
    const [aLink, setALink] = useState<string>();
    const [ExcelDown, setExcelDown] = useState<string>();
    
    const proList : Array<PROJECT_MENU> = props.projectList;

    const handleModalClose = () => {
        setModalOpen(false);
    };

    const modalOpen = (url : string|undefined , modalId? : string , modalAlink? : string , excelDown? : string) =>{
        if(url === undefined){
            setModalId(modalId);
            setPdfUrl(undefined);
            setALink(modalAlink);
            setExcelDown(excelDown);
        }else{
            setPdfUrl(url);
        }
        setModalOpen(true);
    }

    return(
        <CenterDiv>
            <CenterChildrenDiv>
                <ProjectModalList visible={ModalOpen} onClose={handleModalClose} pdfUrl={pdfUrl} modalId={ModalId} alink={aLink} excelDwon={ExcelDown}></ProjectModalList>

                <h1 className="title">Project</h1>
                <div className="hr"></div>
                <p style={{fontSize:"30px"}}>Academy Projcet</p>
                
                <RowDiv>
                    {
                        proList.map((obj,index) : JSX.Element =>{
                            if(obj.id === "AD"){
                                return (
                                    <BoxDiv key={obj.title}>
                                        {
                                        isDesktop &&  
                                            <BoxChildrenDiv>
                                                <Imgs src={process.env.PUBLIC_URL + obj.img} style={{cursor:"pointer"}} onClick={()=>{modalOpen(obj.pdfUrl)}}></Imgs>
                                            </BoxChildrenDiv>
                                        }
                                        <BoxChildrenDiv>
                                                <p style={{fontSize:"23px"}}>{obj.title}</p>
                                                <p style={{fontSize:"18px"}}>{obj.work}</p>
                                                <p style={{fontSize:"18px"}}>{obj.time}</p>
                                                <p style={{fontSize:"18px"}}>{obj.peopleNumber}</p>
                                                <p style={{fontSize:"15px"}}>{obj.content}</p>
                                                <p style={{fontSize:"13px",color:"black"}}>{obj.tag}</p>
                                                {
                                                    !isDesktop ? <p style={{fontSize:"12px"}}>{" 자세한 사항은 PC 에서 확인해주시기 바랍니다."}</p> : <p>{" Img Click PDF Open"}</p>
                                                }
                                                
                                        </BoxChildrenDiv>
                                    </BoxDiv>
                                );
                            }else{
                                return <></>;
                            }
                        })
                    }

                </RowDiv>
               
                <br/>
                <br/>
                <br/>
                <hr/>
                <br/>
                <p style={{fontSize:"30px"}}>SI Projcet</p>
                <RowDiv>
                    {
                        proList.map((obj,index) : JSX.Element  =>{
                            if(obj.id === "SI") {
                                return (
                                    <BoxDiv key={index}>
                                        {
                                        isDesktop &&  
                                            <BoxChildrenDiv>
                                                <Imgs src={process.env.PUBLIC_URL + obj.img} style={{cursor:"pointer"}} onClick={()=>{modalOpen(undefined,obj.modalId,obj.alink)}}></Imgs>
                                            </BoxChildrenDiv>
                                        }
                                        <BoxChildrenDiv>
                                            <p style={{fontSize:"23px"}}>{obj.title}</p>
                                            <p style={{fontSize:"18px"}}>{obj.work}</p>
                                            <p style={{fontSize:"18px"}}>{obj.client}</p>
                                            <p style={{fontSize:"18px"}}>{obj.time}</p>
                                            <p style={{fontSize:"18px"}}>{obj.peopleNumber}</p>
                                            <p style={{fontSize:"15px"}}>{obj.content}</p>
                                            <p style={{fontSize:"13px",color:"black"}}>{obj.tag}</p>
                                            {
                                                !isDesktop && <p style={{fontSize:"12px"}}>{" 자세한 사항은 PC 에서 확인해주시기 바랍니다."}</p>
                                            }
                                        </BoxChildrenDiv>
                                    </BoxDiv>
                                );
                            }else{
                                return <></>;
                            };
                        })
                    }

                </RowDiv>

                <br/>
                <br/>
                <br/>
                <hr/>
                <br/>
                <p style={{fontSize:"30px"}}>SM Projcet</p>
                <RowDiv>
                    {
                        proList.map((obj,index) : JSX.Element  =>{
                            if(obj.id === "SM") {
                                return (
                                    <BoxDiv key={index}>
                                        {
                                        isDesktop &&  
                                            <BoxChildrenDiv>
                                                <Imgs src={process.env.PUBLIC_URL + obj.img} style={{cursor:"pointer"}} onClick={()=>{modalOpen(undefined , obj.modalId , obj.alink , obj.exceldown)}}></Imgs>
                                            </BoxChildrenDiv>
                                        }
                                        <BoxChildrenDiv>
                                            <p style={{fontSize:"23px"}}>{obj.title}</p>
                                            <p style={{fontSize:"18px"}}>{obj.work}</p>
                                            <p style={{fontSize:"18px"}}>{obj.client}</p>
                                            <p style={{fontSize:"18px"}}>{obj.time}</p>
                                            <p style={{fontSize:"18px"}}>{obj.peopleNumber}</p>
                                            <p style={{fontSize:"15px"}}>{obj.content}</p>
                                            <p style={{fontSize:"13px",color:"black"}}>{obj.tag}</p>
                                            {
                                                !isDesktop && <p style={{fontSize:"12px"}}>{" 자세한 사항은 PC 에서 확인해주시기 바랍니다."}</p>
                                            }
                                        </BoxChildrenDiv>
                                    </BoxDiv>
                                );
                            }else{
                                return <></>;
                            };
                        })
                    }

                </RowDiv>
                <BottomComment/>
            </CenterChildrenDiv>
        </CenterDiv>
    );

}

export default Project;
