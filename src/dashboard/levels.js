import React from "react";
import "./dashboard.css"
import Slider from "@material-ui/core/Slider"
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import hotdog from "./hot-dog-twitter .svg";
import Radio from '@material-ui/core/Radio';
import clsx from 'clsx';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ChromePicker } from 'react-color';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';


const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: theme.spacing(0.5),
      margin: 0,
      background: "none",
      width:"100%",
      borderBottom: "2px double rgba(14, 143, 218, 0.801)",
    },
    chip: {
      margin: theme.spacing(0.5),
      border: "2px double rgba(14, 143, 218, 0.801)",
      borderRadius: "0px",
    },
  }));
  
  const useStylesRadio = makeStyles({
    root: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    icon: {
      borderRadius: '50%',
      width: 16,
      height: 16,
      boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
      backgroundColor: '#f5f8fa',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
      '$root.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
      },
      'input:hover ~ &': {
        backgroundColor: '#ebf1f5',
      },
      'input:disabled ~ &': {
        boxShadow: 'none',
        background: 'rgba(206,217,224,.5)',
      },
    },
    checkedIcon: {
      backgroundColor: '#137cbd',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
      '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
        content: '""',
      },
      'input:hover ~ &': {
        backgroundColor: '#106ba3',
      },
    },
  });
  function StyledRadio(props) {
    const classes = useStylesRadio();
  
    return (
      <Radio
        className={classes.root}
        disableRipple
        color="default"
        checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
        icon={<span className={classes.icon} />}
        {...props}
      />
    );
  }

