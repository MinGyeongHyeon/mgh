import { CodeDiv } from "../../../../const/StyledConst";

const FinishRunner = (): JSX.Element => {

    return (
        <>
            <h4>코딩테스트 연습 &#62; 해시 &#62; 완주하지 못한 선수 </h4>
            <a href="https://school.programmers.co.kr/learn/courses/30/lessons/42576" target="blank" style={{ color: "blue" }}>https://school.programmers.co.kr/learn/courses/30/lessons/42576</a>
            <br />
            <br />
            <br />
            <h4>입출력 예</h4>
            <img src={process.env.PUBLIC_URL + "/imgs/finish.png"} alt="finish"></img>
            <br />
            <br />
            <h4>입출력 예 설명</h4>
            <img src={process.env.PUBLIC_URL + "/imgs/finish2.png"} alt="finish"></img>
            <br />
            <h4>나의 풀이</h4>
            <CodeDiv>
                <code>
                    <div className="colorscripter-code" style={{ color: '#f0f0f0', fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace !important', overflow: 'auto' }}>
                        <table className="colorscripter-code-table" style={{ margin: 0, padding: 0, border: 'none',borderRadius: '4px' }} cellSpacing={0} cellPadding={0}>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '6px 0', textAlign: 'left' }}>
                                        <div style={{ margin: 0, padding: 0, color: '#f0f0f0', fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace !important', lineHeight: '130%' }}>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}><span style={{ color: '#ff3399' }}>function</span>&nbsp;solution(participant,&nbsp;completion)&nbsp;{'{'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;participant.sort();</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;completion.sort();</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>var</span>&nbsp;string&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#ffd500' }}>''</span>;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>for</span>(<span style={{ color: '#ff3399' }}>var</span>&nbsp;i&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#c10aff' }}>0</span>&nbsp;;&nbsp;i&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>&lt;</span>&nbsp;participant.<span style={{ color: '#4be6fa' }}>length</span>;&nbsp;i<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>+</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>+</span>){'{'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>if</span>(participant[i]&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>!</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;completion[i]){'{'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;participant[i];</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>break</span>;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>return</span>&nbsp;string;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>{'}'}</div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </code>
            </CodeDiv>

        </>
    )
}

export default FinishRunner;