import './App.css';
import Sidebar from './components/common/Sidebar';
import styled from "styled-components";
import { CSSTransition , TransitionGroup} from 'react-transition-group'
import { Route, Switch ,useLocation } from 'react-router-dom';
import About from './components/component/About';
import {menus} from "./const/commonConst";

const Center = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;`

function App() {
  let location : any = useLocation();
  return (
    <Center>
    <Sidebar menulist = {menus}></Sidebar>

    <div style={{width:"190vh", height:"100vh", position: "fixed" , transform: "translateX(100px)"}}>
    <TransitionGroup className="transitions-wrapper">
      <CSSTransition key={location.pathname} timeout={300} classNames="right">
      <Switch location={location}>
        <Route exact path={menus[0].path}>
          <About></About>
        </Route>
        <Route path={menus[1].path}>
          <div className='position-tpy'>테스트 입니다만?</div>
        </Route>

      </Switch>
      </CSSTransition>
    </TransitionGroup>
    </div>
    </Center>
  );
}

export default App;
