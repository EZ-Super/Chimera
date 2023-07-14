import gui from "./config";
import { userData } from "./utils/userdata";


import "./world/world";

import "./utils/Renderer"
//frag bot
import "./features/frag_bot/frag_bot";
//party 
import "./features/party/always_all_invite";
import "./features/party/auto_transfer";
import "./features/dungeon/dungeon_pet_check"
//dungeon 
import "./features/dungeon/MiminKilled";
import "./features/dungeon/hp_warn";
import "./features/dungeon/hp_warn";
import "./features/dungeon/ndt";
//other 
import "./features/other/powerorb";
import "./features/other/current_time";
import "./features/Other/flaretimer";
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
}).setCommandName("chimera").setAliases("ch");




//ChatLib.chat("&r&r&b&m--------------------------------------------------------------------------------");
ChatLib.chat("&6["+Mod_Name+"&6] &eChimera loaded");
//ChatLib.chat("&r&r&b&m--------------------------------------------------------------------------------");