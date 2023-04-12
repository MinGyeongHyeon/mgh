import styled from "styled-components";

/**
 * 공용 Div (스크롤 용)
 */
export const CenterDiv = styled.div`
position : absolute;
margin-left: 12%;
width: 77.2vw;
height:99vh;
overflow:auto;
::-webkit-scrollbar {
    width: 5px;
}
::-webkit-scrollbar-track {
    background-color: transparent;
}
::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: gray;
}
::-webkit-scrollbar-button {
    width: 0;
    height: 0;
}
`;
/**
 * 공용 Div (스크롤 용)
 */
export const CenterChildrenDiv = styled.div`
    width : 100%;
    height : 90%;
    margin-top : 6%
`

/**
 * Etc Category Div
 */
export const CodeDiv = styled.div`
    background-color : black;
    width : 50%
`