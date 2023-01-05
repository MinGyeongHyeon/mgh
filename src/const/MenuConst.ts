import {PROJECT_MENU, SIDE_MENU , A_LINK} from "../vo/menuVo";

export const SideMenus : Array<SIDE_MENU> =  
[ 
    { name : "About" , path: "/mgh/"},
    { name : "Skils" , path:"/mgh/skils"},
    { name: "Project", path: "/mgh/project" },
    // { name: "Study", path: "/mgh/study" },
    { name: "Etc", path: "/mgh/etc"}
]

export const ProjectMenus : Array<PROJECT_MENU> =
[
    {name : "" , path:"", ImgPath:""}
]

export const Alink : Array<A_LINK> = 
[
    {href : "https://github.com/MinGyeongHyeon/" , target : "_blank"},
    {href : "mailto:rudgus1004@gmail.com"}
]