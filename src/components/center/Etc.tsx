import {CenterChildrenDiv, CenterDiv} from "../../const/StyledConst";
import styled from "styled-components";
import { useState } from "react";
import BottomComment from "../common/BottomComment";
import SidebarCode from "./etcComponents/SidebarCode";

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

const Etc = () : JSX.Element => {

    const [category , setCategory] = useState("");

    /**
     * 카테고리 클릭 시 아래 화면 변경 이벤트
     * @param categoryName 
     */
    const CategorySet = (categoryName : string) : void => {
        setCategory(categoryName);
    }

    /**
     * 렌더링 시 category 에 담겨있는 구분자에 따라 보여질 화면
     * @returns JSX.Element
     */
    const CategoryOpen = () : JSX.Element => {
        
        if(category == "side"){
            return <SidebarCode/>
        }else{
            return <div></div>
        }

    }

    return(
       <CenterDiv>
            <CenterChildrenDiv>
                <h1 className="title">Etc</h1>
                <div style={{fontSize:"14px"}}>여행 / 코드풀이 기타 등등</div>
                <div className="hr"></div>

                <ul style={{display:"flex",flexDirection:"column"}}>
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

                <hr/>

                {
                    CategoryOpen()
                }
                <BottomComment/>
            </CenterChildrenDiv>
       </CenterDiv>
    )
}

export default Etc;