function Levels(){
  const [anchorElShrift, setAnchorElShrift] = React.useState(null);
  const [anchorElFon, setAnchorElFon] = React.useState(null);
  const [anchorElFonProgress, setAnchorElFonProgress] = React.useState(null);
  const [anchorElProgress, setAnchorElProgress] = React.useState(null);
  const [disabledRank, setDisabledRank] = React.useState(true);
  const [disabledNotificatonRank, setDisabledNotificationRank] = React.useState(true);
  const [separateRankAccrual, setSeparateRankAccrual] = React.useState(true);

  const [stateSnackbar, setStateSnackbar] = React.useState({
    open: false
  });
  const [stateSnackbar1, setStateSnackbar1] = React.useState({
    open: false
  });
  const vertical = "bottom";
  const horizontal = "right";

  const handleClickSnackbar = () => {
    setStateSnackbar({ open: true });
    console.log(stateSnackbar);
  };

  const save = () => {
    setStateSnackbar({ open: false });
    console.log(stateSnackbar);
    setStateSnackbar1({ open1: true });
    console.log(stateSnackbar1);
  };
  const handleCloseSnackbar1 = () => {
    setStateSnackbar1({  open1: false });
  };

  const handleClickShrift = (event) => {
    setAnchorElShrift(event.currentTarget);
  };
  const handleClickFon = (event) => {
    setAnchorElFon(event.currentTarget);
  };
  const handleClickFonProgress = (event) => {
    setAnchorElFonProgress(event.currentTarget);
  };
  const handleClickProgress = (event) => {
    setAnchorElProgress(event.currentTarget);
  };

  const handleCloseShrift = () => {
    setAnchorElShrift(null);
    handleClickSnackbar();
  };
  const handleCloseFon = () => {
    setAnchorElFon(null);
    handleClickSnackbar();
  };
  const handleCloseFonProgress = () => {
    setAnchorElFonProgress(null);
    handleClickSnackbar();
  };
  const handleCloseProgress = () => {
    setAnchorElProgress(null);
    handleClickSnackbar();
  };

  const openShrift = Boolean(anchorElShrift);
  const openFon = Boolean(anchorElFon);
  const openFonProgress = Boolean(anchorElFonProgress);
  const openProgress = Boolean(anchorElProgress);
  const idShrift = openShrift ? 'simplhe-popover' : undefined;
  const idFon = openFon ? 'simplhe-popover' : undefined;
  const idFonProgress = openFonProgress ? 'simplhe-popover' : undefined;
  const idProgress = openProgress ? 'simplhe-popover' : undefined;
  const [colorShrift, setColorShrift] = React.useState({
    r: "255",
    g: "255",
    b: "255",
    a: "1",
  });
  const [colorFon, setColorFon] = React.useState("#FABA44");
  const [colorFonProgress, setColorFonProgress] = React.useState({
    r: "115",
    g: "203",
    b: "253",
    a: "0.562",
  });
  const [colorProgress, setColorProgress] = React.useState({
    r: "115",
    g: "203",
    b: "253",
    a: "1",
  });
  const setNumber = ({ target }) => {
    let { value, min, max } = target;
    value = value.replace(',', '');
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    target.value = value;
  };
    const user = "{user}";
    const levelss = "{level}";
    let keys = 0;
    const classes = useStyles();
  const [chipDataTextChannels, setChipDataTextChannels] = React.useState([]);

  const [chipDataVoiceChannels, setChipDataVoiceChannels] = React.useState([]);

  const [chipDataRolles, setChipDataRoles] = React.useState([]);

  const [anchorElTextChannels, setAnchorTextChannels] = React.useState(null);

  const [anchorElVoiceChannels, setAnchorVoiceChannels] = React.useState(null);

  const [anchorElRoles, setAnchorRoles] = React.useState(null);

  const handleClickTextChannels = (event) => {
    setAnchorTextChannels(event.currentTarget);
  };
  const handleClickVoiceChannels = (event) => {
    setAnchorVoiceChannels(event.currentTarget);
  };
  const handleClickRoles = (event) => {
    setAnchorRoles(event.currentTarget);
  };

  const handleCloseTextChannels = () => {
    setAnchorTextChannels(null);
  };
  const handleCloseVoiceChannels = () => {
    setAnchorVoiceChannels(null);
  };
  const handleCloseRoles = () => {
    setAnchorRoles(null);
  };
  const toggleClickTextChannels1 = () => {keys++; handleClickSnackbar(); setChipDataTextChannels((chips) => [...chips,{key:{keys},label:"ADMINISTRATOR"}])}

  const toggleClickTextChannels2 = () => {keys++; handleClickSnackbar(); setChipDataTextChannels((chips) => [...chips,{key:{keys},label:"MODERATOR"}])}

  const toggleClickVoiceChannels1 = () => {keys++; handleClickSnackbar(); setChipDataVoiceChannels((chips) => [...chips,{key:{keys},label:"ADMINISTRATOR"}])}

  const toggleClickVoiceChannels2 = () => {keys++; handleClickSnackbar(); setChipDataVoiceChannels((chips) => [...chips,{key:{keys},label:"MODERATOR"}])}

  const toggleClickRoles1 = () => {keys++; handleClickSnackbar(); setChipDataRoles((chips) => [...chips,{key:{keys},label:"ADMINISTRATOR"}])}

  const toggleClickRoles2 = () => {keys++; handleClickSnackbar(); setChipDataRoles((chips) => [...chips,{key:{keys},label:"MODERATOR"}])}

  const handleDeleteTextChannels = (chipToDelete) => () => {
    if(!disabledRank){
      setChipDataTextChannels((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
      handleClickSnackbar();
    }
  };
  const handleDeleteVoiceChannels = (chipToDelete) => () => {
   if(!disabledRank){
     setChipDataVoiceChannels((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
     handleClickSnackbar();
   }
  };
  const handleDeleteRoles = (chipToDelete) => () => {
    if(!disabledRank){
      setChipDataRoles((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
      handleClickSnackbar();
    }
  };
 const [itemReward,setItemReward] = React.useState([])
 const [id,setid] = React.useState(0);
   const pushItemReward = () => {
    handleClickSnackbar();
     setid((set) => set+1);
     setItemReward((reward) => [...reward,{id:id,content: <div className="main-block">
     <div className="main-block-left"><input type="number" name="lvlinput" placeholder="LVL" className="text-area-minimal" min="1" max="999" onInput={setNumber}></input></div>
     <div className="main-block-right">
     <select id="participant" name="countires" className="input-color"><option value="">ADMINISTRATOR</option>
  <option>MODERATOR</option>
  <option>GLAVA</option>
  </select>
       <button  className="button-krestik" onClick={() => removeItemReward(id)}><FontAwesomeIcon icon={["fas", "times"]} color="white" /></button>
     </div>
         </div>}])
   }
   const removeItemReward = (ids) => {
    if(!disabledRank) setItemReward((reward) => reward.filter((reward) => reward.id !== ids));
      }
      const enabledRang = ({target}) => {
        setDisabledRank(!target.checked);
        setDisabledNotificationRank(true);
        document.getElementsByTagName("button").disabled = !target.checked;
        document.getElementById("rank").checked = false;
        document.getElementById("rank2").checked = false;
        handleClickSnackbar();
      }
      const enabledNotificationRank = ({target}) => {
        setDisabledNotificationRank(!target.checked);
        handleClickSnackbar();
      }
      
      return (
          <div>
            
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={stateSnackbar.open}
        key={vertical + horizontal}
      >
        <button className="save-button" onClick={save}>Сохранить изменения</button>
        
        </Snackbar>
        <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={stateSnackbar1.open1}
        onClose={handleCloseSnackbar1}
        message="Изминения сохранены успешно"
        key={vertical + horizontal}
      />
        <div className="main">
         <div className="main-top">ОСНОВНОЕ<button style={{background:"none", outline:"none", cursor:"pointer", border:"none"}} onClick={() => document.getElementById('osnovnoe').style.display === "none" ? document.getElementById('osnovnoe').style.display = "block" : document.getElementById('osnovnoe').style.display = "none"}><FontAwesomeIcon icon={["fas", "angle-down"]} /> Показать/Скрыть</button></div>
         <div className="main-bottom" id="osnovnoe">
         <div className="main-block">
             <div className="main-block-left">ВКЛЮЧИТЬ СИСТЕМУ РАНГОВ</div>
             <div className="main-block-right"><label class="switch">
  <input type="checkbox" onInput={enabledRang} ></input>
  <span class="slider"></span>
</label></div>
                 </div>
         <div className="main-block">
         <div className="main-block-left">ИГНОРИРУЕМЫЕ ТЕКСТОВЫЕ КАНАЛЫ</div>
         <div className="main-block-right">
           </div>
           </div>
           <div className="main-block">
           <div>
      <Menu
        id="simple-menu"
        anchorEl={anchorElTextChannels}
        keepMounted
        open={Boolean(anchorElTextChannels)}
        onClose={handleCloseTextChannels}
      >
        <MenuItem ><input type="checkbox" onClick={toggleClickTextChannels1}></input>ADMINISTRATOR</MenuItem>
        <MenuItem ><input type="checkbox" onClick={toggleClickTextChannels2}></input>MODERATOR</MenuItem>
      </Menu>
    </div>
    <Paper component="ul" className={classes.root}>
      {chipDataTextChannels.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <li key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              onDelete={data.label === 'React' ? undefined : handleDeleteTextChannels(data)}
              className={classes.chip}
            />
          </li>
        );
      })}
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickTextChannels} disabled={disabledRank}>
        Open Menu
      </Button>
    </Paper>
         </div>
         <div className="main-block">
         <div className="main-block-left">ИГНОРИРУЕМЫЕ ГОЛОСОВЫЕ КАНАЛЫ</div>
         <div className="main-block-right">
         </div>
         </div>
         <div className="main-block">
           <div>
      <Menu
        id="simple-menu"
        anchorEl={anchorElVoiceChannels}
        keepMounted
        open={Boolean(anchorElVoiceChannels)}
        onClose={handleCloseVoiceChannels}
      >
        <MenuItem ><input type="checkbox" onClick={toggleClickVoiceChannels1}></input>ADMINISTRATOR</MenuItem>
        <MenuItem ><input type="checkbox" onClick={toggleClickVoiceChannels2}></input>MODERATOR</MenuItem>
      </Menu>
    </div>
    <Paper component="ul" className={classes.root}>
      {chipDataVoiceChannels.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <li key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              onDelete={data.label === 'React' ? undefined : handleDeleteVoiceChannels(data)}
              className={classes.chip}
            />
          </li>
        );
      })}
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickVoiceChannels} disabled={disabledRank}>
        Open Menu
      </Button>
    </Paper>
         </div>
         <div className="main-block">
         <div className="main-block-left">ИГНОРИРУЕМЫЕ РОЛИ</div>
         <div className="main-block-right">
         </div>
         </div>
         <div className="main-block">
           <div>
      <Menu
        id="simple-menu"
        anchorEl={anchorElRoles}
        keepMounted
        open={Boolean(anchorElRoles)}
        onClose={handleCloseRoles}
      >
        <MenuItem ><input type="checkbox" onClick={toggleClickRoles1}></input>ADMINISTRATOR</MenuItem>
        <MenuItem ><input type="checkbox" onClick={toggleClickRoles2}></input>MODERATOR</MenuItem>
      </Menu>
    </div>
    <Paper component="ul" className={classes.root}>
      {chipDataRolles.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <li key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              onDelete={data.label === 'React' ? undefined : handleDeleteRoles(data)}
              className={classes.chip}
            />
          </li>
        );
      })}
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickRoles} disabled={disabledRank}>
        Open Menu
      </Button>
    </Paper>
         </div>
         <div className="main-block">
         <div className="main-block-left">МНОЖ. ОПЫТА</div>
         <div className="main-block-right">
         <Slider
  defaultValue={1.5}
  aria-labelledby="discrete-slider-small-steps"
  valueLabelFormat={(x) => x+"x"}
  step={0.5}
  min={0.5}
  max={3.0}
  valueLabelDisplay="auto"
  disabled={disabledRank}
  onClick={handleClickSnackbar}
