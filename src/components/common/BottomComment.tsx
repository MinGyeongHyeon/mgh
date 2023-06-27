
import {useRef , useEffect} from "react";

const BottomComment = (): JSX.Element =>{
    const commentsEl = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scriptEl = document.createElement("script");
        scriptEl.async = true;
        scriptEl.src = "https://utteranc.es/client.js";
        scriptEl.setAttribute("repo", "MinGyeongHyeon/mgh");
        scriptEl.setAttribute("issue-term", "pathname");
        scriptEl.setAttribute("theme", "github-light");
        scriptEl.setAttribute("crossorigin", "anonymous");
        commentsEl.current?.appendChild(scriptEl);
      });

    return (
        <div>
            <hr/>
            <div style={{fontSize:"13px",color:"rgba(92, 92, 92, 0.75)",marginLeft:"36%"}}>© 2023.Tsx Development </div>
            <div style={{fontSize:"15px",color:"rgba(92, 92, 92, 0.75)",marginLeft:"40%"}}>민경현</div>
            <div ref={commentsEl}></div>
        </div>
    )

}

export default BottomComment;