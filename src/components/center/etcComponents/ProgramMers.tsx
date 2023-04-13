import styled from "styled-components";
import ReportResult from "./programMers/ReportResult";
import NewId from "./programMers/NewId";
import FinishRunner from "./programMers/FinishRunner";
import CodingEtc from "./programMers/CodingEtc";
import React, { useState, useEffect, useRef } from 'react';

const LiTag = styled.li`
    float: left;
    list-style: disc;
    margin-left: 2%;
    width: 11rem;
    border-bottom-style: none;
    cursor: pointer;
`

const Span = styled.span`
    color : black;
    :hover{
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: rgb(108,108,108);
    }
`
const ProjramMersDiv = styled.div`
    opacity: 1;
    transform: scale(1);
    transition: opacity 300ms, transform 300ms;
`

const ProgramMers = (): JSX.Element => {

    const [Gubun, setGubun] = useState("report");

    const elementRef: React.MutableRefObject<any> = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (elementRef.current) {
            // 요소가 변경되었을 때 애니메이션을 실행
            const element = elementRef.current;
            setTimeout(() => { //3초의 텀을 두고 실행
                element.style.opacity = "1";
            }, 300);
        }
    });


    /**
     * 카테고리 클릭 시 아래 화면 변경 이벤트
     * @param categoryName 
     */
    const GuBunSet = (GubunName: string): void => {
        if (Gubun !== GubunName) {
            elementRef.current.style.opacity = "0"; // state가 변경 되기전 opacity 0 설정 (기존 Div hide)
            setTimeout(() => { //3초의 텀을 두고 실행 
                setGubun(GubunName);
            }, 300);
        }
    }

    /**
     * 렌더링 시 category 에 담겨있는 구분자에 따라 보여질 화면
     * @returns JSX.Element
     */
    const CodingPracticeOpen = (): JSX.Element => {
        let codingComponent: JSX.Element = <></>;

        switch (Gubun) {

            case "report": codingComponent = <ReportResult/>; break;

            case "newId": codingComponent = <NewId/>; break;

            case "finishRunner": codingComponent = <FinishRunner/>; break;

            case "codingEtc": codingComponent = <CodingEtc/>; break;
        }

        return codingComponent;

    }

    return (
        <div style={{ marginLeft: "4%" }}>
            <h1>프로그래머스</h1>
            <h4>[코딩테스트] [Level 1] [JavaScript]</h4>
            {/* <div>코딩테스트 연습 &#62; 2022 KAKAO BLIND RECRUITMENT &#62; 신고 결과 받기</div> */}
            <ul>
                <LiTag><Span onClick={() => GuBunSet("report")}>1. 신고 결과 받기</Span></LiTag>
                <LiTag><Span onClick={() => GuBunSet("newId")}>2. 신규 아이디 추천</Span></LiTag>
                <LiTag><Span onClick={() => GuBunSet("finishRunner")}>3. 완주하지 못한 선수</Span></LiTag>
                
            </ul>
            <br/>
            <ul>
                <LiTag><Span onClick={() => GuBunSet("codingEtc")}>4. 그외</Span></LiTag>
            </ul>
            <br/>
            <hr style={{marginLeft:"-4%"}}/>
            <ProjramMersDiv ref={elementRef}>
                {
                    CodingPracticeOpen()
                }
            </ProjramMersDiv>
        </div>
    )
}

export default ProgramMers;