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
import reactCSS from 'reactcss';


const useStyles = makeStyles((theme) => ({
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
  const [showColorPickerShrift,setShowColorPickerShrift] = React.useState(false);
  const [showColorPickerFon,setShowColorPickerFon] = React.useState(false);
  const [showColorPickerFonProgress,setShowColorPickerFonProgress] = React.useState(false);
  const [showColorPickerProgress,setShowColorPickerProgress] = React.useState(false);
  const [val, setVal] = React.useState(0);
  const setNumber = ({ target }) => {
    let { value, min, max } = target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    setVal(value);
  };
    const user = "{user}";
    const levelss = "{level}";
    let keys = 0;
    const classes = useStyles();
  const [chipData, setChipData] = React.useState([]);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const toggleClick1 = () => {keys++; setChipData((chips) => [...chips,{key:{keys},label:"ADMINISTRATOR"}])}

  const toggleClick2 = () => {keys++; setChipData((chips) => [...chips,{key:{keys},label:"MODERATOR"}]); console.log(setChipData)}

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };
  const styles = reactCSS({
    'default': {
      color: {
        width: '179px',
        height: '14px',
        borderRadius: '2px',
        background: `rgba(${ colorShrift.r }, ${ colorShrift.g }, ${ colorShrift.b }, ${ colorShrift.a })`,
      },
      swatch: {
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
      },
      cover: {
      },
    },
  });
      return (
          <div>
        <div className="main">
         <div className="main-top">ОСНОВНОЕ<button style={{background:"none", outline:"none", cursor:"pointer", border:"none"}} onClick={() => document.getElementById('osnovnoe').style.display === "none" ? document.getElementById('osnovnoe').style.display = "block" : document.getElementById('osnovnoe').style.display = "none"}><FontAwesomeIcon icon={["fas", "angle-down"]} /> Показать/Скрыть</button></div>
         <div className="main-bottom" id="osnovnoe">
         <div className="main-block">
             <div className="App-header-top-left">ВКЛЮЧИТЬ СИСТЕМУ РАНГОВ</div>
             <div className="App-header-top-right"><label class="switch">
  <input type="checkbox"></input>
  <span class="slider"></span>
</label></div>
                 </div>
         <div className="main-block">
         <div className="App-header-top-left">ИГНОРИРУЕМЫЕ ТЕКСТОВЫЕ КАНАЛЫ</div>
         <div className="App-header-top-right">
           </div>
           </div>
           <div className="main-block">
           <div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem ><input type="checkbox" onClick={toggleClick1}></input>ADMINISTRATOR</MenuItem>
        <MenuItem ><input type="checkbox" onClick={toggleClick2}></input>MODERATOR</MenuItem>
      </Menu>
    </div>
    <Paper component="ul" className={classes.root}>
      {chipData.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <li key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              onDelete={data.label === 'React' ? undefined : handleDelete(data)}
              className={classes.chip}
            />
          </li>
        );
      })}
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
    </Paper>
         </div>
         <div className="main-block">
         <div className="App-header-top-left">ИГНОРИРУЕМЫЕ ГОЛОСОВЫЕ КАНАЛЫ</div>
         <div className="App-header-top-right">
         </div>
         </div>
         <div className="main-block">
           <div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem ><input type="checkbox" onClick={toggleClick1}></input>ADMINISTRATOR</MenuItem>
        <MenuItem ><input type="checkbox" onClick={toggleClick2}></input>MODERATOR</MenuItem>
      </Menu>
    </div>
    <Paper component="ul" className={classes.root}>
      {chipData.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <li key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              onDelete={data.label === 'React' ? undefined : handleDelete(data)}
              className={classes.chip}
            />
          </li>
        );
      })}
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
    </Paper>
         </div>
         <div className="main-block">
         <div className="App-header-top-left">ИГНОРИРУЕМЫЕ РОЛИ</div>
         <div className="App-header-top-right">
         </div>
         </div>
         <div className="main-block">
           <div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem ><input type="checkbox" onClick={toggleClick1}></input>ADMINISTRATOR</MenuItem>
        <MenuItem ><input type="checkbox" onClick={toggleClick2}></input>MODERATOR</MenuItem>
      </Menu>
    </div>
    <Paper component="ul" className={classes.root}>
      {chipData.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <li key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              onDelete={data.label === 'React' ? undefined : handleDelete(data)}
              className={classes.chip}
            />
          </li>
        );
      })}
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
    </Paper>
         </div>
         <div className="main-block">
         <div className="App-header-top-left">МНОЖ. ОПЫТА</div>
         <div className="App-header-top-right">
         <Slider
  defaultValue={1.5}
  aria-labelledby="discrete-slider-small-steps"
  valueLabelFormat={(x) => x+"x"}
  step={0.5}
  min={0.5}
  max={3.0}
  valueLabelDisplay="auto"
