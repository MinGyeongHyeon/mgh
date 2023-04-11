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
            <div>Event 객체를 변수로 받아 (e) 현재 마우스 위치 설정과 mousemove 이벤트 연결 한다. </div>
            <br />
            <CodeDiv>
                <code>
                    <div className="colorscripter-code" style={{ color: '#f0f0f0', fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace !important', overflow: 'auto' }}>
                        <table className="colorscripter-code-table" style={{ margin: 0, padding: 0, border: 'none', borderRadius: '4px' }} cellSpacing={0} cellPadding={0}>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '6px 0', textAlign: 'left' }}>
                                        <div style={{ margin: 0, padding: 0, color: '#f0f0f0', fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace !important', lineHeight: '130%' }}>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>let</span>&nbsp;screenx:&nbsp;number&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#c10aff' }}>0</span>;&nbsp;<span style={{ color: '#999999' }}>&#47;&#47;&nbsp;사이드바&nbsp;클릭시&nbsp;현재&nbsp;마우스&nbsp;위치&nbsp;넣기&nbsp;변수</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;<span style={{ color: '#999999' }}>&#47;&#42;&#42;&nbsp;&nbsp;</span></div>
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
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;parentRef.current.style.backgroundColor&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#ffd500' }}>"rgb(170,170,170)"</span>;&nbsp;<span style={{ color: '#999999' }}>&#47;&#47;&nbsp;사이드바&nbsp;를&nbsp;클릭하면&nbsp;뒷배경&nbsp;변경</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#999999' }}>&#47;&#47;사이드&nbsp;바에서&nbsp;마우스&nbsp;down&nbsp;or&nbsp;터치&nbsp;시&nbsp;이벤트&nbsp;연결&nbsp;</span></div>
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
            <div>Event 객체를 변수로 받아 (e) 클릭 시 마우스 위치와 Move시 마우스 위치를 계산하여 Sidebar translateX을 조정한다. </div>
            <br />
            <CodeDiv>
                <code>
                    <div className="colorscripter-code" style={{ color: '#f0f0f0', fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace !important', overflow: 'auto' }}>
                        <table className="colorscripter-code-table" style={{ margin: 0, padding: 0, border: 'none', borderRadius: '4px' }} cellSpacing={0} cellPadding={0}>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '6px 0', textAlign: 'left' }}>
                                        <div style={{ margin: 0, padding: 0, color: '#f0f0f0', fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace !important', lineHeight: '130%' }}>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}><span style={{ color: '#ff3399' }}>let</span>&nbsp;defaultWidth:&nbsp;number&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#c10aff' }}>0</span>;&nbsp;<span style={{ color: '#999999' }}>&#47;&#47;&nbsp;사이드바&nbsp;펼칠때&nbsp;기준이&nbsp;되는&nbsp;변수</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;<span style={{ color: '#999999' }}>&#47;&#42;&#42;&nbsp;&nbsp;</span></div>
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
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;defaultWidth&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>+</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;MoveX&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>-</span>&nbsp;screenx;&nbsp;<span style={{ color: '#999999' }}>&#47;&#47;&nbsp;오른쪽&nbsp;기준일시&nbsp;defaulSize&nbsp;+=&nbsp;(현재&nbsp;마우스&nbsp;위치&nbsp;-&nbsp;클릭&nbsp;했을때&nbsp;시점의&nbsp;마우스&nbsp;위치)</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>if</span>&nbsp;(defaultWidth&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>&gt;</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>-</span><span style={{ color: '#c10aff' }}>1</span>)&nbsp;{'{'}&nbsp;<span style={{ color: '#999999' }}>&#47;&#47;&nbsp;전부&nbsp;펼쳐졌으면&nbsp;더이상&nbsp;움직이지&nbsp;않음</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>return</span>;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SidePxMenuPxSet(defaultWidth,&nbsp;menupx);</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}&nbsp;<span style={{ color: '#ff3399' }}>else</span>&nbsp;{'{'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>return</span>;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
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
            <div>Sidebar Move 시 Sideber가 움직이는것처럼 보이도록 css 동적 수정 </div>
            <div>SideMoveListener() 에서 계속해서 호출 "translateX" 을 수정한다. (menuPx 은 Sidebar 안의 메뉴 List 위치 조정) </div>
            <br />
            <CodeDiv>
                <code>
                    <div className="colorscripter-code" style={{ color: '#f0f0f0', fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace !important', overflow: 'auto' }}>
                        <table className="colorscripter-code-table" style={{ margin: 0, padding: 0, border: 'none', borderRadius: '4px' }} cellSpacing={0} cellPadding={0}>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '6px 0', textAlign: 'left' }}>
                                        <div style={{ margin: 0, padding: 0, color: '#f0f0f0', fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace !important', lineHeight: '130%' }}>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;<span style={{ color: '#999999' }}>&#47;&#42;&#42;</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}><span style={{ color: '#999999' }}>&nbsp;&nbsp;&nbsp;*&nbsp;사이드바&nbsp;와&nbsp;menu&nbsp;위치&nbsp;조정&nbsp;함수</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}><span style={{ color: '#999999' }}>&nbsp;&nbsp;&nbsp;*&nbsp;@param&nbsp;sidePx&nbsp;(사이드바&nbsp;위치)</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}><span style={{ color: '#999999' }}>&nbsp;&nbsp;&nbsp;*&nbsp;@param&nbsp;menuPx&nbsp;(menu위치)</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}><span style={{ color: '#999999' }}>&nbsp;&nbsp;&nbsp;*/</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>const</span>&nbsp;SidePxMenuPxSet&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;(sidePx:&nbsp;number,&nbsp;menuPx:&nbsp;number&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#c10aff' }}>83.</span><span style={{ color: '#c10aff' }}>5</span>):&nbsp;<span style={{ color: '#ff3399' }}>void</span>&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>&gt;</span>&nbsp;{'{'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;childRef.current.style.transform&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#ffd500' }}>"translateX("</span>&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>+</span>&nbsp;sidePx&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>+</span>&nbsp;<span style={{ color: '#ffd500' }}>"px)"</span>;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>if</span>&nbsp;(<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>!</span>isDesktop)&nbsp;{'{'}&nbsp;<span style={{ color: '#999999' }}>&#47;&#47;&nbsp;모바일&nbsp;화면일시&nbsp;메뉴&nbsp;위치&nbsp;고정</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;menuPx&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#c10aff' }}>40</span>;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;menuRef.current.style.left&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;menuPx&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>+</span>&nbsp;<span style={{ color: '#ffd500' }}>'%'</span>;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>if</span>&nbsp;(menuPx&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#c10aff' }}>45</span>)&nbsp;{'{'}&nbsp;<span style={{ color: '#999999' }}>&#47;&#47;메뉴&nbsp;아이콘&nbsp;클릭시&nbsp;left&nbsp;설정</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;moveCheck&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#ffd500' }}>"left"</span>;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
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
            <div>ResizeEvent -&gt; 사용자가 브라우져 크기 변경시 현재 브라우저 크기의 맞게 Sidebar 위치 재조정 </div>
            <div>Sidebar Up 이벤트 시 현재 위치에 따른 접기 or 펼치기 및 CSS(애니메이션) 효과 넣기 이벤트 </div>
            <div>마우스 Move 후 클릭을 떼었을때 현재 사이드바의 기준으로 계산하여 전부 펼치기 or 초기 상태로 되돌리기</div>
            <div>"right" 기준이 오른쪽으로 펼친다는 의미 에서 Sidebar 가 접혀진 기준 으로 Sidebar 가 반이상 넘어오면 전부 펼치기 그게 아니라면 원상복귀 하도록 code 작성 </div>
            <div>"left" 기준은 "right" 기준의 반대로 code 작성</div>
            <br />
            <CodeDiv>
                <code>
                    <div className="colorscripter-code" style={{ color: '#f0f0f0', fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace !important', overflow: 'auto' }}>
                        <table className="colorscripter-code-table" style={{ margin: 0, padding: 0, border: 'none', borderRadius: '4px' }} cellSpacing={0} cellPadding={0}>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '6px 0', textAlign: 'left' }}>
                                        <div style={{ margin: 0, padding: 0, color: '#f0f0f0', fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace !important', lineHeight: '130%' }}>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>let</span>&nbsp;defaulSize:&nbsp;number&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;(<span style={{ color: '#c10aff' }}>2133</span>&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>-</span>&nbsp;<span style={{ color: '#4be6fa' }}>window</span>.innerWidth)&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>+</span>&nbsp;leftSize;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;<span style={{ color: '#999999' }}>&#47;&#42;&#42;&nbsp;&nbsp;</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}><span style={{ color: '#999999' }}>&nbsp;&nbsp;*&nbsp;브라우져&nbsp;사이즈&nbsp;변경시&nbsp;사이드바&nbsp;크기&nbsp;조절&nbsp;(전체화면&nbsp;시&nbsp;크기-&nbsp;사이즈변경&nbsp;시&nbsp;크기&nbsp;+&nbsp;전체화면&nbsp;기준&nbsp;사이드바&nbsp;위치)</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}><span style={{ color: '#999999' }}>&nbsp;&nbsp;*/</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>const</span>&nbsp;ResizeEvent&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;()&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>&gt;</span>&nbsp;{'{'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>let</span>&nbsp;numPx:&nbsp;number&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;SidebarLocation();</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;defaulSize&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;(<span style={{ color: '#c10aff' }}>2133</span>&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>-</span>&nbsp;<span style={{ color: '#4be6fa' }}>window</span>.innerWidth)&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>+</span>&nbsp;leftSize;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>if</span>&nbsp;(numPx&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>!</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#c10aff' }}>0</span>)&nbsp;{'{'}&nbsp;<span style={{ color: '#999999' }}>&#47;&#47;사이드바&nbsp;전체가&nbsp;펼쳐저있지&nbsp;않다면&nbsp;크기&nbsp;조정&nbsp;</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SidePxMenuPxSet(defaulSize);</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;{'}'}</div>
                                        </div>
                                        <div style={{ margin: 0, padding: 0, color: '#f0f0f0', fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace !important', lineHeight: '130%' }}>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;<span style={{ color: '#999999' }}>&#47;&#42;&#42;&nbsp;&nbsp;</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}><span style={{ color: '#999999' }}>&nbsp;&nbsp;*&nbsp;사이드바&nbsp;마우스&nbsp;드래그&nbsp;후&nbsp;현재&nbsp;위치에&nbsp;맞게&nbsp;사이드바&nbsp;조절</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}><span style={{ color: '#999999' }}>&nbsp;&nbsp;*/</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>const</span>&nbsp;SideMouseUp&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;():&nbsp;<span style={{ color: '#ff3399' }}>void</span>&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>&gt;</span>&nbsp;{'{'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;moveBoolean&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#c10aff' }}>false</span>;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>let</span>&nbsp;numPx:&nbsp;number&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;SidebarLocation();</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;childRef.current.style.transition&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#ffd500' }}>"transform&nbsp;500ms"</span>;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;menuRef.current.style.transition&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#ffd500' }}>"left&nbsp;500ms"</span>;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;parentRef.current.style.backgroundColor&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#ffd500' }}>"rgb(255,255,255)"</span>;&nbsp;<span style={{ color: '#999999' }}>&#47;&#47;&nbsp;뒷배경&nbsp;원상복귀</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>if</span>&nbsp;(moveCheck&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#ffd500' }}>"right"</span>)&nbsp;{'{'}&nbsp;<span style={{ color: '#999999' }}>&#47;&#47;&nbsp;접혀있을때의&nbsp;기준</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>if</span>&nbsp;(numPx&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>&gt;</span>&nbsp;defaulSize&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>/</span>&nbsp;<span style={{ color: '#c10aff' }}>1.</span><span style={{ color: '#c10aff' }}>2</span>)&nbsp;{'{'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#999999' }}>&#47;&#47;&nbsp;반&nbsp;이상&nbsp;넘어&nbsp;오면&nbsp;전부&nbsp;펼치기</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SidePxMenuPxSet(<span style={{ color: '#c10aff' }}>0</span>,&nbsp;<span style={{ color: '#c10aff' }}>45</span>);</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;moveCheck&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#ffd500' }}>"left"</span>;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}&nbsp;<span style={{ color: '#ff3399' }}>else</span>&nbsp;{'{'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#999999' }}>&#47;&#47;&nbsp;반&nbsp;미만&nbsp;으로&nbsp;오면&nbsp;원래&nbsp;상태로&nbsp;복귀</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SidePxMenuPxSet(defaulSize,&nbsp;<span style={{ color: '#c10aff' }}>83.</span><span style={{ color: '#c10aff' }}>5</span>);</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;moveCheck&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#ffd500' }}>"right"</span>;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}&nbsp;<span style={{ color: '#ff3399' }}>else</span>&nbsp;{'{'}&nbsp;<span style={{ color: '#999999' }}>&#47;&#47;&nbsp;전부&nbsp;펼쳐&nbsp;졌을때&nbsp;의&nbsp;기준</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>if</span>&nbsp;(numPx&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>&gt;</span>&nbsp;defaulSize&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>/</span>&nbsp;<span style={{ color: '#c10aff' }}>5</span>)&nbsp;{'{'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#999999' }}>&#47;&#47;&nbsp;전부&nbsp;펼치기</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SidePxMenuPxSet(<span style={{ color: '#c10aff' }}>0</span>,&nbsp;<span style={{ color: '#c10aff' }}>45</span>);</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;moveCheck&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#ffd500' }}>"left"</span>;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}&nbsp;<span style={{ color: '#ff3399' }}>else</span>&nbsp;{'{'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#999999' }}>&#47;&#47;&nbsp;초기&nbsp;상태로&nbsp;되돌리기</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SidePxMenuPxSet(defaulSize,&nbsp;<span style={{ color: '#c10aff' }}>83.</span><span style={{ color: '#c10aff' }}>5</span>);</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;moveCheck&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#ffd500' }}>"right"</span>;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#999999' }}>&#47;&#47;SideBar&nbsp;move&nbsp;이벤트&nbsp;삭제</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#4be6fa' }}>document</span>.removeEventListener(<span style={{ color: '#ffd500' }}>'mousemove'</span>,&nbsp;SideMoveListener);</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>if</span>&nbsp;(<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>!</span>isDesktop)&nbsp;<span style={{ color: '#4be6fa' }}>document</span>.removeEventListener(<span style={{ color: '#ffd500' }}>'touchmove'</span>,&nbsp;SideMoveListener);</div>
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
            <div>ResizeEvent or SideMouseUp 시 현재 Sidebar 위치 추적함수 </div>
            <div>Ref 으로 Sidebar transform (현재 위치)을 가져와 number 로 가공 후 return</div>
            <br />
            <CodeDiv>
                <code>
                    <div className="colorscripter-code" style={{ color: '#f0f0f0', fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace !important', overflow: 'auto' }}>
                        <table className="colorscripter-code-table" style={{ margin: 0, padding: 0, border: 'none', borderRadius: '4px' }} cellSpacing={0} cellPadding={0}>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '6px 0', textAlign: 'left' }}>
                                        <div style={{ margin: 0, padding: 0, color: '#f0f0f0', fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace !important', lineHeight: '130%' }}>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>let</span>&nbsp;moveCheck:&nbsp;string&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#ffd500' }}>"right"</span>;&nbsp;<span style={{ color: '#999999' }}>&#47;&#47;&nbsp;사이드바&nbsp;오른쪽&nbsp;왼쪽&nbsp;움직일&nbsp;기준&nbsp;변수</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;<span style={{ color: '#999999' }}>&#47;&#42;&#42;&nbsp;&nbsp;</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}><span style={{ color: '#999999' }}>&nbsp;&nbsp;*&nbsp;현재&nbsp;사이드바&nbsp;위치&nbsp;추적&nbsp;하는&nbsp;함수</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}><span style={{ color: '#999999' }}>&nbsp;&nbsp;*/</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>const</span>&nbsp;SidebarLocation&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;():&nbsp;number&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>&gt;</span>&nbsp;{'{'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>let</span>&nbsp;strPx:&nbsp;string&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;childRef.current.style.transform;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>let</span>&nbsp;<span style={{ color: '#4be6fa' }}>split</span>:&nbsp;string[]&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;strPx.<span style={{ color: '#4be6fa' }}>split</span>(<span style={{ color: '#ffd500' }}>"("</span>);</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>let</span>&nbsp;numPx:&nbsp;number&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#4be6fa' }}>Number</span>(<span style={{ color: '#4be6fa' }}>split</span>[<span style={{ color: '#c10aff' }}>1</span>].replace(<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>/</span>px\)<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>/</span>,&nbsp;<span style={{ color: '#ffd500' }}>""</span>));</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>return</span>&nbsp;numPx;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;{'}'}</div>
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

export default SidebarCode;