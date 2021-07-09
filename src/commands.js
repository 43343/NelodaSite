import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
class Commands extends React.Component {
  constructor(props){
  super(props);
  this.TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  this.state = {
    value:0
  }
  }
  TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  stylesEnterteinment(){
    document.getElementById("enterteinment").className="commands-type-click-open";
    document.getElementById("music").className="commands-type-click";
    document.getElementById("quiz").className="commands-type-click";
    document.getElementById("animals").className="commands-type-click";
    document.getElementById("Moderation").className="commands-type-click";
   document.getElementById("Information").className="commands-type-click";
   document.getElementById("Steam").className="commands-type-click";
   document.getElementById("Utility").className="commands-type-click";
 }
 stylesMusic(){
   document.getElementById("enterteinment").className="commands-type-click";
   document.getElementById("music").className="commands-type-click-open";
   document.getElementById("quiz").className="commands-type-click";
   document.getElementById("animals").className="commands-type-click";
   document.getElementById("Moderation").className="commands-type-click";
   document.getElementById("Information").className="commands-type-click";
   document.getElementById("Steam").className="commands-type-click";
   document.getElementById("Utility").className="commands-type-click";
}
stylesQuiz(){
   document.getElementById("enterteinment").className="commands-type-click";
   document.getElementById("music").className="commands-type-click";
   document.getElementById("quiz").className="commands-type-click-open";
   document.getElementById("animals").className="commands-type-click";
   document.getElementById("Moderation").className="commands-type-click";
   document.getElementById("Information").className="commands-type-click";
   document.getElementById("Steam").className="commands-type-click";
   document.getElementById("Utility").className="commands-type-click";
}
stylesAnimals(){
   document.getElementById("enterteinment").className="commands-type-click";
   document.getElementById("music").className="commands-type-click";
   document.getElementById("quiz").className="commands-type-click";
   document.getElementById("animals").className="commands-type-click-open";
   document.getElementById("Moderation").className="commands-type-click";
   document.getElementById("Information").className="commands-type-click";
   document.getElementById("Steam").className="commands-type-click";
   document.getElementById("Utility").className="commands-type-click";
}
stylesModeration(){
   document.getElementById("enterteinment").className="commands-type-click";
   document.getElementById("music").className="commands-type-click";
   document.getElementById("quiz").className="commands-type-click";
   document.getElementById("animals").className="commands-type-click";
   document.getElementById("Moderation").className="commands-type-click-open";
   document.getElementById("Information").className="commands-type-click";
   document.getElementById("Steam").className="commands-type-click";
   document.getElementById("Utility").className="commands-type-click";
}
stylesInformation(){
   document.getElementById("enterteinment").className="commands-type-click";
   document.getElementById("music").className="commands-type-click";
   document.getElementById("quiz").className="commands-type-click";
   document.getElementById("animals").className="commands-type-click";
   document.getElementById("Moderation").className="commands-type-click";
   document.getElementById("Information").className="commands-type-click-open";
   document.getElementById("Steam").className="commands-type-click";
   document.getElementById("Utility").className="commands-type-click";
}
stylesSteam(){
   document.getElementById("enterteinment").className="commands-type-click";
   document.getElementById("music").className="commands-type-click";
   document.getElementById("quiz").className="commands-type-click";
   document.getElementById("animals").className="commands-type-click";
   document.getElementById("Moderation").className="commands-type-click";
   document.getElementById("Information").className="commands-type-click";
   document.getElementById("Steam").className="commands-type-click-open";
   document.getElementById("Utility").className="commands-type-click";
}
stylesUtility(){
   document.getElementById("enterteinment").className="commands-type-click";
   document.getElementById("music").className="commands-type-click";
   document.getElementById("quiz").className="commands-type-click";
   document.getElementById("animals").className="commands-type-click";
   document.getElementById("Moderation").className="commands-type-click";
   document.getElementById("Information").className="commands-type-click";
   document.getElementById("Steam").className="commands-type-click";
   document.getElementById("Utility").className="commands-type-click-open";
}
    render() {
      return (
        <div>
        <h1>КОМАНДЫ</h1>
        <div className="App-header-commands">
          <div className="main" style={{width:"100%"}}>
           <div style={{textAlign:"center", borderBottom:"2px groove black"}}>
             <button className="commands-type-click-open" id="enterteinment" onClick={() => {this.setState({value:0}); this.stylesEnterteinment()}}>Развлечения</button>
             <button className="commands-type-click" id="music" onClick={() => {this.setState({value:1}); this.stylesMusic()}}>Музыка</button>
             <button className="commands-type-click" id="quiz" onClick={() => {this.setState({value:2}); this.stylesQuiz()}}>Викторина</button>
             <button className="commands-type-click" id="animals" onClick={() => {this.setState({value:3}); this.stylesAnimals()}}>Питомцы</button>
             <button className="commands-type-click" id="Moderation" onClick={() => {this.setState({value:4}); this.stylesModeration()}}>Модерация</button>
             <button className="commands-type-click" id="Information" onClick={() => {this.setState({value:5}); this.stylesInformation()}}>Информация</button>
             <button className="commands-type-click" id="Steam" onClick={() => {this.setState({value:6}); this.stylesSteam()}}>Steam</button>
             <button className="commands-type-click" id="Utility" onClick={() => {this.setState({value:7}); this.stylesUtility()}}>Утилиты</button>
           </div>
           <div style={{textAlign:"left", borderBottom:"2px groove black", display:"flex"}}>
           <a href="/" className="a-link"><div className="icon-question-background"><FontAwesomeIcon icon={["fas", "question"]} className="icon-question"/></div></a><div className="documentation-command">для того чтобы ознакомится с работой комманд перейдите по <a href="/">ссылке</a></div>
           </div>
           <div className="commands-block-container">
      <this.TabPanel value={this.state.value} index={0}>
      <div className="commands-block">
               <div>
                  монетка
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block1">
                <div> Бот подбросит монетку. Какая сторона выпадет, решать только ему</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
            <div className="commands-block">
               <div>
                  шар
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block2">
                <div> Спроси у него и он ответ. Возможно даже расскажет кто ты есть</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
            <div className="commands-block" >
               <div>
                  кнб
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block3">
                <div> Сыграйте с ботом в игру камень, ножницы , бумага. Вас обязательно побьют либо камнем, либо ножницами, либо бумагой</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
      </this.TabPanel>
      <this.TabPanel value={this.state.value} index={1}>
      <div className="commands-block">
               <div>
                  плей
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block4">
                <div> Бот придет к вам в голосовой канал петь композицию своим прекрасным голосом</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
            <div className="commands-block">
               <div>
                  скип
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block5">
                <div> Бот начнет петь следующую композицию из очереди</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
            <div className="commands-block">
               <div>
                  очередь
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block6">
                <div> Бот расскажет вам о планах на будущие композиции</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
            <div className="commands-block">
               <div>
                  перемешать
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block7">
                <div> Бот подумает и возможно переформирует список будущих композиций</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
            <div className="commands-block">
               <div>
                  текущая
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block8">
                <div> Бот расскажет вам о тайном названии композиции, которую он сейчас воспроизводит</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
            <div className="commands-block">
               <div>
                  повтор
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block9">
                <div> Бот будет надоедать вам одними и теми же песнями пока вам это не надоест</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
            <div className="commands-block">
               <div>
                  пауза
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block10">
                <div> Бот закроет свой рот на какое-то время специально для вас</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
            <div className="commands-block">
               <div>
                  старт
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block11">
                <div>Бот подразамнет свой голос и  продолжит петь</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
            <div className="commands-block">
               <div>
                  стоп
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block12">
                <div> Бот прекратит петь и уйдет от вас, больше вы его никогда не увидите</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
            <div className="commands-block">
               <div>
                  громкость
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block13">
                <div> Бот станет петь тише, а возможно и громче</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
            <div className="commands-block">
               <div>
                  сюда
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block14">
                <div> Бот перейдет в тот канал, в котрый его позвали</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
      </this.TabPanel>
      <this.TabPanel value={this.state.value} index={2}>
      <div className="commands-block">
               <div>
                  quizstart
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block15">
                <div> Да начнется состязание. Кто же выйдет победителем?</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
            <div className="commands-block">
               <div>
                  quizstop
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block16">
                <div> Викторина закончена. Победители оглашены. Все расходимся по домам</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
      </this.TabPanel>
      <this.TabPanel value={this.state.value} index={3}>
      <div className="commands-block">
               <div>
                  кот
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block17">
                <div> Эта команда выдаст вам фотографию того самого любимого животного бота</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
            <div className="commands-block">
               <div>
                  пес
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block18">
                <div> Ну погуглит, ну поищет, может быть чтото да найдет</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
            <div className="commands-block">
               <div>
                  лиса
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block19">
                <div> Он не хочет чтоб его съели как колобка, но искать придется</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
            <div className="commands-block">
               <div>
                  волк
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block20">
                <div> Однажды ему рассказывали про это очень-очень страшное чудовище. Но наш бот их не боится, он добудет его и принесет живьем</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
            <div className="commands-block">
               <div>
                  заяц
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block21">
                <div> Для вас бот и сам станет зайчиком</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
      </this.TabPanel>
      <this.TabPanel value={this.state.value} index={4}>
      <div className="commands-block">
               <div>
                  бан
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block22">
                <div> Бот выганет человека с сервера, и больше никогда его не пустит обратно</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
            <div className="commands-block">
               <div>
                  разбан
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block23">
                <div> Бот даст право существовать на сервере этому человеку</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
            <div className="commands-block">
               <div>
                  кик
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block24">
                <div> Бот выганет человека с сервера</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
            <div className="commands-block">
               <div>
                  мьют
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block25">
                <div> Бот закроет рот плохишу</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
            <div className="commands-block">
               <div>
                  размьют
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block26">
                <div> Бот разрешит говорить этому человеку на сервере</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
            <div className="commands-block">
               <div>
                  пред
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block27">
                <div> Кому-то вручат обвинения</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
            <div className="commands-block">
               <div>
                  преды
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block28">
                <div> Таак, посмотрим все его греховные деяния</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
            <div className="commands-block">
               <div>
                  снятьпред
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block29">
                <div> Ладно, я прощу тебе это, но больше так не делай</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
            <div className="commands-block">
               <div>
                  сброспред
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block30">
                <div> Я со всех сниму обвинения</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
      </this.TabPanel>
      <this.TabPanel value={this.state.value} index={5}>
      <div className="commands-block">
               <div>
                  ранг
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block31">
                <div> Эта команда хранит в себе все ранги этого сервера. Она покажет вам любой из них если её попросить</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
            <div className="commands-block">
               <div>
                  аватар
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block32">
                <div> Бот станет зеркалом для того чтобы вы увидели свое лицо</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
      </this.TabPanel>
      <this.TabPanel value={this.state.value} index={6}>
        <div className="commands-block">
               <div>
                  рандстим
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block33">
                <div> Выдаст любую игру из стим силой магии считалочки</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
            <div className="commands-block">
               <div>
                  стимюзер
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block34">
                <div> Подает в розыск на аккаунт стим. Выдаст всю необходимую информацию об найденом аккаунте</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
            <div className="commands-block">
               <div>
                  стим
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block35">
                <div> Находит любую игру в стиме, ни одна из игр не спрячется от этой команды</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
            </this.TabPanel>
            <this.TabPanel value={this.state.value} index={7}>
            <div className="commands-block">
               <div>
                  ранд
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block36">
                <div> Бот выдаст вам любое число из заданного опозона чисел</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
            <div className="commands-block">
               <div>
                  вычислить
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block37">
                <div> Бот временно станет математиком специально для вас</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
            <div className="commands-block">
               <div>
                  опрос
               </div>
               <div className="commands-opisanie-no-border-bottom" id="block38">
                <div> Бот создаст опрос исходя из ваших предпочтений</div>
               </div>
               <div className="commands-settings-bottom">
               </div>
            </div>
            </this.TabPanel>
           </div>
         </div>
         </div>
      </div> 
      );
    }
  }
  export default Commands;