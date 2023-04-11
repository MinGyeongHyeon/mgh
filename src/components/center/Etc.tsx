import { CenterChildrenDiv, CenterDiv } from "../../const/StyledConst";
import styled from "styled-components";
import BottomComment from "../common/BottomComment";
import SidebarCode from "./etcComponents/SidebarCode";
import React, { useState, useEffect, useRef } from 'react';

const LiTag = styled.li`
    float: left;
    list-style: disc;
    margin-left: 2%;
    width: 11rem;
    border-bottom-style: none;
    cursor: pointer;
    :hover{
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: rgb(108,108,108);
    }
`
const CategoryDiv = styled.div`
    opacity: 1;
    transform: scale(1);
    transition: opacity 300ms, transform 300ms;
`

const Etc = (): JSX.Element => {

    const [category, setCategory] = useState("side");

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
    const CategorySet = (categoryName: string): void => {
        if (category !== categoryName) {
            elementRef.current.style.opacity = "0"; // state가 변경 되기전 opacity 0 설정 (기존 Div hide)
            setTimeout(() => { //3초의 텀을 두고 실행 
                setCategory(categoryName);
            }, 300);
        }
    }

    /**
     * 렌더링 시 category 에 담겨있는 구분자에 따라 보여질 화면
     * @returns JSX.Element
     */
    const CategoryOpen = (): JSX.Element => {
        if (category == "side") {
            return <div><SidebarCode /></div>
        } else {
            return <div>이것은 테스트</div>
        }

    }

    return (
        <CenterDiv>
            <CenterChildrenDiv>
                <h1 className="title">Etc</h1>
                <div style={{ fontSize: "14px" }}>여행 / 코드풀이 기타 등등</div>
                <div className="hr"></div>

                <ul style={{ display: "flex", flexDirection: "column" }}>
                    <LiTag onClick={() => CategorySet("side")}>
                        <p>Sidebar Code</p>
                    </LiTag>
                    <LiTag onClick={() => CategorySet("top")}>
                        <p>Top Menu Code</p>
                    </LiTag>
                    <LiTag onClick={() => CategorySet("tour")}>
                        <p>여행 사진</p>
                    </LiTag>
                </ul>

                <hr />
                <CategoryDiv ref={elementRef}>
                    {
                        CategoryOpen()
                    }
                </CategoryDiv>
                <BottomComment />
            </CenterChildrenDiv>
        </CenterDiv>
    )
}

export default Etc;