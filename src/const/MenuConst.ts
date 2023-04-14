import { SIDE_MENU , A_LINK} from "../vo/menuVo";

export const SideMenus : Array<SIDE_MENU> =  
[ 
    { name : "About" , path: "/mgh/"},
    { name : "Skils" , path:"/mgh/skils"},
    { name: "Project", path: "/mgh/project" },
    // { name: "Study", path: "/mgh/study" },
    { name: "Etc", path: "/mgh/etc"}
]

export const Alink : Array<A_LINK> = 
[
    {href : "https://github.com/MinGyeongHyeon/" , target : "_blank"},
    {href : "mailto:rudgus1004@gmail.com"}
]

type Tour = {
    path : string
}

export const JpTour : Array<Tour> =
[
    { path: "/imgs/tour/Jp/Jp1.jpg" }
    ,{ path: "/imgs/tour/Jp/Jp3.jpg" }
    ,{ path: "/imgs/tour/Jp/Jp4.jpg" }
    ,{ path: "/imgs/tour/Jp/Jp5.jpg" }
    ,{ path: "/imgs/tour/Jp/Jp6.jpg" }
    ,{ path: "/imgs/tour/Jp/Jp7.jpg" }
]

export const CjTour : Array<Tour> =
[
    { path: "/imgs/tour/Cju/Cj1.jpg" }
    ,{ path: "/imgs/tour/Cju/Cj3.jpg" }
    ,{ path: "/imgs/tour/Cju/Cj4.jpg" }
    ,{ path: "/imgs/tour/Cju/Cj5.jpg" }
    ,{ path: "/imgs/tour/Cju/Cj6.jpg" }
    ,{ path: "/imgs/tour/Cju/Cj7.jpg" }
]
