let time ;
let control =false ; 
import gui from  "../../config"
import { userData } from "../../utils/userdata";
import {DisplayRender} from "../../utils/Renderer"

register("chat",()=>{
    if(!gui.FireFreeze) return;
    control = true;
    time = new Date().getTime()+5000;
    setTimeout(()=>{
        time = 0;
    },5000);
}).setCriteria("[BOSS] The Professor: Oh? You found my Guardians' one weakness?")

register("renderOverlay",()=>{
    if(!gui.FireFreeze) return;
    if(!control) return;
    let CurrentTime = new Date().getTime();
    DisplayRender(userData.FF.x,userData.FF.y,userData.FF.scale,`Fire freeze : ${(time - CurrentTime)/1000}`);
    if(time-CurrentTime<0){
        control = false;
        time = 0;
    }
})