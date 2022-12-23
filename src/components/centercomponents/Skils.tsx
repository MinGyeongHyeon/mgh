import { CenterDiv } from "../../const/StyledConst";
import styled from "styled-components";
import cssImg from "../../assets/imgs/css.png";
import htmImg from "../../assets/imgs/html5.png";
import jstImg from "../../assets/imgs/javascript.png";
import tsImg from "../../assets/imgs/typescript.png";

const CssIcon = styled.img.attrs({
    src : `${cssImg}`
})``
const HtmlIcon = styled.img.attrs({
    src : `${htmImg}`
})``

const JsIcon = styled.img.attrs({
    src : `${jstImg}`
})``

const TsIcon = styled.img.attrs({
    src : `${tsImg}`
})``


const Skils = () : JSX.Element => {
    console.log("뭐냐 대채ㅔ");
    return(
      <CenterDiv>
        <h1 className="title">Skils</h1>
        <div className="hr"></div>

        <CssIcon className="skilIcon"/>
        <HtmlIcon className="skilIcon"/>
        <JsIcon className="skilIcon"/>
        <TsIcon className="skilIcon"/>
      </CenterDiv>  
    );

}

export default Skils;