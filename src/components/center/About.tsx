import {CenterChildrenDiv, CenterDiv} from "../../const/StyledConst";
import styled from "styled-components";
import imgFile from '../../assets/imgs/react.png';
const Profile = styled.img.attrs({
    src : `${imgFile}`
  })`
    width: 150px;
    height: 150px;
    border-radius: 100%;
    margin-bottom : 20px;
    margin-left: 5%;
    margin-top: 3%;
    background-color: #282c34;
  `;
const Info = styled.div`
    width: 100%;
    display: inline-flex;
`

const About = () : JSX.Element => {

    return(
        <CenterDiv>
            <CenterChildrenDiv>
                <h1 className="title">About</h1>
                <div className="hr"></div>
                <Info>
                    <Profile/>
                    <h2 style={{marginLeft:"3%",fontSize:"30px",marginTop:"3%"}}>민경현</h2>
                </Info>

            </CenterChildrenDiv>
        </CenterDiv>
    
    )
}

export default About;