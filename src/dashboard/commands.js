import React from "react";
import "./dashboard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};



function Commands  (){
  const [value, setValue] = React.useState(0);
    const stylesEnterteinment = () =>{
       document.getElementById("enterteinment").className="commands-type-click-open";
       document.getElementById("music").className="commands-type-click";
       document.getElementById("quiz").className="commands-type-click";
       document.getElementById("animals").className="commands-type-click";
       document.getElementById("Moderation").className="commands-type-click";
      document.getElementById("Information").className="commands-type-click";
      document.getElementById("Steam").className="commands-type-click";
      document.getElementById("Utility").className="commands-type-click";
    }
    const stylesMusic = () =>{
      document.getElementById("enterteinment").className="commands-type-click";
      document.getElementById("music").className="commands-type-click-open";
      document.getElementById("quiz").className="commands-type-click";
      document.getElementById("animals").className="commands-type-click";
      document.getElementById("Moderation").className="commands-type-click";
      document.getElementById("Information").className="commands-type-click";
      document.getElementById("Steam").className="commands-type-click";
      document.getElementById("Utility").className="commands-type-click";
   }
   const stylesQuiz = () =>{
      document.getElementById("enterteinment").className="commands-type-click";
      document.getElementById("music").className="commands-type-click";
      document.getElementById("quiz").className="commands-type-click-open";
      document.getElementById("animals").className="commands-type-click";
      document.getElementById("Moderation").className="commands-type-click";
      document.getElementById("Information").className="commands-type-click";
      document.getElementById("Steam").className="commands-type-click";
      document.getElementById("Utility").className="commands-type-click";
   }
   const stylesAnimals = () =>{
      document.getElementById("enterteinment").className="commands-type-click";
      document.getElementById("music").className="commands-type-click";
      document.getElementById("quiz").className="commands-type-click";
      document.getElementById("animals").className="commands-type-click-open";
      document.getElementById("Moderation").className="commands-type-click";
      document.getElementById("Information").className="commands-type-click";
      document.getElementById("Steam").className="commands-type-click";
      document.getElementById("Utility").className="commands-type-click";
   }
   const stylesModeration = () =>{
      document.getElementById("enterteinment").className="commands-type-click";
      document.getElementById("music").className="commands-type-click";
      document.getElementById("quiz").className="commands-type-click";
      document.getElementById("animals").className="commands-type-click";
      document.getElementById("Moderation").className="commands-type-click-open";
      document.getElementById("Information").className="commands-type-click";
      document.getElementById("Steam").className="commands-type-click";
      document.getElementById("Utility").className="commands-type-click";
   }
   const stylesInformation = () =>{
      document.getElementById("enterteinment").className="commands-type-click";
      document.getElementById("music").className="commands-type-click";
      document.getElementById("quiz").className="commands-type-click";
      document.getElementById("animals").className="commands-type-click";
      document.getElementById("Moderation").className="commands-type-click";
      document.getElementById("Information").className="commands-type-click-open";
      document.getElementById("Steam").className="commands-type-click";
      document.getElementById("Utility").className="commands-type-click";
   }
   const stylesSteam = () =>{
      document.getElementById("enterteinment").className="commands-type-click";
      document.getElementById("music").className="commands-type-click";
      document.getElementById("quiz").className="commands-type-click";
      document.getElementById("animals").className="commands-type-click";
      document.getElementById("Moderation").className="commands-type-click";
      document.getElementById("Information").className="commands-type-click";
      document.getElementById("Steam").className="commands-type-click-open";
      document.getElementById("Utility").className="commands-type-click";
   }
   const stylesUtility = () =>{
      document.getElementById("enterteinment").className="commands-type-click";
      document.getElementById("music").className="commands-type-click";
      document.getElementById("quiz").className="commands-type-click";
      document.getElementById("animals").className="commands-type-click";
      document.getElementById("Moderation").className="commands-type-click";
      document.getElementById("Information").className="commands-type-click";
      document.getElementById("Steam").className="commands-type-click";
      document.getElementById("Utility").className="commands-type-click-open";
   }
   const stylesBlock = ({target},id) =>
   {
      console.log(target.name)
      target.checked ? document.getElementById(target.name).className="commands-opisanie" : document.getElementById(target.name).className="commands-opisanie-off";

   }
      return (
        <div className="main" style={{width:"100%"}}>
         <div className="main-top">КОМАНДЫ</div>
         <div className="main-bottom">
           <div style={{textAlign:"left", borderBottom:"2px groove black"}}>
             <button className="commands-type-click-open" id="enterteinment" onClick={() => {setValue(0); stylesEnterteinment()}}>Развлечения</button>
             <button className="commands-type-click" id="music" onClick={() => {setValue(1); stylesMusic()}}>Музыка</button>
             <button className="commands-type-click" id="quiz" onClick={() => {setValue(2); stylesQuiz()}}>Викторина</button>
             <button className="commands-type-click" id="animals" onClick={() => {setValue(3); stylesAnimals()}}>Питомцы</button>
             <button className="commands-type-click" id="Moderation" onClick={() => {setValue(4); stylesModeration()}}>Модерация</button>
             <button className="commands-type-click" id="Information" onClick={() => {setValue(5); stylesInformation()}}>Информация</button>
             <button className="commands-type-click" id="Steam" onClick={() => {setValue(6); stylesSteam()}}>Steam</button>
             <button className="commands-type-click" id="Utility" onClick={() => {setValue(7); stylesUtility()}}>Утилиты</button>
           </div>
           <div className="commands-block-container">
      <TabPanel value={value} index={0}>
      <div className="commands-block">
               <div>
                  монетка
               </div>
               <div className="commands-opisanie" id="block1">
                <div> Бот подбросит монетку. Какая сторона выпадет, решать только ему</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block1"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
            <div className="commands-block">
               <div>
                  шар
               </div>
               <div className="commands-opisanie" id="block2">
                <div> Спроси у него и он ответ. Возможно даже расскажет кто ты есть</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block2"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
            <div className="commands-block" >
               <div>
                  кнб
               </div>
               <div className="commands-opisanie" id="block3">
                <div> Сыграйте с ботом в игру камень, ножницы , бумага. Вас обязательно побьют либо камнем, либо ножницами, либо бумагой</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block3"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="commands-block">
               <div>
                  плей
               </div>
               <div className="commands-opisanie" id="block4">
                <div> Бот придет к вам в голосовой канал петь композицию своим прекрасным голосом</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block4"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
            <div className="commands-block">
               <div>
                  скип
               </div>
               <div className="commands-opisanie" id="block5">
                <div> Бот начнет петь следующую композицию из очереди</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block5"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
            <div className="commands-block">
               <div>
                  очередь
               </div>
               <div className="commands-opisanie" id="block6">
                <div> Бот расскажет вам о планах на будущие композиции</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block6"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
            <div className="commands-block">
               <div>
                  перемешать
               </div>
               <div className="commands-opisanie" id="block7">
                <div> Бот подумает и возможно переформирует список будущих композиций</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block7"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
            <div className="commands-block">
               <div>
                  текущая
               </div>
               <div className="commands-opisanie" id="block8">
                <div> Бот расскажет вам о тайном названии композиции, которую он сейчас воспроизводит</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block8"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
            <div className="commands-block">
               <div>
                  повтор
               </div>
               <div className="commands-opisanie" id="block9">
                <div> Бот будет надоедать вам одними и теми же песнями пока вам это не надоест</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block9"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
            <div className="commands-block">
               <div>
                  пауза
               </div>
               <div className="commands-opisanie" id="block10">
                <div> Бот закроет свой рот на какое-то время специально для вас</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block10"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
            <div className="commands-block">
               <div>
                  старт
               </div>
               <div className="commands-opisanie" id="block11">
                <div>Бот подразамнет свой голос и  продолжит петь</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block11"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
            <div className="commands-block">
               <div>
                  стоп
               </div>
               <div className="commands-opisanie" id="block12">
                <div> Бот прекратит петь и уйдет от вас, больше вы его никогда не увидите</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block12"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
            <div className="commands-block">
               <div>
                  громкость
               </div>
               <div className="commands-opisanie" id="block13">
                <div> Бот станет петь тише, а возможно и громче</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block13"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
            <div className="commands-block">
               <div>
                  сюда
               </div>
               <div className="commands-opisanie" id="block14">
                <div> Бот перейдет в тот канал, в котрый его позвали</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block14"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className="commands-block">
               <div>
                  quizstart
               </div>
               <div className="commands-opisanie" id="block15">
                <div> Да начнется состязание. Кто же выйдет победителем?</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block15"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
            <div className="commands-block">
               <div>
                  quizstop
               </div>
               <div className="commands-opisanie" id="block16">
                <div> Викторина закончена. Победители оглашены. Все расходимся по домам</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block16"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div className="commands-block">
               <div>
                  кот
               </div>
               <div className="commands-opisanie" id="block17">
                <div> Эта команда выдаст вам фотографию того самого любимого животного бота</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block17"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
            <div className="commands-block">
               <div>
                  пес
               </div>
               <div className="commands-opisanie" id="block18">
                <div> Ну погуглит, ну поищет, может быть чтото да найдет</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block18"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
            <div className="commands-block">
               <div>
                  лиса
               </div>
               <div className="commands-opisanie" id="block19">
                <div> Он не хочет чтоб его съели как колобка, но искать придется</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block19"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
            <div className="commands-block">
               <div>
                  волк
               </div>
               <div className="commands-opisanie" id="block20">
                <div> Однажды ему рассказывали про это очень-очень страшное чудовище. Но наш бот их не боится, он добудет его и принесет живьем</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block20"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
            <div className="commands-block">
               <div>
                  заяц
               </div>
               <div className="commands-opisanie" id="block21">
                <div> Для вас бот и сам станет зайчиком</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block21"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div className="commands-block">
               <div>
                  бан
               </div>
               <div className="commands-opisanie" id="block22">
                <div> Бот выганет человека с сервера, и больше никогда его не пустит обратно</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block22"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
            <div className="commands-block">
               <div>
                  разбан
               </div>
               <div className="commands-opisanie" id="block23">
                <div> Бот даст право существовать на сервере этому человеку</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block23"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
            <div className="commands-block">
               <div>
                  кик
               </div>
               <div className="commands-opisanie" id="block24">
                <div> Бот выганет человека с сервера</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block24"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
            <div className="commands-block">
               <div>
                  мьют
               </div>
               <div className="commands-opisanie" id="block25">
                <div> Бот закроет рот плохишу</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block25"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
            <div className="commands-block">
               <div>
                  размьют
               </div>
               <div className="commands-opisanie" id="block26">
                <div> Бот разрешит говорить этому человеку на сервере</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block26"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
            <div className="commands-block">
               <div>
                  пред
               </div>
               <div className="commands-opisanie" id="block27">
                <div> Кому-то вручат обвинения</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block27"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
            <div className="commands-block">
               <div>
                  преды
               </div>
               <div className="commands-opisanie" id="block28">
                <div> Таак, посмотрим все его греховные деяния</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block28"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
            <div className="commands-block">
               <div>
                  снятьпред
               </div>
               <div className="commands-opisanie" id="block29">
                <div> Ладно, я прощу тебе это, но больше так не делай</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block29"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
            <div className="commands-block">
               <div>
                  сброспред
               </div>
               <div className="commands-opisanie" id="block30">
                <div> Я со всех сниму обвинения</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block30"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <div className="commands-block">
               <div>
                  ранг
               </div>
               <div className="commands-opisanie" id="block31">
                <div> Эта команда хранит в себе все ранги этого сервера. Она покажет вам любой из них если её попросить</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block31"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
            <div className="commands-block">
               <div>
                  аватар
               </div>
               <div className="commands-opisanie" id="block32">
                <div> Бот станет зеркалом для того чтобы вы увидели свое лицо</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block32"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <div className="commands-block">
               <div>
                  рандстим
               </div>
               <div className="commands-opisanie" id="block33">
                <div> Выдаст любую игру из стим силой магии считалочки</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block33"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
            <div className="commands-block">
               <div>
                  стимюзер
               </div>
               <div className="commands-opisanie" id="block34">
                <div> Подает в розыск на аккаунт стим. Выдаст всю необходимую информацию об найденом аккаунте</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block34"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
            <div className="commands-block">
               <div>
                  стим
               </div>
               <div className="commands-opisanie" id="block35">
                <div> Находит любую игру в стиме, ни одна из игр не спрячется от этой команды</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block35"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
            </TabPanel>
            <TabPanel value={value} index={7}>
            <div className="commands-block">
               <div>
                  ранд
               </div>
               <div className="commands-opisanie" id="block36">
                <div> Бот выдаст вам любое число из заданного опозона чисел</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block36"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
            <div className="commands-block">
               <div>
                  вычислить
               </div>
               <div className="commands-opisanie" id="block37">
                <div> Бот временно станет математиком специально для вас</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block37"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
            <div className="commands-block">
               <div>
                  опрос
               </div>
               <div className="commands-opisanie" id="block38">
                <div> Бот создаст опрос исходя из ваших предпочтений</div>
               </div>
               <div className="commands-settings-bottom">
                 <div className="commands-settings-bottom-left"><label class="switch-minimal">
  <input type="checkbox" defaultChecked={true} onChange={stylesBlock} name="block38"></input>
  <span class="slider-minimal"></span>
</label></div>
                 <div className="commands-settings-bottom-right"><button className="button-settings-commands-open"><FontAwesomeIcon icon={["fas", "cog"]} /></button></div>
               </div>
            </div>
            </TabPanel>
           </div>
         </div>
         </div>
      );
    }
  export default Commands;