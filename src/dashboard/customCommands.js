import React from "react";
import "./dashboard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import NativeSelect from '@material-ui/core/NativeSelect';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import { ChromePicker } from 'react-color';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    outline:"none",
    marginLeft:"20px",
    minWidth:"90%",
    height:"30px",
    backgroundColor:"rgba(81, 81, 247, 0.199)",
    border:"none",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function CustomCommands()  {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });
  const [openEmbed,setOpenEmbed] = React.useState(false);
  const [anchorElPickerColor, setAnchorElPickerColor] = React.useState(null);
  const openPickerColor = Boolean(anchorElPickerColor);
  const idPickerColor = openPickerColor ? 'simplhe-popover' : undefined;
  const handleClosePickerColor = () => {
    setAnchorElPickerColor(null);
  };
  const handleClickPickerColor = (event) => {
    setAnchorElPickerColor(event.currentTarget);
  };

  const [pickerColor, setPickerColor] = React.useState("#000");
  const setNumberSecondCooldown = ({target}) =>{
    let { value, min, max } = target;
    value = value.replace(',', '');
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    target.value = value;
  }

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  let keys = 0;
  const [chipDataIgnoredTextChannels, setChipDataIgnoredTextChannels] = React.useState([]);

  const [chipDataAllowedTextChannels, setChipDataAllowedTextChannels] = React.useState([]);
  const [chipDataIgnoredRoles, setChipDataIgnoredRoles] = React.useState([]);
  const [chipDataAllowedRoles, setChipDataAllowedRoles] = React.useState([]);
  const [chipDataIgnoringCooldownRoles, setChipDataIgnoringCooldownRoles] = React.useState([]);
  const [anchorElIgnoredTextChannels, setAnchorIgnoredTextChannels] = React.useState(null);
  const [anchorElAllowedTextChannels, setAnchorAllowedTextChannels] = React.useState(null);
  const [anchorElIgnoredRoles, setAnchorIgnoredRoles] = React.useState(null);
  const [anchorElAllowedRoles, setAnchorAllowedRoles] = React.useState(null);
  const [anchorElIgnoringCooldownRoles, setAnchorIgnoringCooldownRoles] = React.useState(null);
  const handleClickIgnoredTextChannels = (event) => {
    setAnchorIgnoredTextChannels(event.currentTarget);
  };
  const handleClickAllowedTextChannels = (event) => {
    setAnchorAllowedTextChannels(event.currentTarget);
  };
  const handleClickIgnoredRoles = (event) => {
    setAnchorIgnoredRoles(event.currentTarget);
  };
  const handleClickAllowedRoles = (event) => {
    setAnchorAllowedRoles(event.currentTarget);
  };
  const handleClickIgnoringCooldownRoles = (event) => {
    setAnchorIgnoringCooldownRoles(event.currentTarget);
  };
  const handleCloseIgnoredTextChannels = () => {
    setAnchorIgnoredTextChannels(null);
  };
  const handleCloseAllowedTextChannels = () => {
    setAnchorAllowedTextChannels(null);
  };
  const handleCloseIgnoredRoles = () => {
    setAnchorIgnoredRoles(null);
  };
  const handleCloseAllowedRoles = () => {
    setAnchorAllowedRoles(null);
  };
  const handleCloseIgnoringCooldownRoles = () => {
    setAnchorIgnoringCooldownRoles(null);
  };
  const toggleClickAllowedTextChannels1 = () => {keys++; setChipDataAllowedTextChannels((chips) => [...chips,{key:{keys},label:"ADMINISTRATOR"}])}

  const toggleClickAllowedTextChannels2 = () => {keys++; setChipDataAllowedTextChannels((chips) => [...chips,{key:{keys},label:"MODERATOR"}])}
  const toggleClickIgnoredTextChannels1 = () => {keys++; setChipDataIgnoredTextChannels((chips) => [...chips,{key:{keys},label:"ADMINISTRATOR"}])}

  const toggleClickIgnoredTextChannels2 = () => {keys++; setChipDataIgnoredTextChannels((chips) => [...chips,{key:{keys},label:"MODERATOR"}])}
  const toggleClickIgnoredRoles1 = () => {keys++; setChipDataIgnoredRoles((chips) => [...chips,{key:{keys},label:"ADMINISTRATOR"}])}

  const toggleClickIgnoredRoles2 = () => {keys++; setChipDataIgnoredRoles((chips) => [...chips,{key:{keys},label:"MODERATOR"}])}
  const toggleClickAllowedRoles1 = () => {keys++; setChipDataAllowedRoles((chips) => [...chips,{key:{keys},label:"ADMINISTRATOR"}])}

  const toggleClickAllowedRoles2 = () => {keys++; setChipDataAllowedRoles((chips) => [...chips,{key:{keys},label:"MODERATOR"}])}
  const toggleClickIgnoringCooldownRoles1 = () => {keys++; setChipDataIgnoringCooldownRoles((chips) => [...chips,{key:{keys},label:"ADMINISTRATOR"}])}

  const toggleClickIgnoringCooldownRoles2 = () => {keys++; setChipDataIgnoringCooldownRoles((chips) => [...chips,{key:{keys},label:"MODERATOR"}])}

  const handleDeleteIgnoredTextChannels = (chipToDelete) => () => {
    setChipDataIgnoredTextChannels((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };
  const handleDeleteAllowedTextChannels = (chipToDelete) => () => {
    setChipDataAllowedTextChannels((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };
  const handleDeleteIgnoredRoles = (chipToDelete) => () => {
    setChipDataIgnoredRoles((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };
  const handleDeleteAllowedRoles = (chipToDelete) => () => {
    setChipDataAllowedRoles((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };
  const handleDeleteIgnoringCooldownRoles = (chipToDelete) => () => {
    setChipDataIgnoringCooldownRoles((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };
  const [idCustomCommands,setIdCustomCommands] = React.useState(0);
  const [itemCustomCommands,setItemCustomCommands] = React.useState([]);
  const save = () => {
    setIdCustomCommands((id) => id+1);
    setOpen(false);
    setItemCustomCommands((itemCustomCommands) => [...itemCustomCommands,{ id:idCustomCommands, content: <div className="block-custom-commands">
    <div className="block-custom-commands-left">{document.getElementById("nameCommands").value}</div>
    <div className="block-custom-commands-rigth" style={{display:"flex"}}>
<button className="button-settings-commands-open" onClick={() => setOpen(true)}><FontAwesomeIcon icon={["fas", "cog"]} /></button>
<button className="button-settings-commands-open" onClick={() => removeItemCustomCommands(idCustomCommands)}><FontAwesomeIcon icon={["fas", "trash-alt"]} color="rgb(245, 82, 82)"/></button>
<label class="switch-minimal">
<input type="checkbox" defaultChecked={true} ></input>
<span class="slider-minimal"></span>
</label>
</div>
        </div>}])
  }
  const removeItemCustomCommands = (ids) => {
    setItemCustomCommands((reward) => reward.filter((reward) => reward.id !== ids));
     }
  
      return (
        <div className="main">
          <Backdrop className={classes.backdrop} open={open}>
            
            <div className="settings-command-edit">
              <div className="settings-command-edit-top">
               НАСТРОЙКА КОМАНДЫ
              </div>
              <div className="settings-command-edit-bottom">
                <div className="settings-text-razdel">ОСНОВНОЕ</div>
                <div><input type="text" autocomplete="off" id="nameCommands" placeholder="Название команды" className={classes.selectEmpty} maxLength="20"></input></div>
                <NativeSelect
          className={classes.selectEmpty}
          value={state.age}
          name="age"
          onChange={handleChange}
          inputProps={{ 'aria-label': 'age' }}
        >
          <option value={0}>Отправлять сообщение в текущий канал</option>
          <option value={10}># channel1</option>
          <option value={20}># channel2</option>
          <option value={30}># channel3</option>
        </NativeSelect>
        <div className="main-block">
         <div className="main-block-left">ИГНОРИРУЕМЫЕ ТЕКСТОВЫЕ КАНАЛЫ</div>
         <div className="main-block-right">
           </div>
           </div>
           <div className="main-block">
           <div>
      <Menu
        id="simple-menu"
        anchorEl={anchorElIgnoredTextChannels}
        keepMounted
        open={Boolean(anchorElIgnoredTextChannels)}
        onClose={handleCloseIgnoredTextChannels}
      >
        <MenuItem ><input type="checkbox" onClick={toggleClickIgnoredTextChannels1}></input>ADMINISTRATOR</MenuItem>
        <MenuItem ><input type="checkbox" onClick={toggleClickIgnoredTextChannels2}></input>MODERATOR</MenuItem>
      </Menu>
    </div>
    <Paper component="ul" className={classes.root}>
      {chipDataIgnoredTextChannels.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <li key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              onDelete={data.label === 'React' ? undefined : handleDeleteIgnoredTextChannels(data)}
              className={classes.chip}
            />
          </li>
        );
      })}
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickIgnoredTextChannels}>
        Open Menu
      </Button>
    </Paper>
         </div>
         <div className="main-block">
         <div className="main-block-left">РАЗРЕШЕННЫЕ ТЕКСТОВЫЕ КАНАЛЫ</div>
         <div className="main-block-right">
         </div>
         </div>
         <div className="main-block">
           <div>
      <Menu
        id="simple-menu"
        anchorEl={anchorElAllowedTextChannels}
        keepMounted
        open={Boolean(anchorElAllowedTextChannels)}
        onClose={handleCloseAllowedTextChannels}
      >
        <MenuItem ><input type="checkbox" onClick={toggleClickAllowedTextChannels1}></input>ADMINISTRATOR</MenuItem>
        <MenuItem ><input type="checkbox" onClick={toggleClickAllowedTextChannels2}></input>MODERATOR</MenuItem>
      </Menu>
    </div>
    <Paper component="ul" className={classes.root}>
      {chipDataAllowedTextChannels.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <li key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              onDelete={data.label === 'React' ? undefined : handleDeleteAllowedTextChannels(data)}
              className={classes.chip}
            />
          </li>
        );
      })}
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickAllowedTextChannels}>
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
        anchorEl={anchorElIgnoredRoles}
        keepMounted
        open={Boolean(anchorElIgnoredRoles)}
        onClose={handleCloseIgnoredRoles}
      >
        <MenuItem ><input type="checkbox" onClick={toggleClickIgnoredRoles1}></input>ADMINISTRATOR</MenuItem>
        <MenuItem ><input type="checkbox" onClick={toggleClickIgnoredRoles2}></input>MODERATOR</MenuItem>
      </Menu>
    </div>
    <Paper component="ul" className={classes.root}>
      {chipDataIgnoredRoles.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <li key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              onDelete={data.label === 'React' ? undefined : handleDeleteIgnoredRoles(data)}
              className={classes.chip}
            />
          </li>
        );
      })}
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickIgnoredRoles}>
        Open Menu
      </Button>
    </Paper>
         </div>
         <div className="main-block">
         <div className="main-block-left">РАЗРЕШЕННЫЕ РОЛИ</div>
         <div className="main-block-right">
         </div>
         </div>
         <div className="main-block">
           <div>
      <Menu
        id="simple-menu"
        anchorEl={anchorElAllowedRoles}
        keepMounted
        open={Boolean(anchorElAllowedRoles)}
        onClose={handleCloseAllowedRoles}
      >
        <MenuItem ><input type="checkbox" onClick={toggleClickAllowedRoles1}></input>ADMINISTRATOR</MenuItem>
        <MenuItem ><input type="checkbox" onClick={toggleClickAllowedRoles2}></input>MODERATOR</MenuItem>
      </Menu>
    </div>
    <Paper component="ul" className={classes.root}>
      {chipDataAllowedRoles.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <li key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              onDelete={data.label === 'React' ? undefined : handleDeleteAllowedRoles(data)}
              className={classes.chip}
            />
          </li>
        );
      })}
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickAllowedRoles}>
        Open Menu
      </Button>
    </Paper>
         </div>
         <div className="settings-text-razdel">ДЛИТЕЛЬНОСТЬ КУЛДАУНА</div>
         <div><input type="number" className={classes.selectEmpty } min={0} max={999999999} onChange={setNumberSecondCooldown}></input></div>
         <div className="main-block">
         <div className="main-block-left">ИГНОРИРУЮЩИЕ КУЛДАУН РОЛИ</div>
         <div className="main-block-right">
         </div>
         </div>
         <div className="main-block">
           <div>
      <Menu
        id="simple-menu"
        anchorEl={anchorElIgnoringCooldownRoles}
        keepMounted
        open={Boolean(anchorElIgnoringCooldownRoles)}
        onClose={handleCloseIgnoringCooldownRoles}
      >
        <MenuItem ><input type="checkbox" onClick={toggleClickIgnoringCooldownRoles1}></input>ADMINISTRATOR</MenuItem>
        <MenuItem ><input type="checkbox" onClick={toggleClickIgnoringCooldownRoles2}></input>MODERATOR</MenuItem>
      </Menu>
    </div>
    <Paper component="ul" className={classes.root}>
      {chipDataIgnoringCooldownRoles.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <li key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              onDelete={data.label === 'React' ? undefined : handleDeleteIgnoringCooldownRoles(data)}
              className={classes.chip}
            />
          </li>
        );
      })}
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickIgnoringCooldownRoles}>
        Open Menu
      </Button>
    </Paper>
         </div>
         <div className="settings-text-razdel">СООБЩЕНИЕ</div>
         <textarea className="textarea-edit-commands"></textarea>
         { openEmbed ? 
         (<div><div className="settings-text-razdel">
         <button className="knopka-toggle-picker-color" onClick={handleClickPickerColor }>Выбрать цвет</button>
         <Popover
        id={idPickerColor}
        open={openPickerColor}
        anchorEl={anchorElPickerColor}
        onClose={handleClosePickerColor}
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
      color={ pickerColor} 
      disableAlpha={true}
      onChangeComplete={(color) => {
        setPickerColor(color.hex)
      }}
      /></Typography>
      </Popover>
         <button className="knopka-hidden-embed" onClick={() => setOpenEmbed(false)}>СКРЫТЬ</button>
         </div>
       <div className="settings-text-razdel-embed" style={{borderLeftColor:pickerColor}}>
       <div>
         <input type="text" placeholder="Ссылка на иконку" className="input-type-text" autocomplete="off"></input>
         <input type="text" placeholder="Имя автора" className="input-type-text" style={{width:"40%"}} autocomplete="off"></input>
         <input type="text" placeholder="Ссылка на автора" className="input-type-text" autocomplete="off"></input>
       </div>
       <div>
         <input type="text" placeholder="Наименование" className="input-type-text" style={{width:"66.5%"}} autocomplete="off"></input>
         <input type="text" placeholder="Ссылка наименования" className="input-type-text" autocomplete="off"></input>
       </div>
       <div>
         <textarea className="textarea-edit-commands"></textarea>
       </div>
       <div>
         <input type="text" placeholder="Ссылка на полноразмерную картинку" className="input-type-text" style={{width:"45%"}} autocomplete="off"></input>
         <input type="text" placeholder="Ссылка на миниатюрную картинку" className="input-type-text" style={{width:"45%"}}autocomplete="off"></input>
       </div>
       <div>
         <input type="text" placeholder="Футер" className="input-type-text" autocomplete="off"></input>
         <input type="text" placeholder="Ссылка на иконку футера" className="input-type-text" autocomplete="off"></input>
         <input type="date" className="input-type-text" style={{width:"40%"}}></input>
       </div>
     </div></div>) : 
       <div style={{width:"100%"}}><button style={{backgroundColor:"rgb(59, 55, 55)",height:"50px",width:"90%",marginTop:"20px",marginLeft:"20px", outline:"none",cursor:"pointer"}} onClick={() => setOpenEmbed(true)}>ПОКАЗАТЬ КОНСТРУКТОР ШАБЛОНА</button></div>}
         
         
         <div className="button-bottom">
         <button className="save-settings-command-button" onClick={save}>Сохранить</button>
         <button className="cancel-settings-command-button" onClick={handleClose}>Отменить</button>
         </div>
                </div>
            </div>
           </Backdrop>
         <div className="main-top">ПОЛЬЗОВАТЕЛЬСКИЕ КОМАНДЫ
         <button style={{background:"none", outline:"none", cursor:"pointer", border:"none"}} onClick={handleToggle}><span style={{fontStyle:"italic"}}>+</span> Добавить</button>
         </div>
         <div className="main-bottom" style={{minHeight:"575px"}}>
         {itemCustomCommands.length !== 0 ? itemCustomCommands.map(item => (
        <div key={item.id}>{item.content}</div>
      )) : <div style={{paddingTop:"50%"}}>Кажется вы еще не создали ни одной пользовательской команды</div>}
         </div>
        </div>
      );
    }
  export default CustomCommands;