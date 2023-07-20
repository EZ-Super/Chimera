import gui from "../../config"
import { getInParty,getIsLeader } from "../../utils/party";
import {getPlayerName} from "../../utils/function"
import {RegisterEventListener} from "../../utils/EventLinster"


let PControl = false;
RegisterEventListener(()=>gui.allow_party_member_party_someone,
    register("chat",(player,name)=>{
        name = name.trim();
        name = name.toLowerCase();
        player =getPlayerName(player);
        if(name==="me"){
            player = player.trim();
            ChatLib.chat("&6[Chimera]&b"+player+" want join party");
            ChatLib.command("p "+player);
        }
        else{
            name = name.trim();
            ChatLib.chat("&6[Chimera]&b"+player+"want party"+name);
            ChatLib.command("p "+name);
        }


    }).setCriteria("From ${player}: !p ${name}")

)
/*
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
*/

RegisterEventListener(()=>gui.allow_party_member_party_someone,
    register("chat",(player,name)=>{
        if(!getIsLeader() ) {
            ChatLib.chat("&6[Chimera]&e u r not leader");
            return;
        }
        name = name.trim();
        ChatLib.chat("&6[Chimera]&b"+player+" party "+name);
        ChatLib.command("p "+name);
        PControl = true;



    }).setCriteria("Party > ${player}: !p ${name}")

)
/*
register("chat",(player,name)=>{
    if(!gui.allow_party_member_party_someone) return;

    if(!getIsLeader() ) {
        ChatLib.chat("&6[Chimera]&e u r not leader");
        return;
    }
    name = name.trim();
    ChatLib.chat("&6[Chimera]&b"+player+" party "+name);
    ChatLib.command("p "+name);
    PControl = true;


    
}).setCriteria("Party > ${player}: !p ${name}")
*/

RegisterEventListener(()=>gui.allow_party_member_party_someone,
    register("chat",(player)=>{
        if(!getIsLeader() ) {
            ChatLib.chat("&6[Chimera]&e u r not leader");
            return;
        }

        ChatLib.chat("&6[Chimera]&b"+player + " set allinvite");
        ChatLib.command("p setting allinvite");
    }).setCriteria("Party > ${player}: !allinv")
)
/*
register("chat",(player)=>{
    if(!gui.AllowPartyAllInvite) return;
    if(!getIsLeader() ) {
        ChatLib.chat("&6[Chimera]&e u r not leader");
        return;
    }

    ChatLib.chat("&6[Chimera]&b"+player + " set allinvite");
    ChatLib.command("p setting allinvite");
}).setCriteria("Party > ${player}: !allinv");
*/

RegisterEventListener(()=>gui.allow_party_member_party_someone,
    register("chat",()=>{
        if(!PControl) return;
        ChatLib.command("pc this player is not online.");
        PControl = false;
    }).setCriteria("You cannot invite that player since they're not online.")
)
/*
register("chat",()=>{
    if(!PControl) return;
    ChatLib.command("pc this player is not online.");
    PControl = false;
}).setCriteria("You cannot invite that player since they're not online.")
*/

RegisterEventListener(()=>gui.allow_party_member_party_someone,
    register("chat",(player)=>{

        ChatLib.chat("&6[Chimera] "+player+"&b&l want use p warp");
        ChatLib.command("p warp");
    }).setCriteria("Party > ${player}: !p warp")
)

/*
register("chat",(player)=>{
    if(!gui.allow_party_member_party_someone)  return;

    ChatLib.chat("&6[Chimera] "+player+"&b&l want use p warp");
    ChatLib.command("p warp");
}).setCriteria("Party > ${player}: !p warp")

*/