/>
         </div>
         </div>
         <FormControl component="fieldset">
      <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios" > 
        <FormControlLabel value="female" control={<StyledRadio />} onClick={() => {
          if(!disabledRank){
          setSeparateRankAccrual(true);
          handleClickSnackbar();
          }
        }} label="опыт за голосовые и текстовые каналы будет начисляться раздельно" disabled={disabledRank}/>
        <FormControlLabel value="male" control={<StyledRadio />} onClick={() => {
          if(!disabledRank){
          setSeparateRankAccrual(false);
          handleClickSnackbar();
          }
        }} label="опыт за голосовые и текстовые каналы будет начисляться совместно" disabled={disabledRank}/>
      </RadioGroup>
    </FormControl>
         </div>
        </div>
        <div className="main-block-levels">
         <div className="main-top">УВЕДОМЛЕНИЕ О ПОВЫШЕНИИ УРОВНЯ<button style={{background:"none", outline:"none", cursor:"pointer", border:"none"}} onClick={() => document.getElementById('notificationoflevelupgrade').style.display === "none" ? document.getElementById('notificationoflevelupgrade').style.display = "block" : document.getElementById('notificationoflevelupgrade').style.display = "none"}><FontAwesomeIcon icon={["fas", "angle-down"]} /> Показать/Скрыть</button></div>
         <div className="main-bottom" id="notificationoflevelupgrade">
             <div className="main-block">
             <div className="main-block-left">ВКЛЮЧИТЬ УВЕДОМЛЕНИЯ О ПОВЫШЕНИИ УРОВНЯ</div>
             <div className="main-block-right"><label class="switch">
  <input type="checkbox" disabled={disabledRank} id="rank" onInput={enabledNotificationRank}></input>
  <span class="slider"></span>
