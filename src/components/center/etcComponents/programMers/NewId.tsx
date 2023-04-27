import { CodeDiv } from "../../../../const/StyledConst";

const NewId = (): JSX.Element => {
    return (
        <>
            <h4>코딩테스트 연습 &#62; 2021 KAKAO BLIND RECRUITMENT &#62; 신규 아이디 추천
            </h4>
            <a href="https://school.programmers.co.kr/learn/courses/30/lessons/72410" target="blank" style={{ color: "blue" }}>https://school.programmers.co.kr/learn/courses/30/lessons/72410</a>
            <br />
            <br />
            <br />
            <h4>입출력 예</h4>
            <img src={process.env.PUBLIC_URL + "/imgs/newId.png"} alt="newId"></img>
            <br />
            <br />
            <h4>입출력 예 설명</h4>
            <img src={process.env.PUBLIC_URL + "/imgs/newId2.png"} alt="newId"></img>
            <br />
            <h4>나의 풀이</h4>

            <CodeDiv>
                <code>
                    <div className="colorscripter-code" style={{ color: '#f0f0f0', fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace !important', overflow: 'auto' }}>
                        <table className="colorscripter-code-table" style={{ margin: 0, padding: 0, border: 'none', borderRadius: '4px' }} cellSpacing={0} cellPadding={0}>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '6px 0', textAlign: 'left' }}>
                                        <div style={{ margin: 0, padding: 0, color: '#f0f0f0', fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace !important', lineHeight: '130%' }}>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}><span style={{ color: '#ff3399' }}>function</span>&nbsp;solution(new_id)&nbsp;{'{'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>var</span>&nbsp;answer&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#ffd500' }}>''</span>;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;answer&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;new_id.toLowerCase()</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.replace(<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>/</span>[^\w\<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>-</span>\.\_]<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>/</span>g,&nbsp;<span style={{ color: '#ffd500' }}>''</span>)</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.replace(<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>/</span>\.<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>+</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>/</span>g,<span style={{ color: '#ffd500' }}>'.'</span>)</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.replace(<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>/</span>^\.<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>/</span>g,<span style={{ color: '#ffd500' }}>''</span>)</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.replace(<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>/</span>\.$<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>/</span>g,<span style={{ color: '#ffd500' }}>''</span>)</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.replace(<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>/</span>^$<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>/</span>,<span style={{ color: '#ffd500' }}>'a'</span>);</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>if</span>(answer.<span style={{ color: '#4be6fa' }}>length</span>&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>&gt;</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#c10aff' }}>16</span>)&nbsp;answer&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;answer.<span style={{ color: '#4be6fa' }}>substring</span>(<span style={{ color: '#c10aff' }}>0</span>,<span style={{ color: '#c10aff' }}>15</span>).replace(<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>/</span>\.$<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>/</span>g,<span style={{ color: '#ffd500' }}>''</span>);</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>if</span>(answer.<span style={{ color: '#4be6fa' }}>length</span>&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>&lt;</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#c10aff' }}>2</span>){'{'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>for</span>(<span style={{ color: '#ff3399' }}>var</span>&nbsp;i&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;answer.<span style={{ color: '#4be6fa' }}>length</span>;&nbsp;i&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>&lt;</span>&nbsp;<span style={{ color: '#c10aff' }}>3</span>;&nbsp;i<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>+</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>+</span>){'{'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;answer&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>+</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;answer[(i<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>-</span><span style={{ color: '#c10aff' }}>1</span>)];</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>return</span>&nbsp;answer;</div>
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

export default NewId;