import './App.css';
import Sidebar from './components/common/Sidebar';
import styled from "styled-components";
import { CSSTransition , TransitionGroup} from 'react-transition-group'
import { Route, Switch ,useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import About from './components/centercomponents/About';
import Project from './components/centercomponents/Project';
import {ProjectMenus, SideMenus} from "./const/MenuConst";
import Skils from './components/centercomponents/Skils';
import MobilSidebar from './components/common/MobilSidebar';

const Center = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;`

function App() {
  let location : any = useLocation();
  const isDesktop = useMediaQuery({query: "(min-width: 850px)" });
  
  return (
    <Center>
    {
     isDesktop ? <Sidebar menulist = {SideMenus}></Sidebar> : <MobilSidebar menulist = {SideMenus}></MobilSidebar>
    }
    <div style={{width:"190vh", height:"100vh", position: "fixed" , transform: "translateX(100px)"}}>
    <TransitionGroup className="transitions-wrapper">
      <CSSTransition key={location.pathname} timeout={300} classNames="center">
      <Switch location={location}>
        <Route exact path={SideMenus[0].path}>
          <About></About>
        </Route>
        <Route path={SideMenus[1].path}>
          <Skils></Skils>
        </Route>
        <Route path={SideMenus[2].path}>
          <Project menulist = {ProjectMenus}></Project>
        </Route>
      </Switch>
      </CSSTransition>
    </TransitionGroup>
    </div>
    </Center>
  );
}

export default App;
