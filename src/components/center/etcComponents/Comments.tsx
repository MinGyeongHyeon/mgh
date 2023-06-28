import {useRef , useEffect} from "react";

const Comments = () : JSX.Element => {

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
    return(
        <div>
            <p><h1>Comments</h1></p>
            <div ref={commentsEl}></div>
        </div>
    )
}

export default Comments;