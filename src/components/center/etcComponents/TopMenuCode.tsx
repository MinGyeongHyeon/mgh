import { CodeDiv } from "../../../const/StyledConst";


const TopMenuCode = (): JSX.Element => {

    return (
        <>
            <div>TopMenu 최상위 컴포넌트를 생성하고</div>
            <div>아래에 props 으로 전달받은 메뉴 List를 이용하여 메뉴를 생성한다.</div>
            <div>Menu List 안에는 Sidebar 와 마찬가지로 name / path 가 담겨있다.</div>
            <br />
            <CodeDiv>
                <code>
                    <div style={{ overflow: 'auto' }}>
                        <div style={{ width: "190%" }}>
                            <span className="lt">&lt;</span>
                            <span className="T">TopMenu </span>
                            <span className="C">ref</span>
                            <span>=</span>
                            <span className="I">&#123;</span>
                            <span className="C">TopMenuRef</span>
                            <span className="I">&#125;</span>
                            <span className="C"> onMouseDown</span>
                            <span>=</span>
                            <span className="I">&#123;</span>
                            <span className="M">&#40;</span>
                            <span className="C">e</span>
                            <span className="M">&#41;</span>
                            <span className="I"> =</span>
                            <span className="I">&#62;</span>
                            <span className="M"> TopMenuDwon</span>
                            <span className="M">&#40;</span>
                            <span className="C">e</span>
                            <span className="M">&#41;</span>
                            <span className="I">&#125;</span>

                            <span className="C"> onMouseUp</span>
                            <span>=</span>
                            <span className="I">&#123;</span>
                            <span className="M">&#40;</span>
                            <span className="M">&#41;</span>
                            <span className="I"> =</span>
                            <span className="I">&#62;</span>
                            <span className="M"> TopMenuUp</span>
                            <span className="M">&#40;</span>
                            <span className="M">&#41;</span>
                            <span className="I">&#125;</span>

                            <span className="C"> style</span>
                            <span>=</span>
                            <span className="I">&#123;</span>
                            <span className="M">&#123;</span>
                            <span className="C"> position:</span>
                            <span className="S"> "fixed"</span>
                            <span className="I">&#125;</span>
                            <span className="lt">&#62;</span>

                            <br />
                            <span className="lt">&nbsp;&nbsp;&lt;</span>
                            <span className="T">AiOutlineMenu</span>
                            <span className="C"> className</span>
                            <span>=</span>
                            <span className="S">"menuIcon"</span>
                            <span className="C"> onClick</span>
                            <span>=</span>
                            <span className="I">&#123;</span>
                            <span className="M">&#40;</span>
                            <span className="M">&#41;</span>
                            <span className="I"> =</span>
                            <span className="I">&#62;</span>
                            <span className="M"> SidePxMenuPxSet</span>
                            <span className="M">&#40;</span>
                            <span className="">0,45</span>
                            <span className="M">&#41;</span>
                            <span className="I">&#125;</span>
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
                            <span className="C">exact </span>
                            <span className="C"> className</span>
                            <span> = </span>
                            <span className="S">'TopMenu' </span>

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
                            <span className="I">&nbsp;&nbsp;&nbsp;&nbsp;&#123;</span>
                            <br />
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;!</span>
                            <span className="I">pin</span>
                            <span>&nbsp;?</span>
                            <span className="lt">&nbsp;&lt;</span>
                            <span className="T">AiFillPushpin</span>
                            <span className="C"> className</span>
                            <span> = </span>
                            <span className="S">'pinIcon' </span>
                            <span className="C"> onClick</span>
                            <span>=</span>
                            <span className="I">&#123;</span>
                            <span className="M">&#40;</span>
                            <span className="M">&#41;</span>
                            <span className="I"> =</span>
                            <span className="I">&#62;</span>
                            <span className="M"> setPin</span>
                            <span className="M">&#40;</span>
                            <span className="I">true</span>
                            <span className="M">&#41;</span>
                            <span className="I">&#125;</span>
                            <span className="lt">/&#62;</span>
                            <span>&nbsp;:</span>
                            <span className="lt">&nbsp;&lt;</span>
                            <span className="T">AiOutlinePushpin</span>
                            <span className="C"> className</span>
                            <span> = </span>
                            <span className="S">'pinIcon' </span>
                            <span className="C"> onClick</span>
                            <span>=</span>
                            <span className="I">&#123;</span>
                            <span className="M">&#40;</span>
                            <span className="M">&#41;</span>
                            <span className="I"> =</span>
                            <span className="I">&#62;</span>
                            <span className="M"> setPin</span>
                            <span className="M">&#40;</span>
                            <span className="I">false</span>
                            <span className="M">&#41;</span>
                            <span className="I">&#125;</span>
                            <span className="lt">/&#62;</span>
                            <br />
                            <span className="I">&nbsp;&nbsp;&nbsp;&nbsp;&#125;</span>
                            <br />
                            <span className="lt">&lt;</span>
                            <span className="T">TopMenu</span>
                            <span className="lt">/&#62;</span>
                            <br />
                        </div>
                    </div>
                </code>
            </CodeDiv>
            <br />
            <div>TopMenu 클릭 시 현재 마우스 커서 X,Y 위치를 계산</div>
            <div>커서 위치 계산후 useState 에 담아둔 pin 값이 true 면 MoveEvent 를 연결 한다.</div>
            <br />
            <CodeDiv>
                <code>
                    <div className="colorscripter-code" style={{ color: '#f0f0f0', fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace !important', overflow: 'auto' }}>
                        <table className="colorscripter-code-table" style={{ margin: 0, padding: 0, border: 'none', borderRadius: '4px' }} cellSpacing={0} cellPadding={0}>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '6px 0', textAlign: 'left' }}>
                                        <div style={{ margin: 0, padding: 0, color: '#f0f0f0', fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace !important', lineHeight: '130%' }}>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>let</span>&nbsp;prevPosX:&nbsp;number&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#c10aff' }}>0</span>;&nbsp;<span style={{ color: '#999999' }}>&#47;&#47;&nbsp;마우스&nbsp;클릭시&nbsp;현재&nbsp;커서&nbsp;x위치</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>let</span>&nbsp;prevPosY:&nbsp;number&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;<span style={{ color: '#c10aff' }}>0</span>;&nbsp;<span style={{ color: '#999999' }}>&#47;&#47;&nbsp;마우스&nbsp;클릭시&nbsp;현재&nbsp;커서&nbsp;y위치</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;<span style={{ color: '#999999' }}>&#47;&#42;&#42;</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}><span style={{ color: '#999999' }}>&nbsp;&nbsp;&nbsp;*&nbsp;TopMenu&nbsp;에서&nbsp;클릭시&nbsp;현재&nbsp;마우스위치&nbsp;설정과&nbsp;move&nbsp;이벤트&nbsp;연결&nbsp;함수</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}><span style={{ color: '#999999' }}>&nbsp;&nbsp;&nbsp;*&nbsp;@param&nbsp;e&nbsp;(MouseEvent)</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}><span style={{ color: '#999999' }}>&nbsp;&nbsp;&nbsp;*/</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>const</span>&nbsp;TopMenuDown&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;(e:&nbsp;React.MouseEvent):&nbsp;<span style={{ color: '#ff3399' }}>void</span>&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>&gt;</span>&nbsp;{'{'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;prevPosX&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;e.clientX;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;prevPosY&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;e.clientY;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>if</span>&nbsp;(pin)&nbsp;{'{'}&nbsp;<span style={{ color: '#999999' }}>&#47;&#47;&nbsp;마우스&nbsp;Down&nbsp;시&nbsp;move&nbsp;이벤트&nbsp;연결</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#4be6fa' }}>document</span>.<span style={{ color: '#4be6fa' }}>addEventListener</span>(<span style={{ color: '#ffd500' }}>"mousemove"</span>,&nbsp;TopMenuMove);</div>
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
            <div>TopMenuMove Event -&#62; useState 에 담겨있는 pin 값이 false 라면 return 하고 true 라면</div>
            <div>Move 시 TopMenubar 를 원하는 위치에 놓을수 있도록 </div>
            <div>클릭 시 커서 좌표-Move시 커서 좌표 를 계산하여 TopMenubar 의 left 와 top 를 조정한다. </div>
            <div>TopMenuUp Event -&#62; 위치조정 후 MouseUp 시 Move Event 를 삭제한다.</div>
            <br />
            <CodeDiv>
                <code>
                    <div className="colorscripter-code" style={{ color: '#f0f0f0', fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace !important', overflow: 'auto' }}>
                        <table className="colorscripter-code-table" style={{ margin: 0, padding: 0, border: 'none', borderRadius: '4px' }} cellSpacing={0} cellPadding={0}>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '6px 0', textAlign: 'left' }}>
                                        <div style={{ margin: 0, padding: 0, color: '#f0f0f0', fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace !important', lineHeight: '130%' }}>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;<span style={{ color: '#999999' }}>&#47;&#42;&#42;</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}><span style={{ color: '#999999' }}>&nbsp;&nbsp;&nbsp;*&nbsp;TopMenu&nbsp;에서&nbsp;클릭후&nbsp;드래그시&nbsp;이동&nbsp;되는&nbsp;함수</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}><span style={{ color: '#999999' }}>&nbsp;&nbsp;&nbsp;*&nbsp;@param&nbsp;e&nbsp;(MouseEvent)</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}><span style={{ color: '#999999' }}>&nbsp;&nbsp;&nbsp;*/</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>const</span>&nbsp;TopMenuMove&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;(e:&nbsp;any):&nbsp;<span style={{ color: '#ff3399' }}>void</span>&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>&gt;</span>&nbsp;{'{'}&nbsp;<span style={{ color: '#999999' }}>&#47;&#47;&nbsp;마우스&nbsp;Down&nbsp;상태에서&nbsp;이동시&nbsp;해당&nbsp;메뉴&nbsp;이동</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>if</span>&nbsp;(<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>!</span>pin)&nbsp;<span style={{ color: '#ff3399' }}>return</span>;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>const</span>&nbsp;posX:&nbsp;number&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;prevPosX&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>-</span>&nbsp;e.clientX;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>const</span>&nbsp;posY:&nbsp;number&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;prevPosY&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>-</span>&nbsp;e.clientY;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;prevPosX&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;e.clientX;&nbsp;<span style={{ color: '#999999' }}>&#47;&#47;현재&nbsp;커서&nbsp;위치&nbsp;재설정</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;prevPosY&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;e.clientY;&nbsp;<span style={{ color: '#999999' }}>&#47;&#47;현재&nbsp;커서&nbsp;위치&nbsp;재설정</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;TopMenuRef.current.style.left&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;(TopMenuRef.current.offsetLeft&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>-</span>&nbsp;posX)&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>+</span>&nbsp;<span style={{ color: '#ffd500' }}>"px"</span>;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;TopMenuRef.current.style.top&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;(TopMenuRef.current.offsetTop&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>-</span>&nbsp;posY)&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>+</span>&nbsp;<span style={{ color: '#ffd500' }}>"px"</span>;</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;{'}'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;<span style={{ color: '#999999' }}>&#47;&#42;&#42;</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}><span style={{ color: '#999999' }}>&nbsp;&nbsp;&nbsp;*&nbsp;TopMenu&nbsp;에서&nbsp;마우스&nbsp;Up&nbsp;시&nbsp;move&nbsp;이벤트&nbsp;연결&nbsp;해제&nbsp;함수</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}><span style={{ color: '#999999' }}>&nbsp;&nbsp;&nbsp;*/</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;<span style={{ color: '#ff3399' }}>const</span>&nbsp;TopMenuUp&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span>&nbsp;():&nbsp;<span style={{ color: '#ff3399' }}>void</span>&nbsp;<span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>=</span><span style={{ color: '#aaffaa' }} /><span style={{ color: '#ff3399' }}>&gt;</span>&nbsp;{'{'}&nbsp;<span style={{ color: '#999999' }}>&#47;&#47;&nbsp;마우스&nbsp;Up&nbsp;시&nbsp;move&nbsp;이벤트&nbsp;삭제</span></div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#4be6fa' }}>document</span>.removeEventListener(<span style={{ color: '#ffd500' }}>"mousemove"</span>,&nbsp;TopMenuMove);</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;&nbsp;{'}'}</div>
                                            <div style={{ padding: '0 6px', whiteSpace: 'pre', lineHeight: '130%' }}>&nbsp;</div>
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

export default TopMenuCode;