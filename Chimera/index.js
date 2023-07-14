import gui from "./config";
import { userData } from "./utils/userdata";

import "./utils/MiminKilled";
import "./features/party/always_all_invite";
import "./features/party/auto_transfer";
import "./world/world";
import "./features/dungeon/dungeon_pet_check"
import "./features/frag_bot/frag_bot";
import "./features/dungeon/hp_warn";
import "./features/dungeon/hp_warn";
import "./features/dungeon/ndt";
import "./features/other/powerorb";
import "./utils/Renderer"
import "./features/other/current_time"
//=============================================
import "./features/test/test"
//==================================================================
let Mod_Name = "Chimera";
//==================================================================


userData.autosave();

//ChatLib.chat("&r&r&b&m--------------------------------------------------------------------------------");
ChatLib.chat("&6["+Mod_Name+"] &eload");
ChatLib.chat("&bmade by IN");
ChatLib.chat("&bif u have any questions, please send discord o_in");
//ChatLib.chat("&r&r&b&m--------------------------------------------------------------------------------");




if(userData.firstUse){
    setTimeout(() => {
        ChatLib.chat("&6["+Mod_Name+"&6]&bWelcome to use "+Mod_Name+" mod")
    }, 1000);
    userData.firstUse = false; //若不想每次都顯示 將此行改成false
}

/*
register("chat", () => {
    ChatLib.chat("someone send message");
  }).setCriteria("${message} ${player}: ${message}");
*/
register("command",(...args)=>{
    command1 = args[0] == undefined? undefined:args[0].toLowerCase();
    command2 = args[1] == undefined? undefined:args[2].toLowerCase();

    if(command1 == undefined && command2 == undefined)
        gui.openGUI();
    else if(command1 == "help"){
        ChatLib.chat("&6&l----------------------Welcome use Chimera Mod----------------------");
        ChatLib.chat("&b1.Party");
        ChatLib.chat("&ballinvite setting : !allinv");
        ChatLib.chat("&bp someone:!p {ign}");
        ChatLib.chat("&bAuto transfer");
        ChatLib.chat("&b other use /Chimera ");
    }
}).setCommandName("Chimera");




//ChatLib.chat("&r&r&b&m--------------------------------------------------------------------------------");
ChatLib.chat("&6["+Mod_Name+"&6] &eChimera loaded");
//ChatLib.chat("&r&r&b&m--------------------------------------------------------------------------------");