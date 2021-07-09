import React from "react";
import "./premium.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {ReactComponent as BoostyTo} from "./boosty-to.svg"
import {ReactComponent as Paypal} from "./paypal.svg"
import {ReactComponent as Qiwi} from "./qiwi.svg"
import {ReactComponent as Youmoney} from "./youmoney.svg"
import {ReactComponent as BoostyToOrange} from "./boosty-to-orange.svg"
import {ReactComponent as Patreon} from "./patreon.svg"

class Premium extends React.Component {
  constructor(props){
    super(props);
    this.state =
      {
        value:0
      }
    }
    styleDirectly(){
      document.getElementById("directly").className="button-donate-active";
      document.getElementById("boosty").className="button-donate";
      document.getElementById("patreon").className="button-donate";
      document.getElementById("more").className="button-donate";
    }
    styleBoosty(){
      document.getElementById("directly").className="button-donate";
      document.getElementById("boosty").className="button-donate-active";
      document.getElementById("patreon").className="button-donate";
      document.getElementById("more").className="button-donate";
    }
    stylePatreon(){
      document.getElementById("directly").className="button-donate";
      document.getElementById("boosty").className="button-donate";
      document.getElementById("patreon").className="button-donate-active";
      document.getElementById("more").className="button-donate";
    }
    styleMore(){
      document.getElementById("directly").className="button-donate";
      document.getElementById("boosty").className="button-donate";
      document.getElementById("patreon").className="button-donate";
      document.getElementById("more").className="button-donate-active";
    }
    render() {
      return (
        <div>
          <h1>PREMIUM</h1>
        <div className="App-header-premium">
          <h1>Почему стоит выбрать Premium?</h1>
        <table>
<tr><th>сравнение планов</th><th className="center">бесплатно</th><th>premium</th></tr> 
<tr className="tr"><td>кастомный префикс</td><td className="center"><FontAwesomeIcon icon={["fas", "times"]} color="red"/></td><td><FontAwesomeIcon icon={["fas", "check"]} color="green"/></td></tr> 
<tr className="tr"><td>прослушивание музыки</td><td className="center"><FontAwesomeIcon icon={["fas", "times"]} color="red"/></td><td><FontAwesomeIcon icon={["fas", "check"]} color="green"/></td></tr> 
<tr className="tr"><td>использование викторины</td><td className="center"><FontAwesomeIcon icon={["fas", "check"]} color="green"/></td><td><FontAwesomeIcon icon={["fas", "check"]} color="green"/></td></tr> 
<tr className="tr"><td>выдача награды за викторину</td><td className="center"><FontAwesomeIcon icon={["fas", "times"]} color="red"/></td><td><FontAwesomeIcon icon={["fas", "check"]} color="green"/></td></tr> 
<tr className="tr"><td>использование пользовательских команд</td ><td className="center">10</td><td>30</td></tr> 
<tr className="tr"><td>настройка ранга пользователей</td><td className="center">частично</td><td><FontAwesomeIcon icon={["fas", "check"]} color="green"/></td></tr> 
<tr className="tr"><td>использование основных команд бота</td><td className="center"><FontAwesomeIcon icon={["fas", "check"]} color="green"/></td><td><FontAwesomeIcon icon={["fas", "check"]} color="green"/></td></tr> 
<tr className="tr"><td className="last">премиум поддержка на дискорд сервере</td><td className="center-last"><FontAwesomeIcon icon={["fas", "times"]} color="red"/></td><td className="last-right"><FontAwesomeIcon icon={["fas", "check"]} color="green"/></td></tr> 
</table>
<h1>Приобрести Premium</h1>
<div className="donate-premium">
  <span className="donate-left">
<button id="directly" className="button-donate-active" onClick={() => {this.setState({value:0}); this.styleDirectly()}}><span style={{paddingLeft:"5px"}}><FontAwesomeIcon icon={["fas", "credit-card"]}/></span><span style={{paddingLeft:"5px"}}>Напрямую</span></button>
<button id="boosty" className="button-donate" onClick={() => {this.setState({value:1}); this.styleBoosty()}}><span style={{paddingLeft:"5px"}}><BoostyTo height="16px" width="15px"/></span><span style={{verticalAlign:"top",paddingLeft:"5px"}}>Boosty.to</span></button>
<button id="patreon" className="button-donate" onClick={() => {this.setState({value:2}); this.stylePatreon()}}><span style={{paddingLeft:"5px"}}><FontAwesomeIcon icon={["fab", "patreon"]}/></span><span style={{paddingLeft:"5px"}}>Patreon</span></button>
<button id="more" className="button-donate" onClick={() => {this.setState({value:3}); this.styleMore()}}><span style={{paddingLeft:"5px"}}><FontAwesomeIcon icon={["fas", "hand-holding-usd"]}/></span><span style={{paddingLeft:"5px"}}>Другое</span></button>
  </span>
  { this.state.value === 0 ?
  <span className="directly-donate" >
    <div style={{display:"flex"}}><div className="qiwi-block">
      <div className="directly-left"><Qiwi height="50px" width="50px"/></div>
      <div className="directly-right">
        <div>73 руб./месяц на 2 сервера</div>
        <button className="button-qiwi">ПРИОБРЕСТИ</button>
      </div>
    </div>
    <div className="youmoney-block">
    <div className="directly-left"><Youmoney height="50px" width="50px"/></div>
      <div className="directly-right">
        <div>73 руб./месяц на 2 сервера</div>
        <button className="button-youmoney">ПРИОБРЕСТИ</button>
      </div>
    </div></div>
  </span> : undefined}
  { this.state.value === 1 ?
  <span className="boosty-donate">
    <div>
      <ol style={{textAlign:"left"}}>
        <li><a style={{color:"rgb(248, 151, 39)"}} href="https://boosty.to/">Зарегестрируйтесь</a> в Boosty</li>
        <li><a style={{color:"rgb(248, 151, 39)"}} href="https://boosty.to/app/settings/external-apps">Привяжите свою учетную запись Discord</a> к Boosty</li>
        <li><a style={{color:"rgb(248, 151, 39)"}} href="https://discord.gg/n4qnKesupP">Присоединитесь к серверу сообщества</a> Neloda</li>
        <li>Подпишитесь по кнопочке ниже</li>
        <li>Подождите 10-15 минут пока бот обновит статус подписки</li>
        <li>Воспользуйтесь командой <font color="blue">премиум</font> на нужном сервере</li>
      </ol>
    </div>
    <div style={{width:"100%",justifyContent:"center",alignItems:"center",display:"flex"}}>
    <div className="boosty-block">
    <div className="directly-left"><BoostyToOrange height="50px" width="50px"/></div>
      <div className="directly-right">
        <button className="button-boosty">ПОДПИСАТЬСЯ</button>
      </div>
    </div>
    </div>
  </span> : undefined}
  { this.state.value === 2 ?
  <span className="boosty-donate">
    <div>
      <ol style={{textAlign:"left"}}>
        <li><a style={{color:"rgb(196, 49, 49)"}} href="https://www.patreon.com/signup">Зарегестрируйтесь</a> на Patreon</li>
        <li><a style={{color:"rgb(196, 49, 49)"}} href="https://www.patreon.com/settings/apps">Привяжите свою учетную запись Discord</a> к Patreon</li>
        <li>Подпишитесь по кнопочке ниже</li>
        <li>Подождите 10-15 минут пока бот обновит статус подписки</li>
        <li>Воспользуйтесь командой <font color="blue">премиум</font> на нужном сервере</li>
      </ol>
    </div>
    <div style={{width:"100%",justifyContent:"center",alignItems:"center",display:"flex"}}>
    <div className="patreon-block">
    <div className="directly-left"><Patreon height="50px" width="50px"/></div>
      <div className="directly-right">
        <button className="button-patreon">ПОДПИСАТЬСЯ</button>
      </div>
    </div>
    </div>
  </span> : undefined}
  { this.state.value === 3 ?
  <span className="directly-donate">
    <div className="block-more-donate" >
      <div>
        Также вы можете поблагодорить нас за наши труды одним из следующих способов, но имейте ввиду что при оплате этими способами выдать premium не придостовляется возможным
      </div>
      <div style={{display:"flex",width:"100%",alignItems:"center",marginTop:"25px",justifyContent:"center"}}><div className="paypal-block">
      <div className="directly-left"><Paypal height="50px" width="50px"/></div>
      <div className="directly-right">
        <button className="button-paypal">ПОДДЕРЖАТЬ</button>
      </div>
    </div>
    <div className="youmoney-block">
    <div className="directly-left"><Youmoney height="50px" width="50px"/></div>
      <div className="directly-right">
        <button className="button-youmoney">ПОДДЕРЖАТЬ</button>
      </div>
    </div></div>
    </div>
  </span>: undefined}
</div>
      </div> 
      </div>
      );
    }
  }
  export default Premium;