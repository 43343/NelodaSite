import React from "react";
import "./dashboard.css"
import Snackbar from '@material-ui/core/Snackbar';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open:false,
      open1:false,
    }
  }
  horizontal = "right";
  vertical = "bottom";
  handleClickSnackbar(){
    if(document.getElementById("prefix").value !== "" || document.getElementById("prefix").value !== "/"){
      this.setState({ open: true });
    }
  }
  save  () {
    this.setState({...this.state, open: false, open1: true });
  };
  handleCloseSnackbar1 ()  {
    this.setState({...this.state,  open1: false });
  };
    render() {
      return (
        <div className="main">
          <Snackbar
        anchorOrigin={{  vertical:this.vertical, horizontal:this.horizontal }}
        open={this.state.open}
        key={this.vertical + this.horizontal}
      >
        <button className="save-button" onClick={this.save.bind(this)}>Сохранить изменения</button>
        
        </Snackbar>
        <Snackbar
        anchorOrigin={{ vertical:this.vertical, horizontal:this.horizontal }}
        open={this.state.open1}
        onClose={this.handleCloseSnackbar1.bind(this)}
        message="Изминения сохранены успешно"
        key={this.vertical + this.horizontal}
      />
         <div className="main-top">ОСНОВНОЕ</div>
         <div className="main-bottom">
         <div className="main-block">
             <div className="main-block-left">ПРЕФИКС</div>
             <div className="main-block-right"><input id="prefix"type="text" defaultValue="!!" onInput={this.handleClickSnackbar.bind(this)}></input></div>
                 </div>
         <div className="main-block">
         <div className="main-block-left">ЦВЕТ СИСТЕМНЫХ СООБЩЕНИЙ</div>
         <div className="main-block-right"><input type="color" defaultValue="#0822E7" className="input-color" onInput={this.handleClickSnackbar.bind(this)}></input></div>
         </div>
         </div>
        </div>
      );
    }
  }
  export default Main;