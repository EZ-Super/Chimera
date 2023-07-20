let current_world;
let i=0;
import {UpdateRegisterEventListener} from "../utils/EventLinster"
function findZone(){
    let score = Scoreboard.getLines().find((line)=> line.getName().includes("⏣"));
    if(score == undefined) score = Scoreboard.getLines().find((line)=>line.getName().includes("ф"));
    return score==undefined?"None":score.getName().removeFormatting();
}


function findWorld(){
    if(i>20) return;
    i++;
    current_world = findZone();
    setTimeout(() => {
        if(current_world.includes("None")) findWorld();
        else{
            i=20;
            if(current_world.includes("⏣"))current_world=current_world.replace("⏣","");
            if(current_world.includes("ф"))current_world=current_world.replace("ф","");
            UpdateRegisterEventListener()
        }
    }, 1000);

}

export function getworld(){
    return current_world;
}

register("command",()=>{
    ChatLib.chat(current_world);
}).setName("getworld3");

register("worldLoad",()=>{
    i=0;
    findWorld();
    UpdateRegisterEventListener()
});