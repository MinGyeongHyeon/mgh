import { CenterDiv } from "../../const/StyledConst";
import { useMediaQuery } from 'react-responsive'
import styled from "styled-components";
import cssImg from "../../assets/imgs/css.png";
import htmImg from "../../assets/imgs/html5.png";
import jstImg from "../../assets/imgs/javascript.png";
import tsImg from "../../assets/imgs/typescript.png";

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


const Skils = () : JSX.Element => {

    const isDesktop = useMediaQuery({query: "(min-width: 850px)" });

    return(
      <CenterDiv>
        <h1 className="title">SKILS</h1>
        <div className="hr"></div>
        
        {isDesktop ? <HtmlImg className="pcImg"/> : <HtmlImg className="mobilImg"/>} 
        {isDesktop ? <CssImg className="pcImg"/> : <CssImg className="mobilImg"/>}
        {isDesktop ? <JsImg className="pcImg"/> : <JsImg className="mobilImg"/>}
        {isDesktop ? <TsImg className="pcImg"/> : <TsImg className="mobilImg"/>}
        
      </CenterDiv>  
    );

}

export default Skils;