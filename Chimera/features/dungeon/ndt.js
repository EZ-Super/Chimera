import gui from "../../config"
import {getIsLeader} from "../../utils/party"

let current_floor = 0;
let master_or_normal = 0;

register("chat",(message,message1)=>{
    if(!gui.NDT) return;

    setTimeout(() => {  
        //ChatLib.chat(message1);
        if(master_or_normal==1)
            ChatLib.command("joindungeon catacombs "+current_floor );
        else if(master_or_normal ==0)
            ChatLib.command("joindungeon master_catacombs "+current_floor )
        else
            ChatLib.chat("&6[Rat] &4&lError join dungeon");
        }, gui.DT_time*1000);

}).setCriteria("${message}Team Score: ${message1}");


register("chat",(message,floor)=>{
    ChatLib.chat(floor);
    if(!gui.NDT) return;
    master_or_normal = 1;
    floor = floor.trim();
    current_floor = checkfloor(floor);

}).setCriteria("${message}The Catacombs - Floor ${floor}")
//                        The Catacombs - Floor III
register("chat",(message,floor)=>{
    if(!gui.NDT) return;
    master_or_normal = 0;
    floor = floor.trim();
    current_floor = checkfloor(floor);

}).setCriteria("${message}Master Mode Catacombs - Floor ${floor}")

function checkfloor(floor){
    if(floor == "I") return 1;
    else if(floor == "II") return 2;
    else if(floor == "III") return 3;
    else if(floor == "IV") return 4;
    else if(floor == "V") return 5;
    else if(floor == "VI") return 6;
    else if(floor == "VII") return 7;
}