/>
         </div>
         </div>
         </div>
        </div>
        <div className="main-block-levels">
         <div className="main-top">УВЕДОМЛЕНИЕ О ПОВЫШЕНИИ УРОВНЯ<button style={{background:"none", outline:"none", cursor:"pointer", border:"none"}} onClick={() => document.getElementById('notificationoflevelupgrade').style.display === "none" ? document.getElementById('notificationoflevelupgrade').style.display = "block" : document.getElementById('notificationoflevelupgrade').style.display = "none"}><FontAwesomeIcon icon={["fas", "angle-down"]} /> Показать/Скрыть</button></div>
         <div className="main-bottom" id="notificationoflevelupgrade">
             <div className="main-block">
             <div className="App-header-top-left">ВКЛЮЧИТЬ УВЕДОМЛЕНИЯ О ПОВЫШЕНИИ УРОВНЯ</div>
             <div className="App-header-top-right"><label class="switch">
  <input type="checkbox"></input>
  <span class="slider"></span>
</label></div>
                 </div>
         <div className="main-block">
             <textarea placeholder="Шаблон сообщения" className="text-area"></textarea>
                 </div>
                 <font size="2">Используйте ${user} для указания пользователя, ${levelss} для указания уровня</font>
         </div>
        </div>
        <div className="main-block-levels">
         <div className="main-top">ЛАРЁК С ХОТДОГАМИ<button style={{background:"none", outline:"none", cursor:"pointer", border:"none"}} onClick={() => document.getElementById('shawarmastall').style.display === "none" ? document.getElementById('shawarmastall').style.display = "block" : document.getElementById('shawarmastall').style.display = "none"}><FontAwesomeIcon icon={["fas", "angle-down"]} /> Показать/Скрыть</button></div>
         <div className="main-bottom" id="shawarmastall">
         <div className="main-block">
             <div className="App-header-top-left">ВКЛЮЧИТЬ ЛАРЁК С ХОТДОГАМИ</div>
             <div className="App-header-top-right"><label class="switch">
  <input type="checkbox"></input>
  <span class="slider"></span>
</label></div>
                 </div>
                 <div style={{textAlign:"left", fontSize:"17px", fontFamily:"Monaco"}}>
                 <div style={{marginTop:"25px"}}>Ларёк с хотдогами представляет собой механизм кармы или простой системы репутации.</div>
                 <div style={{marginTop:"25px"}}>Счетчик хотдогов можно посмотреть по команде <font color="blue">!!ранг</font></div>
                 <div style={{marginTop:"25px"}}>Чтобы повысить этот счетчик нужно написать сообщение с обращением к участнику, и эмоцией хотдога, например: <font color="blue">@участник <img src={hotdog} alt="logo" style={{width:"15px",height:"15px"}}/></font></div>
         </div>
         </div>
        </div>
        <div className="main-block-levels">
         <div className="main-top">НАГРАДЫ ЗА УРОВЕНЬ<button style={{background:"none", outline:"none", cursor:"pointer", border:"none"}} onClick={() => document.getElementById('rewardforlevel').style.display === "none" ? document.getElementById('rewardforlevel').style.display = "block" : document.getElementById('rewardforlevel').style.display = "none"}><FontAwesomeIcon icon={["fas", "angle-down"]} /> Показать/Скрыть</button>
         <button style={{background:"none", outline:"none", cursor:"pointer", border:"none"}}><span style={{fontStyle:"italic"}}>+</span> Добавить</button></div>
         <div className="main-bottom" id="rewardforlevel">
         <div className="main-block">
             <div className="App-header-top-left"><input type="number" name="lvlinput" placeholder="LVL" className="text-area-minimal" min="1" max="999" value={val} onChange={setNumber}></input></div>
             <div className="App-header-top-right">
             <select id="participant" name="countires" className="input-color"><option value="">ADMINISTRATOR</option>
<option>MODERATOR</option>
<option>GLAVA</option>
</select>
               <button className="button-krestik"><FontAwesomeIcon icon={["fas", "times"]} color="white" /></button>
             </div>
                 </div>
                 <div className="main-block">
             <div className="App-header-top-left"><input type="number" name="lvlinput" placeholder="LVL" className="text-area-minimal" min="1" max="999" value={val} onChange={setNumber}></input></div>
             <div className="App-header-top-right">
             <select id="participant" name="countires" className="input-color"><option value="">ADMINISTRATOR</option>
