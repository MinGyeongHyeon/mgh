import { CenterChildrenDiv, CenterDiv } from "../../const/StyledConst";
import { useMediaQuery } from 'react-responsive'
import BottomComment from "../common/BottomComment";
import React,{useState } from 'react'; 
import { SkilModalList } from '../../const/ModalConst';
import SkilsModal from "../modal/SkilsModal";
import styled from "styled-components";
import cssImg from "../../assets/imgs/css.png";
import htmImg from "../../assets/imgs/html5.png";
import jstImg from "../../assets/imgs/javascript.png";
import tsImg from "../../assets/imgs/typescript.png";
import jqImg from "../../assets/imgs/jquery.png";
import javaImg from "../../assets/imgs/java.png";
import reImg from '../../assets/imgs/react.png';
import gitImg from '../../assets/imgs/git.png';
import devImg from '../../assets/imgs/developer.png';
import msImg from '../../assets/imgs/mssql.png';
import oraImg from '../../assets/imgs/oracle.png';
import svnimg from '../../assets/imgs/svn.png';

const CssImg = styled.img.attrs({
    src : `${cssImg}`
})``
const HtmlImg = styled.img.attrs({
    src : `${htmImg}`
})``

const JsImg = styled.img.attrs({
    src : `${jstImg}`
})``

const TsImg = styled.img.attrs({
    src : `${tsImg}`
})``
const JqImg = styled.img.attrs({
    src : `${jqImg}`
})``

const GitImg = styled.img.attrs({
    src : `${gitImg}`
})``
const DevImg = styled.img.attrs({
    src : `${devImg}`
})``
const OraImg = styled.img.attrs({
    src : `${oraImg}`
})``
const SvnImg = styled.img.attrs({
    src : `${svnimg}`
})``
const MsImg = styled.img.attrs({
    src : `${msImg}`
})``


const ReImg = styled.img.attrs({
    src : `${reImg}`
})`
    background-color: #282c34;
`
const JavaImg = styled.img.attrs({
    src : `${javaImg}`
})`
    margin-left:25%;
`
const ImgDiv = styled.div`
    margin-left: 13%;
`
const ImgP = styled.p`
    font-size: 25px;
    margin-left: 26%;
`

const Skils = () : JSX.Element => {

    const isDesktop : Boolean = useMediaQuery({query: "(min-width: 850px)" });

    const [modalOpen , setModalOpen] = useState(false);
    const [modalTitle , setmodalTitle] = useState("");
    const [modalContent , setmodalContent] = useState("");
    const [modalScore , setmodalScore] = useState(0);
    const [modalHeight , setmodalHeight] = useState("");

    const showModal = (ModalId:string) => {
        setModalOpen(true);
        SkilModalList.map((obj) :void => {
            if(obj.id === ModalId){
                setmodalTitle(obj.title);
                setmodalContent(obj.content);
                setmodalScore(obj.score);
                setmodalHeight(obj.height);
                return;
            }
        })
    }
  
    const handleModalClose = () : void => {
        setModalOpen(false);
    };

    return(
      <CenterDiv>
        <CenterChildrenDiv>
            <SkilsModal visible={modalOpen} onClose={handleModalClose} title = {modalTitle} content = {modalContent} score = {modalScore} modalheight = {modalHeight}/>
            <div>
            <h1 className="title">Skils</h1>
            <div>Click Icon</div>
            </div>
            <hr/>

            <ImgDiv>
                <ImgP>Front-End</ImgP>
                {isDesktop ? <HtmlImg className="pcImg" onClick={()=>showModal("html")}/> : <HtmlImg className="mobilImg" onTouchEnd={()=>showModal("html")}/>} 
                {isDesktop ? <CssImg className="pcImg" onClick={()=>showModal("css")}/> : <CssImg className="mobilImg" onTouchEnd={()=>showModal("css")}/>}
                {isDesktop ? <JsImg className="pcImg" onClick={()=>showModal("js")}/> : <JsImg className="mobilImg" onTouchEnd={()=>showModal("js")}/>}
                {isDesktop ? <JqImg className="pcImg" onClick={()=>showModal("jquery")}/> : <JqImg className="mobilImg" onTouchEnd={()=>showModal("jquery")}/>}
                {isDesktop ? <TsImg className="pcImg" onClick={()=>showModal("ts")}/> : <TsImg className="mobilImg" onTouchEnd={()=>showModal("ts")}/>}
                {isDesktop ? <ReImg className="pcImg" onClick={()=>showModal("react")}/> : <ReImg className="mobilImg" onTouchEnd={()=>showModal("react")}/>}
                <br/>
                <br/>

                <ImgP>Back-End</ImgP>
                {isDesktop ? <JavaImg className="pcImg" onClick={()=>showModal("java")}/> : <JavaImg className="mobilImg" onTouchEnd={()=>showModal("java")}/>}

                <br/>
                <br/>
                <ImgP>Etc</ImgP>
                {isDesktop ? <GitImg className="pcImg" onClick={()=>showModal("git")}/> : <GitImg className="mobilImg" onTouchEnd={()=>showModal("git")}/>}
                {isDesktop ? <SvnImg className="pcImg" onClick={()=>showModal("svn")}/> : <SvnImg className="mobilImg" onTouchEnd={()=>showModal("svn")}/>}
                {isDesktop ? <OraImg className="pcImg" onClick={()=>showModal("oracle")}/> : <OraImg className="mobilImg" onTouchEnd={()=>showModal("oracle")}/>}
                {isDesktop ? <MsImg className="pcImg" onClick={()=>showModal("mssql")}/> : <MsImg className="mobilImg" onTouchEnd={()=>showModal("mssql")}/>}
                {isDesktop ? <DevImg className="pcImg" onClick={()=>showModal("dev")}/> : <DevImg className="mobilImg" onTouchEnd={()=>showModal("dev")}/>}
            </ImgDiv>

            <BottomComment/>
        </CenterChildrenDiv>
      </CenterDiv>  
    );

}

export default Skils;