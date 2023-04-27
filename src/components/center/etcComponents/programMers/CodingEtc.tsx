

const CodingEtc = () : JSX.Element => {
    return(
        <>
            <h4>그외 코딩테스트 126문제</h4>

            <img src={process.env.PUBLIC_URL + "/imgs/codingetc.png"} style={{width:"80%"}} alt="coding"></img>
            <br/>
            <br/>
            <h4>126 문제 코딩테스트 를 전부 보여드리기 힘들어 정답률이 낮은 상위 Top3 만 보여드립니다.</h4>
            <br/>
            <img src={process.env.PUBLIC_URL + "/imgs/codingetc2.png"} style={{width:"50%"}} alt="coding"></img>
        </>
    )
}

export default CodingEtc;