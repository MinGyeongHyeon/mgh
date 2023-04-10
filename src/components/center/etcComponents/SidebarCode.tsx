import styled from "styled-components";

const CodeDiv = styled.div`
    background-color : black;
    width : 50%
`

const SidebarCode = (): JSX.Element => {

    return (
        <>
            <div>styled-components 을 이용하여 Sidebar 최상위 컴포넌트를 생성하고</div>
            <div>아래에 Menu 컴포넌트를 생성한다. 그후 props 으로 전달받은 메뉴 List를 이용하여 메뉴를 생성한다.</div>
            <div>Menu List 안에는 name / path 가 담겨있다.</div>
            <br />
            <CodeDiv>
                <code>
                    <span className="lt">&lt;</span>
                    <span className="T">Side </span>
                    <span className="C">className</span>
                    <span>=</span>
                    <span className="S">'SideSlide Notdrag' </span>
                    <span className="C">ref</span>
                    <span>=</span>
                    <span className="I">&#123;</span>
                    <span className="C">menuRef</span>
                    <span className="I">&#125;</span>
                    <span className="lt">/&#62;</span>
                    <br />
                    <span className="lt">&nbsp;&nbsp;&lt;</span>
                    <span className="T">Menu</span>
                    <span className="lt">&#62;</span>
                    <br />
                    <span className="lt">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
                    <span className="T">Profile</span>
                    <span className="lt">/&#62;</span>
                    <br />
                    <span className="I">&nbsp;&nbsp;&nbsp;&nbsp;&#123;</span>
                    <br />
                    <span className="I">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;menus.</span>
                    <span className="M">map</span>
                    <span className="M">&#40;</span>
                    <span className="R">&#40;</span>
                    <span className="C">menu , index</span>
                    <span className="R">&#41;</span>
                    <span className="I"> =&#62; </span>
                    <span className="R">&#123;</span>
                    <br />
                    <span className="R">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return</span>
                    <span className="I">&nbsp;&#40;</span>
                    <br />
                    <span className="lt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
                    <span className="T">NavLink </span>
                    <span className="C">exact onClick</span>
                    <span>=</span>
                    <span className="M">&#123;</span>
                    <span className="R">&#40;&#41;</span>
                    <span className="I"> =&#62;</span>
                    <span className="M"> menuClick</span>
                    <span className="R">&#40;&#41;</span>
                    <span className="M">&#125;</span>
                    <br />
                    <span className="C">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className</span>
                    <span> = </span>
                    <span className="S">'Notdrag SideMenu' </span>

                    <br />
                    <span className="C">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to</span>
                    <span> = </span>
                    <span className="M">&#123;</span>
                    <span className="C">menu.path</span>
                    <span className="M">&#125;</span>
                    <br />
                    <span className="C">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key</span>
                    <span> = </span>
                    <span className="M">&#123;</span>
                    <span className="C">index</span>
                    <span className="M">&#125;</span>
                    <br />
                    <span className="lt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#62;</span>
                    <br />
                    <span className="M">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;</span>
                    <span className="C">menu.name</span>
                    <span className="M">&#125;</span>
                    <br />
                    <span className="lt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
                    <span className="T">NavLink </span>
                    <span className="lt">/&#62;</span>
                    <br />
                    <span className="I">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#41;</span>
                    <br />
                    <span className="R">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;</span>
                    <span className="M">&#41;</span>
                    <br />
                    <span className="I">&nbsp;&nbsp;&nbsp;&nbsp;&#125;</span>
                    <br />
                    <span className="lt">&nbsp;&nbsp;&lt;</span>
                    <span className="T">Menu</span>
                    <span className="lt">/&#62;</span>
                    <br />
                    <span className="lt">&lt;</span>
                    <span className="T">Side</span>
                    <span className="lt">/&#62;</span>
                </code>

            </CodeDiv>
            <br />
            <div>Sidebar 아무 영역을 클릭 시 CSS(애니메이션) 설정이 남아있으면 초기화 </div>
            <div>Event 객체를 변수로 받아 (e) 현재 마우스 위치 설정과 mousemove 이벤트 연결 </div>
            <br />
            <CodeDiv>
                <code>
                    <div className="colorscripter-code" style={{ color: '#f0f0f0', fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace !important', overflow: 'auto' }}>
                        <table className="colorscripter-code-table" style={{ margin: 0, padding: 0, border: 'none', borderRadius: '4px' }} cellSpacing={0} cellPadding={0}>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '6px 0', textAlign: 'left' }}>
                                        <div style={{ margin: 0, padding: 0, color: '#f0f0f0', fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace !important', lineHeight: '130%' }}>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>let</span>&nbsp;screenx:&nbsp;number&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#c10aff' }}>0</span>;&nbsp;<span style={{ color: '#999999' }}>//&nbsp;사이드바&nbsp;클릭시&nbsp;현재&nbsp;마우스&nbsp;위치&nbsp;넣기&nbsp;변수</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;<span style={{ color: '#999999' }}>/**&nbsp;&nbsp;</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}><span style={{ color: '#999999' }}>&nbsp;&nbsp;*&nbsp;마우스&nbsp;Down&nbsp;시&nbsp;이벤트&nbsp;연결&nbsp;및&nbsp;스타일&nbsp;변경&nbsp;함수</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}><span style={{ color: '#999999' }}>&nbsp;&nbsp;*/</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>const</span>&nbsp;SideMouseDown&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;(e:&nbsp;any):&nbsp;<span style={{ color: '#ff3399' }}>void</span>&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>&gt;</span>&nbsp;{'{'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>if</span>&nbsp;(isDesktop)&nbsp;{'{'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;screenx&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;e.screenX;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}&nbsp;<span style={{ color: '#ff3399' }}>else</span>&nbsp;{'{'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;screenx&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;e.changedTouches[<span style={{ color: '#c10aff' }}>0</span>].pageX;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;moveBoolean&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#ff3399' }}>true</span>;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;childRef.current.style.transition&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#ffd500' }}>"transform&nbsp;0ms"</span>;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;menuRef.current.style.transition&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#ffd500' }}>"left&nbsp;0ms"</span>;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;parentRef.current.style.backgroundColor&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#ffd500' }}>"rgb(170,170,170)"</span>;&nbsp;<span style={{ color: '#999999' }}>//&nbsp;사이드바&nbsp;를&nbsp;클릭하면&nbsp;뒷배경&nbsp;변경</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#999999' }}>//사이드&nbsp;바에서&nbsp;마우스&nbsp;down&nbsp;or&nbsp;터치&nbsp;시&nbsp;이벤트&nbsp;연결&nbsp;</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#4be6fa' }}>document</span>.<span style={{ color: '#4be6fa' }}>addEventListener</span>(<span style={{ color: '#ffd500' }}>'mousemove'</span>,&nbsp;SideMoveListener);</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#4be6fa' }}>document</span>.<span style={{ color: '#4be6fa' }}>addEventListener</span>(<span style={{ color: '#ffd500' }}>'touchmove'</span>,&nbsp;SideMoveListener);</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;{'}'}</div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </code>
            </CodeDiv>
            <br />
            <div>Sidebar 클릭후 Move 시 이동 이벤트 </div>
            <div>Event 객체를 변수로 받아 (e) 클릭 시 마우스 위치와 Move시 마우스 위치를 계산하여 Sidebar Width 조정 </div>
            <br />
            <CodeDiv>
                <code>
                    <div className="colorscripter-code" style={{ color: '#f0f0f0', fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace !important', overflow: 'auto' }}>
                        <table className="colorscripter-code-table" style={{ margin: 0, padding: 0, border: 'none', borderRadius: '4px' }} cellSpacing={0} cellPadding={0}>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '6px 0', textAlign: 'left' }}>
                                        <div style={{ margin: 0, padding: 0, color: '#f0f0f0', fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace !important', lineHeight: '130%' }}>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}><span style={{ color: '#ff3399' }}>let</span>&nbsp;defaultWidth:&nbsp;number&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#c10aff' }}>0</span>;&nbsp;<span style={{ color: '#999999' }}>//&nbsp;사이드바&nbsp;펼칠때&nbsp;기준이&nbsp;되는&nbsp;변수</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;<span style={{ color: '#999999' }}>/**&nbsp;&nbsp;</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}><span style={{ color: '#999999' }}>&nbsp;&nbsp;*&nbsp;마우스&nbsp;Down&nbsp;후&nbsp;이동시&nbsp;사이드바&nbsp;펼치기&nbsp;혹은&nbsp;접기&nbsp;함수&nbsp;(moveListener)</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}><span style={{ color: '#999999' }}>&nbsp;&nbsp;*/</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>const</span>&nbsp;SideMoveListener&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;(e:&nbsp;any):&nbsp;<span style={{ color: '#ff3399' }}>void</span>&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>&gt;</span>&nbsp;{'{'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>let</span>&nbsp;MoveX&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#c10aff' }}>0</span>;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>if</span>&nbsp;(moveBoolean)&nbsp;{'{'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>let</span>&nbsp;menupx&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#c10aff' }}>0</span>;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>if</span>&nbsp;(moveCheck&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#ffd500' }}>"right"</span>)&nbsp;{'{'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;defaultWidth&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;defaulSize;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;menupx&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#c10aff' }}>83.</span><span style={{ color: '#c10aff' }}>5</span>;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}&nbsp;<span style={{ color: '#ff3399' }}>else</span>&nbsp;{'{'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;defaultWidth&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#c10aff' }}>0</span>;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;menupx&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#c10aff' }}>45</span>;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>if</span>&nbsp;(isDesktop)&nbsp;{'{'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MoveX&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;e.screenX;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}&nbsp;<span style={{ color: '#ff3399' }}>else</span>&nbsp;{'{'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MoveX&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;e.changedTouches[<span style={{ color: '#c10aff' }}>0</span>].pageX;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;defaultWidth&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>+</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;MoveX&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>-</span>&nbsp;screenx;&nbsp;<span style={{ color: '#999999' }}>//&nbsp;오른쪽&nbsp;기준일시&nbsp;defaulSize&nbsp;+=&nbsp;(현재&nbsp;마우스&nbsp;위치&nbsp;-&nbsp;클릭&nbsp;했을때&nbsp;시점의&nbsp;마우스&nbsp;위치)</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>if</span>&nbsp;(defaultWidth&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>&gt;</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>-</span><span style={{ color: '#c10aff' }}>1</span>)&nbsp;{'{'}&nbsp;<span style={{ color: '#999999' }}>//&nbsp;전부&nbsp;펼쳐졌으면&nbsp;더이상&nbsp;움직이지&nbsp;않음</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>return</span>;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SidePxMenuPxSet(defaultWidth,&nbsp;menupx);</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}&nbsp;<span style={{ color: '#ff3399' }}>else</span>&nbsp;{'{'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>return</span>;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;{'}'}</div>
                                        </div>
                                        <div style={{ textAlign: 'right', marginTop: '-13px', marginRight: '5px', fontSize: '9px', fontStyle: 'italic' }}><a href="http://colorscripter.com/info#e" target="_blank" style={{ color: '#4f4f4ftext-decoration:none' }}>Colored by Color Scripter</a></div>
                                    </td>
                                    <td style={{ verticalAlign: 'bottom', padding: '0 2px 4px 0' }}><a href="http://colorscripter.com/info#e" target="_blank" style={{ textDecoration: 'none', color: 'white' }}><span style={{ fontSize: '9px', wordBreak: 'normal', backgroundColor: '#4f4f4f', color: 'white', borderRadius: '10px', padding: '1px' }}>cs</span></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </code>
            </CodeDiv>
        </>
    )
}

export default SidebarCode;