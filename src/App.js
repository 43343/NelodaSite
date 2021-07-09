import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './neloda.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dashboard from "./dashboard/dashboard.js";
import Commands from "./commands.js";
import Documentation from "./documentation.js";
import Premium from "./premium.js";
import Home from "./Home.js";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {getUserDetails, getGuilds, getNoGuilds} from "./utils/api"

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    backgroundColor:"#282a2c",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const useStyles = makeStyles({
     list: {
       width: 250,
       backgroundColor:"#282c34",
     },
     fullList: {
       width: 'auto',
       backgroundColor:"#282c34",
     },
   });

function App({history}) {
     const classes = useStyles();
     const [anchorElSelectedServer, setAnchorElSelectedServer] = React.useState(null);
     const [anchorElUser, setAnchorElUser] = React.useState(null);
     const [appHeaderLogo, setAppHeaderLogo] = React.useState( <img src={logo} className="App-logo-top" alt="logo" />)
     const [disabledSelected, setDisabledSelected] = React.useState(true);
     const [disabledDashboardMobile, setDisabledDashboardMobile] = React.useState(false);
     const [user, setUser] = React.useState(null);
     const [loading, setLoading] = React.useState(true);
     const [guilds, setGuilds] = React.useState([]);
     const [noGuilds, setNoGuilds] = React.useState([]);
     let windowAuth;

     React.useEffect(() =>{
       getUserDetails().then(({data}) =>{
         setUser(data);
         console.log(data);
         setLoading(false);
         setDisabledSelected(false);
         return getGuilds()
       }).then(({data}) => {
         console.log(data);
         setGuilds(data);
         return getNoGuilds()
       }).then(({data}) => {
         console.log(data);
         setNoGuilds(data);
       }).catch((err) => {
         console.log(err);
         setLoading(false);
        })
     })

  const login = () => {
    windowAuth = window.open("http://localhost:3001/api/auth/discord","windowAuth","resizable=yes,scrollbars=yes,status=yes,width=500,height=650");
    console.log(guilds);
  }
  const addToDiscord = (serverID) => {
    windowAuth = window.open("https://discord.com/api/oauth2/authorize?client_id=794272475780350023&scope=bot&permissions=1&guild_id=" + serverID,"windowAuth","resizable=yes,scrollbars=yes,status=yes,width=500,height=650");
  }
  const handleClickSelectedServer = (event) => {
    setAnchorElSelectedServer(event.currentTarget);
  };

  const handleCloseSelectedServer = () => {
    setAnchorElSelectedServer(null);
  };
  const handleClickUser = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUser = () => {
    setAnchorElUser(null);
  };
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [selectedServer, setSelectedServer] = React.useState("ВЫБРАТЬ СЕРВЕР");


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
     const list = (anchor) => (
          <div
            className={clsx(classes.list, {
              [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
          >
            { disabledDashboardMobile === true ?
             <List>
                <a href="/dashboard/main"><button className="Dashboard-button" ><FontAwesomeIcon icon={["fas", "sliders-h"]} color="#404349" /> ОСНОВНОЕ</button></a>
            <a href="/dashboard/quiz"><button className="Dashboard-button"><FontAwesomeIcon icon={["fas", "question"]} color="#404349" /> ВИКТОРИНА</button></a>
            <a href="/dashboard/levels"><button className="Dashboard-button"><FontAwesomeIcon icon={["fas", "chart-bar"]} color="#404349" /> УРОВНИ</button></a>
            <a href="/dashboard/commands"><button className="Dashboard-button"><FontAwesomeIcon icon={["fas", "terminal"]} color="#404349" /> КОММАНДЫ</button></a>
            <a href="/dashboard/customcommands"><button className="Dashboard-button-custom">ПОЛЬЗОВАТЕЛЬСКИЕ КОМАНДЫ</button></a>
            </List> : undefined}
            <Divider/> 
            <List>
            <Link to="/documentation"><button className="Dashboard-button" ><FontAwesomeIcon icon={["fas", "book"]} color="#404349" /> ДОКУМЕНТАЦИЯ</button></Link>
            <Link to="/premium"><button className="Dashboard-button" ><FontAwesomeIcon icon={"fas", "heart"} color="#404349" /> ПРЕМИУМ</button></Link>
            <Link to="/commands"><button className="Dashboard-button" ><FontAwesomeIcon icon={["fas", "terminal"]} color="#404349" /> КОММАНДЫ</button></Link>
            <button className="Dashboard-button"><FontAwesomeIcon icon={["fab", "discord"]} color="#404349" /> ТЕХПОДДЕРЖКА</button>
            <Link to="/"><button className="Dashboard-button" >ГЛАВНАЯ</button></Link>
            <div className="server-selected-menu-mobile"> ВЫБРАТЬ СЕРВЕР</div>
            <Link to="/dashboard/main" style={{textDecoration:"none"}}>
          <div onClick={() => {
            setDisabledDashboardMobile(true);
            setAnchorElSelectedServer(null);
            setSelectedServer(<div  className="server-selected-current">
            <div className="server-selected-icon">
            <img src={logo} className="server-selected-icon-options-current" alt="logo" />
            </div>
            <div className="server-selected-name-current">
              NELODA
            </div>
            <div className="server-selected-add-or-settings-current">
            <FontAwesomeIcon icon={["fas", "sort-down"]} />
            </div>
          </div>)
          }} className="server-selected-block">
          <div className="server-selected-icon">
          <img src={logo} className="server-selected-icon-options" alt="logo" />
          </div>
          <div className="server-selected-name">
            NELODA
          </div>
          <div className="server-selected-add-or-settings">
          <FontAwesomeIcon icon={["fas", "wrench"]} />
          </div>
        </div>
        </Link>
        <Divider />
        <div className="server-selected-block-no" style={{background:"red"}}>
          <div className="server-selected-icon">
          <img src={logo} className="server-selected-icon-options" alt="logo" />
          </div>
          <div className="server-selected-name">
            NELODA
          </div>
          <div className="server-selected-add-or-settings">
          <FontAwesomeIcon icon={["fas", "plus"]} />
          </div>
        </div>
            </List>
          </div>
        );
  return !loading && (
    <Router>
         <div style={{backgroundColor:"#282c34"}}>
      
        <React.Fragment key={"left"}>
          <Drawer  anchor="left" open={state["left"]} onClose={toggleDrawer("left", false)}>
            {list("left")}
          </Drawer>
        </React.Fragment>
      
    </div>
    <div className="App">
      <div className="App-header-top"> 
      <div className="App-header-top-left">
           {document.location.pathname === "/" ? <img src={logo} className="App-logo-top" alt="logo" /> : <Link to="/" className="App-logo-top-link"><div>NEL<img src={logo} className="App-logo-top" alt="logo" />DA</div></Link>}
           <button className="button-open-menu" onClick={toggleDrawer("left", true)}><MenuIcon style={{color:"white"}}/></button>
      </div>
      <div className="App-header-top-right">
      <Link to="/premium" ><button className="Donate"><FontAwesomeIcon icon={["fas", "heart"]} /></button></Link>
      <Link to="/documentation"><button className="Documentation"><FontAwesomeIcon icon={["fas", "book"]} /></button></Link>
      <Link to="/commands"><button className="Commands"><FontAwesomeIcon icon={["fas", "terminal"]} /></button></Link>
      <button className="Support" onClick={() => window.open("http://discord.gg/n4qnKesupP")}><FontAwesomeIcon icon={["fab", "discord"]} /></button>
      <button className="server-selected"  onClick={handleClickSelectedServer} disabled={disabledSelected}>{selectedServer}</button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorElSelectedServer}
        keepMounted
        open={Boolean(anchorElSelectedServer)}
        onClose={handleCloseSelectedServer}
      >
        {guilds.map((guild) => {
          return(<Link to="/dashboard/main"><div className="server-selected-block-no" >
          <div className="server-selected-icon">
          <img src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} className="server-selected-icon-options" alt="logo" />
          </div>
          <div className="server-selected-name" >
            {guild.name}
          </div>
          <div className="server-selected-add-or-settings">
          <FontAwesomeIcon icon={["fas", "plus"]} />
          </div>
        </div></Link>)
        })}
        <Divider />
        {noGuilds.map((guild) => {
        return(<div className="server-selected-block-no"  style={{background:"red"}}>
          <div className="server-selected-icon">
          <img src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} className="server-selected-icon-options" alt="logo" />
          </div>
          <div className="server-selected-name">
            {guild.name}
          </div>
          <div className="server-selected-add-or-settings">
          <FontAwesomeIcon icon={["fas", "plus"]} />
          </div>
        </div>)
        })}
      </StyledMenu>
      {user ? <button className="Login" onClick={handleClickUser}><div  className="server-selected-current" >
            <div className="server-selected-icon">
            <img src={`https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}.png`} className="server-selected-icon-options-current" alt="logo" />
            </div>
            <div className="server-selected-name-current">
            {user.discordTag}
            </div>
            <div className="server-selected-add-or-settings-current">
            <FontAwesomeIcon icon={["fas", "sort-down"]} />
            </div>
        </div></button> : <button className="Login" onClick={login}><FontAwesomeIcon icon={["fas", "sign-in-alt"]} />  ВОЙТИ</button> 
      }
          <StyledMenu
        id="customized-menu"
        anchorEl={anchorElUser}
        keepMounted
        open={Boolean(anchorElUser)}
        onClose={handleCloseUser}
      >
        <button className="quit-user">ВЫЙТИ</button>
      </StyledMenu>
      </div>
      </div>
      <div>
      <Switch>
      <Route path="/premium">
           <Premium/>
      </Route>
      <Route path="/documentation">
           <Documentation/>
      </Route>
      <Route path="/commands">
           <Commands/>
      </Route>
      <Route path="/dashboard/levels">
           <Dashboard/>
      </Route>
      <Route path="/dashboard/main">
           <Dashboard/>
      </Route>
      <Route path="/dashboard/quiz">
           <Dashboard/>
      </Route>
      <Route path="/dashboard/customcommands">
           <Dashboard/>
      </Route>
      <Route path="/dashboard/commands">
           <Dashboard/>
      </Route>
      <Route path="/">
           <Home />
      </Route>
      </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
