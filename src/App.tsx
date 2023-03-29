import './App.css';
import Sidebar from './components/common/Sidebar';
import styled from "styled-components";
import { CSSTransition , TransitionGroup} from 'react-transition-group'
import { Route, Switch ,useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import About from './components/center/About';
import Project from './components/center/Project';
import {SideMenus} from "./const/MenuConst";
import {ProjectMenus} from "./const/ProjectConst";
import Skils from './components/center/Skils';
import MobilSidebar from './components/common/MobilSidebar';
import Etc from './components/center/Etc';

const Center = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  `
  

function App() {
  let location : any = useLocation();
  const isDesktop : Boolean = useMediaQuery({query: "(min-width: 850px)" });
  
  return (
    <Center>
    <Sidebar menulist = {SideMenus}></Sidebar>
    {/* {
     isDesktop ? <Sidebar menulist = {SideMenus}></Sidebar> : <MobilSidebar menulist = {SideMenus}></MobilSidebar>
    } */}
    {/* PC 환경과 모바일 환경에 따른 style 변경 */}
    <div style={isDesktop?{width:"70vw", height:"100vh", position: "fixed", transform: "translateX(100px)"}:{width:"100vw",height:"100vh",position: "fixed"}}>
    <TransitionGroup className="transitions-wrapper">
      <CSSTransition key={location.pathname} timeout={300} classNames="center">
      <Switch location={location}>
        <Route exact path={SideMenus[0].path}>
          <About/>
        </Route>
        <Route path={SideMenus[1].path}>
          <Skils/>
        </Route>
        <Route path={SideMenus[2].path}>
          <Project projectList = {ProjectMenus}/>
        </Route>
        <Route path={SideMenus[3].path}>
          <Etc/>
        </Route>
      </Switch>
      </CSSTransition>
    </TransitionGroup>
    </div>
    </Center>
    
  );
}

export default App;
