import styled from "styled-components";

export const CenterDiv = styled.div`
position : absolute;
margin-left: 12%;
width: 77.7vw;
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

export const CenterChildrenDiv = styled.div`
    width : 100%;
    height : 100%;
    margin-top : 6%
`