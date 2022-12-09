import './App.css';
import Sidebar from './components/common/Sidebar';
import styled from "styled-components";
import { CSSTransition, SwitchTransition , TransitionGroup} from 'react-transition-group'
import { Route, Switch , NavLink,useLocation } from 'react-router-dom';
import Html from './components/component/Html';
import {menus} from "./const/commonConst";

const Center = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;`

function App() {
  let location : any = useLocation();
  return (
    <Center>
    <div style={{width:"202vh", height:"100vh",display: "flex"}}>
    <Sidebar menulist = {menus}></Sidebar>
    </div>

    <div style={{width:"190vh", height:"100vh", position: "fixed" , transform: "translateX(100px)"}}>
    <TransitionGroup className="transitions-wrapper">
      <CSSTransition key={location.pathname} timeout={300} classNames="right">
      <Switch location={location}>
        <Route exact path="/">
          <Html style={'absolute'}></Html>
        </Route>
        <Route path="/profile">
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
