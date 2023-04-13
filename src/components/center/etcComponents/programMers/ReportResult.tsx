import { CodeDiv } from "../../../../const/StyledConst";

const ReportResult = (): JSX.Element => {

    return (
        <>
            <h4>코딩테스트 연습 &#62; 2022 KAKAO BLIND RECRUITMENT &#62; 신고 결과 받기 </h4>
            <a href="https://school.programmers.co.kr/learn/courses/30/lessons/92334" target="blank" style={{ color: "blue" }}>https://school.programmers.co.kr/learn/courses/30/lessons/92334</a>
            <br />
            <br />
            <br />
            <h4>입출력 예</h4>
            <img src={process.env.PUBLIC_URL + "/imgs/report.png"} ></img>
            <br />
            <br />
            <h4>입출력 예 설명</h4>
            <img src={process.env.PUBLIC_URL + "/imgs/report2.png"} ></img>
            <br/>
            <h4>나의 풀이</h4>
            <CodeDiv>
                <code>
                    <div className="colorscripter-code" style={{ color: '#f0f0f0', fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace !important', overflow: 'auto' }}>
                        <table className="colorscripter-code-table" style={{ margin: 0, padding: 0, border: 'none', borderRadius: '4px' }} cellSpacing={0} cellPadding={0}>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '6px 0', textAlign: 'left' }}>
                                        <div style={{ margin: 0, padding: 0, color: '#f0f0f0', fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace !important', lineHeight: '130%' }}>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}><span style={{ color: '#ff3399' }}>function</span>&nbsp;solution(id_list,&nbsp;report,&nbsp;k)&nbsp;{'{'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>var</span>&nbsp;json&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;{'{'}{'}'};</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>var</span>&nbsp;jsonCopy&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;{'{'}{'}'};</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>var</span>&nbsp;array&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;[];</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>for</span>(<span style={{ color: '#ff3399' }}>var</span>&nbsp;i&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#c10aff' }}>0</span>;&nbsp;i&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>&lt;</span>&nbsp;report.<span style={{ color: '#4be6fa' }}>length</span>;&nbsp;i<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>+</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>+</span>){'{'}&nbsp;<span style={{ color: '#999999' }}>//&nbsp;reportId&nbsp;json&nbsp;객체에&nbsp;담기</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>var</span>&nbsp;[user_id&nbsp;,&nbsp;report_id]&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;report[i].<span style={{ color: '#4be6fa' }}>split</span>(<span style={{ color: '#ffd500' }}>"&nbsp;"</span>);</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array.push(user_id);</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>if</span>(json[report_id]&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>!</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#0086b3' }}>undefined</span>){'{'}&nbsp;<span style={{ color: '#999999' }}>//&nbsp;key&nbsp;:&nbsp;신고당한&nbsp;ID&nbsp;,&nbsp;value&nbsp;:&nbsp;신고한&nbsp;ID</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;json[report_id].push(user_id);</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}<span style={{ color: '#ff3399' }}>else</span>{'{'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;json[report_id]&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;array;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;[];</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;id_list.forEach((e)<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>&gt;</span>{'{'}&nbsp;<span style={{ color: '#999999' }}>//&nbsp;신고를&nbsp;안당했면&nbsp;빈&nbsp;배열&nbsp;삽입</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>if</span>(json[e]&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#0086b3' }}>undefined</span>)&nbsp;json[e]&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;[];</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;{'}'});</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>var</span>&nbsp;objkey&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#4be6fa' }}>Object</span>.keys(json);</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;objkey.forEach((e)<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>&gt;</span>&nbsp;{'{'}&nbsp;<span style={{ color: '#999999' }}>//&nbsp;신고자&nbsp;중복&nbsp;제거</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>var</span>&nbsp;<span style={{ color: '#ff3399' }}>from</span>&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;(<span style={{ color: '#ff3399' }}>new</span>&nbsp;Set([...json[e]]));</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;json[e]&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#4be6fa' }}>Array</span>.<span style={{ color: '#ff3399' }}>from</span>(<span style={{ color: '#ff3399' }}>from</span>);</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;{'}'});</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;jsonCopy&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;{'{'}...json{'}'};&nbsp;<span style={{ color: '#999999' }}>//객체&nbsp;깊은복사(Deep&nbsp;Copy)</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;objkey.forEach((e)<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>&gt;</span>&nbsp;{'{'}&nbsp;<span style={{ color: '#999999' }}>//신고당한&nbsp;횟수&nbsp;</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;json[e]&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;json[e].<span style={{ color: '#4be6fa' }}>length</span>;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;{'}'});&nbsp;&nbsp;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;objkey.forEach((e)<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>&gt;</span>{'{'}&nbsp;<span style={{ color: '#999999' }}>//&nbsp;계정&nbsp;정지시&nbsp;:&nbsp;true&nbsp;,&nbsp;아닐시&nbsp;:&nbsp;false</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>if</span>(json[e]&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>&gt;</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;k){'{'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;json[e]&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#ff3399' }}>true</span>;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}<span style={{ color: '#ff3399' }}>else</span>{'{'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;json[e]&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#c10aff' }}>false</span>;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;{'}'});</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;id_list.forEach((e,index)<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>&gt;</span>{'{'}&nbsp;<span style={{ color: '#999999' }}>//id_list&nbsp;만큼&nbsp;각&nbsp;배열&nbsp;index&nbsp;마다&nbsp;0으로&nbsp;초기화</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array[index]&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#c10aff' }}>0</span>;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;{'}'});</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;id_list.forEach((e)<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>&gt;</span>{'{'}&nbsp;<span style={{ color: '#999999' }}>//&nbsp;json&nbsp;객체&nbsp;안의&nbsp;신고자&nbsp;ID&nbsp;와&nbsp;array&nbsp;index&nbsp;비교후&nbsp;해당&nbsp;array&nbsp;index&nbsp;에&nbsp;1++;</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>if</span>(json[e]){'{'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;jsonCopy[e].forEach((b)<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>&gt;</span>{'{'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>var</span>&nbsp;<span style={{ color: '#4be6fa' }}>indexOf</span>&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;id_list.<span style={{ color: '#4be6fa' }}>indexOf</span>(b);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array[<span style={{ color: '#4be6fa' }}>indexOf</span>]&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>+</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#c10aff' }}>1</span>;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'});</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;{'}'});</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>return</span>&nbsp;array;</div>
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

export default ReportResult;