</label></div>
                 </div>
         <div className="main-block">
             <textarea placeholder="Шаблон сообщения" className="text-area" disabled={disabledNotificatonRank}></textarea>
                 </div>
                 <font size="2">Используйте ${user} для указания пользователя, ${levelss} для указания уровня</font>
         </div>
        </div>
        <div className="main-block-levels">
         <div className="main-top">ЛАРЁК С ХОТДОГАМИ<button style={{background:"none", outline:"none", cursor:"pointer", border:"none"}} onClick={() => document.getElementById('shawarmastall').style.display === "none" ? document.getElementById('shawarmastall').style.display = "block" : document.getElementById('shawarmastall').style.display = "none"}><FontAwesomeIcon icon={["fas", "angle-down"]} /> Показать/Скрыть</button></div>
         <div className="main-bottom" id="shawarmastall">
         <div className="main-block">
             <div className="main-block-left">ВКЛЮЧИТЬ ЛАРЁК С ХОТДОГАМИ</div>
             <div className="main-block-right"><label class="switch">
  <input type="checkbox" disabled={disabledRank} id="rank2" onInput={handleClickSnackbar}></input>
  <span class="slider"></span>
</label></div>
                 </div>
                 <div style={{textAlign:"left", fontSize:"17px", fontFamily:"Monaco"}}>
                 <div style={{marginTop:"25px"}}>Ларёк с хотдогами представляет собой механизм кармы или простой системы репутации.</div>
                 <div style={{marginTop:"25px"}}>Счетчик хотдогов можно посмотреть по команде <font color="blue">ранг</font></div>
                 <div style={{marginTop:"25px"}}>Чтобы повысить этот счетчик нужно написать сообщение с обращением к участнику, и эмоцией хотдога, например: <font color="blue">@участник <img src={hotdog} alt="logo" style={{width:"15px",height:"15px"}}/></font></div>
         </div>
         </div>
        </div>
        {
        separateRankAccrual ? null :<div className="main-block-levels">
         <div className="main-top">НАГРАДЫ ЗА УРОВЕНЬ<button style={{background:"none", outline:"none", cursor:"pointer", border:"none"}} onClick={() => {if(itemReward.length !== 0 ){document.getElementById('rewardforlevel').style.display === "none" ? document.getElementById('rewardforlevel').style.display = "block" : document.getElementById('rewardforlevel').style.display = "none"}}}><FontAwesomeIcon icon={["fas", "angle-down"]} /> Показать/Скрыть</button>
         <button disabled={disabledRank} style={{background:"none", outline:"none", cursor:"pointer", border:"none"}} onClick={pushItemReward}><span style={{fontStyle:"italic"}}>+</span> Добавить</button></div>
         { itemReward.length !== 0 ? <div className="main-bottom" id="rewardforlevel">
         
      {itemReward.map(item => (
        <div key={item.id} >{item.content}</div>
      ))}
    
         </div> : <div className="main-bottom" id="rewardforlevel" style={{minHeight:"50px"}}>
         
         <div style={{paddingTop:"2%"}}>Вы не добавили еще ни одной награды</div>
       
            </div>}
        </div>}
        <div className="main-block-levels">
         <div className="main-top">ПОЛЬЗОВАТЕЛЬСКАЯ РАНГ-КАРТОЧКА<button style={{background:"none", outline:"none", cursor:"pointer", border:"none"}} onClick={() => document.getElementById('userrangkard').style.display === "none" ? document.getElementById('userrangkard').style.display = "block" : document.getElementById('userrangkard').style.display = "none"}><FontAwesomeIcon icon={["fas", "angle-down"]} /> Показать/Скрыть</button></div>
         <div className="main-bottom" id="userrangkard">
    { !separateRankAccrual ? <div style={{backgroundColor:colorFon,width:"100%",height:"150px",display:"flex"}} id="card1">
      <div style={{width:"20%"}}>
    <svg width="100%" height="100%" style={{marginTop:"25px"}}>
  <circle cx="50%" cy="35%" r="35%" stroke-width="100" fill="yellow" />
</svg>
    </div>
    <div style={{width:"70%",marginTop: "70px",marginLeft: "20px"}}>
      <div style={{display:"flex"}} id = "colorShrift">
        <div className="rank-card-top-left" style={{color:`rgba(${colorShrift.r},${colorShrift.g},${colorShrift.b},${colorShrift.a})`}}>LVL 35 <FontAwesomeIcon icon={["fas", "comment"]} color="white" /> 1234 <FontAwesomeIcon icon={["fas", "microphone"]}  color="white" /> 34:37:38</div>
         <div className="rank-card-top-right" style={{color:`rgba(${colorShrift.r},${colorShrift.g},${colorShrift.b},${colorShrift.a})`}}> 1024/2048 EXP</div>

         </div>
    <div className="loh" style={{borderTopColor:`rgba(${colorFonProgress.r},${colorFonProgress.g},${colorFonProgress.b},${colorFonProgress.a})`}}>
    <div className="loh-children" style={{borderTopColor:`rgba(${colorProgress.r},${colorProgress.g},${colorProgress.b},${colorProgress.a})`}}></div>
    </div>
    <div id = "colorShrift" style={{color:`rgba(${colorShrift.r},${colorShrift.g},${colorShrift.b},${colorShrift.a})`, marginTop:"30px",display:"flex"}}>
       <div className="rank-card-top-left">Diiimooon#9086</div> <div className="rank-card-top-right"><FontAwesomeIcon icon={["fas", "hotdog"]} color="white"/> 908</div>
    </div>
    </div>
    </div> :
    <div style={{backgroundColor:colorFon,width:"100%",height:"22vh",display:"flex"}} id="card2">
      <div style={{width:"20%"}}>
      <svg width="100%" height="100%" style={{marginTop:"3vh"}}>
  <circle cx="50%" cy="35%" r="35%" stroke-width="100%" fill="yellow" />
</svg>
    </div>
    <div style={{width:"70%",marginTop: "4.1vh",marginLeft: "20px"}}>
      <div style={{display:"flex"}}>
        <div className="rank-card-top-left" id = "colorShrift" style={{color:`rgba(${colorShrift.r},${colorShrift.g},${colorShrift.b},${colorShrift.a})`}}>LVL 35 <FontAwesomeIcon icon={["fas", "microphone"]}  color="white" /> 34:37:38</div>
         <div className="rank-card-top-right" id = "colorShrift" style={{color:`rgba(${colorShrift.r},${colorShrift.g},${colorShrift.b},${colorShrift.a})`}}> 1024/2048 EXP</div>

         </div>
    <div className="loh" style={{borderTopColor:`rgba(${colorFonProgress.r},${colorFonProgress.g},${colorFonProgress.b},${colorFonProgress.a})`}}>
    <div className="loh-children" style={{borderTopColor:`rgba(${colorProgress.r},${colorProgress.g},${colorProgress.b},${colorProgress.a})`}}></div>
    </div>
    <div style={{display:"flex",marginTop:"3vh"}}>
        <div className="rank-card-top-left" id = "colorShrift" style={{color:`rgba(${colorShrift.r},${colorShrift.g},${colorShrift.b},${colorShrift.a})`}}>LVL 35 <FontAwesomeIcon icon={["fas", "comment"]} color="white" /> 1234</div>
         <div className="rank-card-top-right" id = "colorShrift" style={{color:`rgba(${colorShrift.r},${colorShrift.g},${colorShrift.b},${colorShrift.a})`}}> 1024/2048 EXP</div>

         </div>
    <div className="loh" style={{borderTopColor:`rgba(${colorFonProgress.r},${colorFonProgress.g},${colorFonProgress.b},${colorFonProgress.a})`}}>
    <div className="loh-children" style={{borderTopColor:`rgba(${colorProgress.r},${colorProgress.g},${colorProgress.b},${colorProgress.a})`}}></div>
    </div>
    <div id = "colorShrift" style={{color:`rgba(${colorShrift.r},${colorShrift.g},${colorShrift.b},${colorShrift.a})`, marginTop:"3.5vh",display:"flex"}}>
       <div className="rank-card-top-left">Diiimooon#9086</div> <div className="rank-card-top-right"><FontAwesomeIcon icon={["fas", "hotdog"]} color="white"/> 908</div>
    </div>
    </div>
    </div>}
    <div style={{width:"100%",marginTop:"20px"}}>Настройка цветов</div>
    <div className="color-settings-card">
      <div className="left-color-settings-card">Цвет прогресса</div>
      <div className="right-color-settings-card">
      <div className="styles-swatch" onClick={handleClickProgress }>
      <div className="styles-color" style={{background: `rgba(${ colorProgress.r }, ${ colorProgress.g }, ${ colorProgress.b }, ${ colorProgress.a })`}} />
      </div>
      <Popover
        id={idProgress}
        open={openProgress}
        anchorEl={anchorElProgress}
        onClose={handleCloseProgress}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography><ChromePicker 
      color={ colorProgress} 
      onChangeComplete={(color) => {
        if(!disabledRank)setColorProgress(color.rgb)

      }}
      /></Typography>
      </Popover>
      </div>
      
    </div>
    <div className="color-settings-card">
      <div className="left-color-settings-card">Цвет фона прогресса</div>
      <div className="right-color-settings-card">
      <div className="styles-swatch" onClick={handleClickFonProgress }>
      <div className="styles-color" style={{background: `rgba(${ colorFonProgress.r }, ${ colorFonProgress.g }, ${ colorFonProgress.b }, ${ colorFonProgress.a })`}} />
      </div>
      <Popover
        id={idFonProgress}
        open={openFonProgress}
        anchorEl={anchorElFonProgress}
        onClose={handleCloseFonProgress}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography><ChromePicker 
      color={ colorFonProgress} 
      onChangeComplete={(color) => {
        if(!disabledRank)setColorFonProgress(color.rgb)

      }}
      /></Typography>
      </Popover>
      </div>
    </div>
    <div className="color-settings-card">
      <div className="left-color-settings-card">Цвет фона</div>
      <div className="right-color-settings-card">
      <div className="styles-swatch" onClick={handleClickFon }>
      <div className="styles-color" style={{background: colorFon}} />
      </div>
      <Popover
        id={idFon}
        open={openFon}
        anchorEl={anchorElFon}
        onClose={handleCloseFon}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography><ChromePicker 
      color={ colorFon} 
      disableAlpha={true}
      onChangeComplete={(color) => {
        if(!disabledRank)setColorFon(color.hex)
      }}
      /></Typography>
      </Popover>
      </div>
    </div>
    <div className="color-settings-card">
      <div className="left-color-settings-card">Цвет шрифта</div>
      <div className="right-color-settings-card"><div className="styles-swatch" onClick={handleClickShrift } disabled={true}>
      <div className="styles-color" style={{background: `rgba(${ colorShrift.r }, ${ colorShrift.g }, ${ colorShrift.b }, ${ colorShrift.a })`}} />
      </div>
      <Popover
        id={idShrift}
        open={openShrift}
        anchorEl={anchorElShrift}
        onClose={handleCloseShrift}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography><ChromePicker 
      color={ colorShrift} 
      onChangeComplete={(color) => {
        if(!disabledRank)setColorShrift(color.rgb)

      }}
      /></Typography>
      </Popover></div>
    </div>
         </div>
        </div>
        </div>
      );
    
  }
  export default Levels;