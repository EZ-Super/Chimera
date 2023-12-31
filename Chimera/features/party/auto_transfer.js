import gui from "../../config"
import {getPlayerName} from "../../utils/function"
import {RegisterEventListener} from "../../utils/EventLinster"


RegisterEventListener(()=>gui.AutoTransfer,
    register("chat",(p1,p2)=>{
        p1 = getPlayerName(p1);
        p2 = getPlayerName(p2);
        if(p1===Player.getName()){
            ChatLib.command("p transfer "+p2);
            ChatLib.chat("&6[Chimera] auto transfer party to"+p2);
        }
    }).setCriteria("The party was transferred to ${p1} by ${p2}")

)/*
register("chat",(p1,p2)=>{
    if(!gui.AutoTransfer) return;
    p1 = getPlayerName(p1);
    p2 = getPlayerName(p2);
    if(p1===Player.getName()){
        ChatLib.command("p transfer "+p2);
        ChatLib.chat("&6[Chimera] auto transfer party to"+p2);
    }
}).setCriteria("The party was transferred to ${p1} by ${p2}");
*/

RegisterEventListener(()=>gui.AutoTransfer,
    register("chat",(p1,p2)=>{
        p1 = getPlayerName(p1);
        p2 = getPlayerName(p2);
        if(p2 === Player.getName()){
            ChatLib.command("p transfer "+p1);
            ChatLib.chat("&6[Chimera] auto transfer party to"+p1);
        }
    }).setCriteria("${p1} has promoted ${p2} to Party Leader")
)
/*
register("chat",(p1,p2)=>{
    p1 = getPlayerName(p1);
    p2 = getPlayerName(p2);
    if(p2 === Player.getName()){
        ChatLib.command("p transfer "+p1);
        ChatLib.chat("&6[Chimera] auto transfer party to"+p1);
    }
}).setCriteria("${p1} has promoted ${p2} to Party Leader")*/