<option>MODERATOR</option>
<option>GLAVA</option>
</select>
               <button className="button-krestik"><FontAwesomeIcon icon={["fas", "times"]} color="white" /></button>
             </div>
                 </div>
                 <div className="main-block">
             <div className="App-header-top-left"><input type="number" name="lvlinput" placeholder="LVL" className="text-area-minimal" min="1" max="999" value={val} onChange={setNumber}></input></div>
             <div className="App-header-top-right">
             <select id="participant" name="countires" className="input-color"><option value="">ADMINISTRATOR</option>
<option>MODERATOR</option>
<option>GLAVA</option>
</select>
               <button className="button-krestik"><FontAwesomeIcon icon={["fas", "times"]} color="white" /></button>
             </div>
                 </div>
         </div>
        </div>
        <div className="main-block-levels">
         <div className="main-top">ПОЛЬЗОВАТЕЛЬСКАЯ РАНГ-КАРТОЧКА<button style={{background:"none", outline:"none", cursor:"pointer", border:"none"}} onClick={() => document.getElementById('userrangkard').style.display === "none" ? document.getElementById('userrangkard').style.display = "block" : document.getElementById('userrangkard').style.display = "none"}><FontAwesomeIcon icon={["fas", "angle-down"]} /> Показать/Скрыть</button></div>
         <div className="main-bottom" id="userrangkard">
         <FormControl component="fieldset">
      <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
        <FormControlLabel value="female" control={<StyledRadio />} onClick={() => {
          document.getElementById("card1").style.display = "none";
          document.getElementById("card2").style.display = "flex";
        }} label="опыт за голосовые и текстовые каналы будет начисляться раздельно" />
        <FormControlLabel value="male" control={<StyledRadio />} onClick={() => {
          document.getElementById("card2").style.display = "none";
          document.getElementById("card1").style.display = "flex";
        }} label="опыт за голосовые и текстовые каналы будет начисляться совместно" />
      </RadioGroup>
    </FormControl>
    <div style={{backgroundColor:colorFon,width:"100%",height:"150px",display:"none"}} id="card1">
      <div style={{width:"20%"}}>
    <svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke-width="4" fill="yellow" />
</svg>
<div id = "colorShrift" style={{color:`rgba(${colorShrift.r},${colorShrift.g},${colorShrift.b},${colorShrift.a})`}}>
       Diiimooon <FontAwesomeIcon icon={["fas", "hotdog"]} /> 908
    </div>
    </div>
    <div style={{width:"70%",marginTop: "100px",marginLeft: "20px"}}>
      <div style={{display:"flex"}} id = "colorShrift">
        <div className="rank-card-top-left" style={{color:`rgba(${colorShrift.r},${colorShrift.g},${colorShrift.b},${colorShrift.a})`}}>LVL 35 <FontAwesomeIcon icon={["fas", "comment"]} color="white" /> 1234 <FontAwesomeIcon icon={["fas", "microphone"]}  color="white" /> 34:37:38</div>
         <div className="rank-card-top-right" style={{color:`rgba(${colorShrift.r},${colorShrift.g},${colorShrift.b},${colorShrift.a})`}}> 1024/2048 EXP</div>

         </div>
    <div className="loh" style={{borderTopColor:`rgba(${colorFonProgress.r},${colorFonProgress.g},${colorFonProgress.b},${colorFonProgress.a})`}}>
    <div className="loh-children" style={{borderTopColor:`rgba(${colorProgress.r},${colorProgress.g},${colorProgress.b},${colorProgress.a})`}}></div>
    </div>
    </div>
    </div>
    <div style={{backgroundColor:colorFon,width:"100%",height:"150px",display:"flex"}} id="card2">
      <div style={{width:"20%"}}>
    <svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke-width="4" fill="yellow" />
