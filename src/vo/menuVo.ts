
export interface SIDE_MENU {
    name? : string,
    path : string
};

export interface MENU_LIST {
    menulist : Array<SIDE_MENU>
}

export interface A_LINK {
    href : string,
    target? : string,
    
}