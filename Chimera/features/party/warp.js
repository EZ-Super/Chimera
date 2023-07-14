import {getPlayerName} from "../../utils/function";
import {getIsLeader} from "../../utils/party"
import {gui} from "../../config";

register("chat",(player)=>{
    if(!gui.allow_party_member_party_someone) return;
    if(!getIsLeader()) return;
    ChatLib.chat(getPlayerName(player) + "使用了warp 技能")
    ChatLib.command("p warp");


}).setCriteria("Party > ${player}: !p warp");