</svg>
<div id = "colorShrift" style={{color:`rgba(${colorShrift.r},${colorShrift.g},${colorShrift.b},${colorShrift.a})`}}>
       Diiimooon <FontAwesomeIcon icon={["fas", "hotdog"]} /> 908
    </div>
    </div>
    <div style={{width:"70%",marginTop: "50px",marginLeft: "20px"}}>
      <div style={{display:"flex"}}>
        <div className="rank-card-top-left" id = "colorShrift" style={{color:`rgba(${colorShrift.r},${colorShrift.g},${colorShrift.b},${colorShrift.a})`}}>LVL 35 <FontAwesomeIcon icon={["fas", "microphone"]}  color="white" /> 34:37:38</div>
         <div className="rank-card-top-right" id = "colorShrift" style={{color:`rgba(${colorShrift.r},${colorShrift.g},${colorShrift.b},${colorShrift.a})`}}> 1024/2048 EXP</div>

         </div>
    <div className="loh" style={{borderTopColor:`rgba(${colorFonProgress.r},${colorFonProgress.g},${colorFonProgress.b},${colorFonProgress.a})`}}>
    <div className="loh-children" style={{borderTopColor:`rgba(${colorProgress.r},${colorProgress.g},${colorProgress.b},${colorProgress.a})`}}></div>
    </div>
    <div style={{display:"flex",marginTop:"20px"}}>
        <div className="rank-card-top-left" id = "colorShrift" style={{color:`rgba(${colorShrift.r},${colorShrift.g},${colorShrift.b},${colorShrift.a})`}}>LVL 35 <FontAwesomeIcon icon={["fas", "comment"]} color="white" /> 1234</div>
         <div className="rank-card-top-right" id = "colorShrift" style={{color:`rgba(${colorShrift.r},${colorShrift.g},${colorShrift.b},${colorShrift.a})`}}> 1024/2048 EXP</div>

         </div>
    <div className="loh" style={{borderTopColor:`rgba(${colorFonProgress.r},${colorFonProgress.g},${colorFonProgress.b},${colorFonProgress.a})`}}>
    <div className="loh-children" style={{borderTopColor:`rgba(${colorProgress.r},${colorProgress.g},${colorProgress.b},${colorProgress.a})`}}></div>
    </div>
    </div>
    </div>
    <div style={{width:"100%",marginTop:"20px"}}>Настройка цветов</div>
    <div className="color-settings-card">
      <div className="left-color-settings-card">Цвет прогресса</div>
      <div className="right-color-settings-card">
      <div className="styles-swatch" onClick={() => setShowColorPickerProgress(showColorPickerProgress => !showColorPickerProgress) }>
          <div  className="styles-color" style={{background: `rgba(${ colorShrift.r }, ${ colorShrift.g }, ${ colorShrift.b }, ${ colorShrift.a })`}} />
          </div>
        {showColorPickerProgress ? <div style={styles.popover}>
          <div style={ styles.cover } onClick={ () => setShowColorPickerProgress(showColorPickerProgress => false) }/>
        <ChromePicker 
      color={ colorProgress} 
      onChangeComplete={(color) => {
        setColorProgress(color.rgb)

      }}
      /></div> : null}
      </div>
      
    </div>
    <div className="color-settings-card">
      <div className="left-color-settings-card">Цвет фона прогресса</div>
      <div className="right-color-settings-card">
      <div className="styles-swatch" onClick={() => setShowColorPickerFonProgress(showColorPickerFonProgress => !showColorPickerFonProgress) }>
          <div  className="styles-color" style={{background: `rgba(${ colorFonProgress.r }, ${ colorFonProgress.g }, ${ colorFonProgress.b }, ${ colorFonProgress.a })`}} />
          </div>
        {showColorPickerFonProgress ? <div style={styles.popover}>
          <div style={ styles.cover } onClick={ () => setShowColorPickerFonProgress(showColorPickerFonProgress => false) }/>
        <ChromePicker 
      color={ colorFonProgress} 
      onChangeComplete={(color) => {
        setColorFonProgress(color.rgb)

      }}
      /></div> : null}
      </div>
    </div>
    <div className="color-settings-card">
      <div className="left-color-settings-card">Цвет фона</div>
      <div className="right-color-settings-card">
      <div className="styles-swatch" onClick={() => setShowColorPickerFon(showColorPickerFon => !showColorPickerFon) }>
          <div  className="styles-color" style={{background: colorFon}} />
          </div>
        {showColorPickerFon ? <div style={styles.popover}>
          <div style={ styles.cover } onClick={ () => setShowColorPickerFon(showColorPickerFon => false) }/>
        <ChromePicker 
      color={ colorFon} 
      disableAlpha={true}
      onChangeComplete={(color) => {
        setColorFon(color.hex)

      }}
      /></div> : null}
      </div>
    </div>
    <div className="color-settings-card">
      <div className="left-color-settings-card">Цвет шрифта</div>
      <div className="right-color-settings-card"><div className="styles-swatch" onClick={() => setShowColorPickerShrift(showColorPickerShrift => !showColorPickerShrift) }>
          <div className="styles-color" style={{background: `rgba(${ colorShrift.r }, ${ colorShrift.g }, ${ colorShrift.b }, ${ colorShrift.a })`}} />
          </div>
        {showColorPickerShrift ? <div style={styles.popover}>
          <div style={ styles.cover } onClick={ () => setShowColorPickerShrift(showColorPickerShrift => false) }/>
        <ChromePicker 
      color={ colorShrift} 
      onChangeComplete={(color) => {
        setColorShrift(color.rgb)

      }}
      /></div> : null}</div>
    </div>
         </div>
        </div>
        </div>
      );
    
  }
  export default Levels;