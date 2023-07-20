import gui from "../../config";
import {RegisterEventListener} from "../../utils/EventLinster";
import {getworld} from "../../world/world"


let CoolDown = false;

RegisterEventListener(()=>gui.dungeon_low_hp_warning&&getworld().includes("Catac"),
    register("step",()=> {
        let hp = Scoreboard.getLines().find((line) => {
            if (line.getName().includes("❤")) {
                line = line.getName().removeFormatting();

                line = line.split(" ");

                line[2] = line[2].replace("❤", "");

                line[2] = line[2].replace(",", "");
                line[2] = line[2].replace("🎁", "");

                line[2] = parseInt(line[2]);

                if (line[2] < gui.dungeon_low_hp_setting && CoolDown !== true) {

                    CoolDown = true;
                    ChatLib.chat(`&6[Chimera]&4&l Warning ${line[1]} &b&l HEALTH BELOW ${gui.dungeon_low_hp_setting}`);
                    Client.Companion.showTitle("&6[Chimera] Warning", `&b&l${line[1]} HEALTH BELOW ${gui.dungeon_low_hp_setting}`, 0, 100, 20);
                    setTimeout(() => {
                        CoolDown = false;
                    }, 5000)
                }

            }
        })
    })
)
/*
register("step",()=>{

    if(!gui.dungeon_low_hp_warning) return;

    let hp = Scoreboard.getLines().find((line)=>{
        if(line.getName().includes("❤") ){
            line = line.getName().removeFormatting();
            
            line = line.split(" ");
            
            line[2] = line[2].replace("❤","");
           
            line[2] = line[2].replace(",","");
            line[2] = line[2].replace("🎁","");
            
            line[2] = parseInt(line[2]);
      
            if(line[2]<gui.dungeon_low_hp_setting && CoolDown!==true){
                
                CoolDown = true;
                ChatLib.chat(`&6[Chimera]&4&l Warning ${line[1]} &b&l HEALTH BELOW ${gui.dungeon_low_hp_setting}`);
                Client.Companion.showTitle("&6[Chimera] Warning",`&b&l${line[1]} HEALTH BELOW ${gui.dungeon_low_hp_setting}`,0,100,20);
                setTimeout(()=>{
                    CoolDown = false;
                },5000)
            }

        }
    });


}).setDelay(1);
*/
