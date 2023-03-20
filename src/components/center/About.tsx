import {CenterChildrenDiv, CenterDiv} from "../../const/StyledConst";
import styled from "styled-components";
import imgFile from '../../assets/imgs/meface.png';
import { Alink } from "../../const/MenuConst";
import {NavLink} from 'react-router-dom';
const Profile = styled.img.attrs({
    src : `${imgFile}`
  })`
    width: 150px;
    height: 150px;
    border-radius: 100%;
    margin-bottom : 20px;
    margin-top: 2%;
    background-color: #282c34;
  `;
const Info = styled.div`
    width: 100%;
    display: inline-flex;
`
const Comment = styled.div`
   color : rgba(92, 92, 92, 0.75);
`
const CommentTitle = styled.div`
  font-size : 150%;
  margin-top : 2%;
  `
const BottomComment = styled.div`
  
` 


const About = () : JSX.Element => {

    return(
        <CenterDiv>
            <CenterChildrenDiv>
                <h1 className="title">About</h1>
                <hr/>
                <Info>
                    <Profile/>
                    <div style={{width:"100%"}}>
                    <span>
                     <p style={{color:"black",fontSize:"150%",marginTop:"2%"}}>민경현 (백수)</p>
                     <p>Front End 개발자를 꿈꾸는 SI 3년차 개발자 입니다.</p>
                     <p>2019년 12월 신입 입사 ~ 2023년3월 퇴사</p>
                     <p>javaScript 잘 쓰고싶다..</p>
                    </span>
                    </div>
                </Info>
                <hr/>
                <CommentTitle>Personal Data</CommentTitle>
                <Comment>
                    <p className="comment">1995.02.03 관악구 출생</p>
                    <p className="comment">연락처 : rudgus1004@gmail.com</p>
                    <p className="comment">Gtihub : <a style={{color:"black"}} href={Alink[0].href} target={Alink[0].target}>https://github.com/MinGyeongHyeon/</a></p>
                </Comment>
                <br/>
                <hr/>

                <CommentTitle>Education</CommentTitle>
                <Comment>
                    <div className="comment">
                        <span>충남도립 대학교</span>
                        <br/>
                        <br/>
                        <span>MAR.2013 ~ FEB.2019</span>
                        <br/>
                        <br/>
                        <span>호텔관광 외식과</span>
                    </div>

                    <div className="comment">
                        <span>KH 정보교육원</span>
                        <br/>
                        <br/>
                        <span>FEB.2019 ~ NOV.2019</span>
                        <br/>
                        <br/>
                        <span>JAVA Spring Framework 웹 개발 과정</span>
                    </div>

                    <div className="comment">
                        <span>서울사이버 대학교</span>
                        <br/>
                        <br/>
                        <span>MAR.2022 ~ 4학년 재학중</span>
                        <br/>
                        <br/>
                        <span>컴퓨터 공학과</span>
                    </div>
                </Comment>
                <CommentTitle>Skils</CommentTitle>
                <Comment>
                    <br></br>
                <NavLink exact
                          className='comment' 
                          to="/mgh/skils"      
                >
                    Skils 바로가기
                </NavLink>
                </Comment>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <hr></hr>
                <br/>
                <BottomComment>
                <div style={{fontSize:"13px",color:"rgba(92, 92, 92, 0.75)",marginLeft:"40%"}}>© 2023</div>
                <div style={{fontSize:"15px",color:"rgba(92, 92, 92, 0.75)",marginLeft:"40%"}}>민경현</div>
                </BottomComment>
            </CenterChildrenDiv>
        </CenterDiv>
    
    )
}

export default About;