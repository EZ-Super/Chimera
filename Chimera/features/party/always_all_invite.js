import gui from "../../config"
import { getInParty,getIsLeader } from "../../utils/party";
import {getPlayerName} from "../../utils/function"

let pcontrol = false;

register("chat",(player,name)=>{
    if(!gui.allow_party_member_party_someone) return;
    name = name.trim();
    name = name.toLowerCase();
    player =getPlayerName(player);
    if(name=="me"){
        player = player.trim();
        ChatLib.chat("&6[Chimera]&b"+player+" want join party");
        ChatLib.command("p "+player);
    }
    else{
        name = name.trim();
        ChatLib.chat("&6[Chimera]&b"+player+"want party"+name);
        ChatLib.command("p "+name);
    }


}).setCriteria("From ${player}: !p ${name}");


register("chat",(player,name)=>{
    if(!gui.allow_party_member_party_someone) return;

    if(!getIsLeader() ) {
        ChatLib.chat("&6[Chimera]&e u r not leader");
        return;
    }
    name = name.trim();
    ChatLib.chat("&6[Chimera]&b"+player+" party "+name);
    ChatLib.command("p "+name);
    pcontrol = true;


    
}).setCriteria("Party > ${player}: !p ${name}")

register("chat",(player)=>{
    if(!gui.allwayspartyallinvite) return;
    if(!getIsLeader() ) {
        ChatLib.chat("&6[Chimera]&e u r not leader");
        return;
    }

    ChatLib.chat("&6[Chimera]&b"+player + " set allinvite");
    ChatLib.command("p setting allinvite");
}).setCriteria("Party > ${player}: !allinv");

register("chat",()=>{
    if(!pcontrol) return;
    ChatLib.command("pc this player is not online.");
    pcontrol = false;
}).setCriteria("You cannot invite that player since they're not online.")

register("chat",(player)=>{
    if(!gui.allow_party_member_party_someone)  return;

    ChatLib.chat("&6[Chimera] "+player+"&b&l want use p warp");
    ChatLib.command("p warp");
}).setCriteria("Party > ${player}: !p warp")

register("command",()=>{
    ChatLib.chat(getIsLeader());
}).setName("getleader");