import gui from "../../config";
import {getPlayerName} from "../../utils/function"


let control= false ;

register("chat",(player)=>{
    if(!gui.frag_bot) return;
    player = getPlayerName(player).trim();
    if(control === false){
        control = true;
        ChatLib.command("p accept "+player);

        setTimeout(() => {
            ChatLib.command("p leave");
            control = false;
        }, 7000);
    }else {
        ChatLib.command("t "+ player + " in party now please wait one sec");
    }

    
}).setCriteria("&9&m---------------------------${*}&r&9\n&r${player} &r&ehas invited you to join their party!\n&r&eYou have &r&c60 &r&eseconds to accept. &r&6Click here to join!&r&9\n&r&9&m----------------------------${*}&r");