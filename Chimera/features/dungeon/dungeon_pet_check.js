import "../../utils/pet";
import {getpet} from "../../utils/pet";
import {getworld} from "../../world/world"
import gui from "../../config" 

register("worldLoad",()=>{
    if(!gui.dungeon_pet_check ) return;
    setTimeout(() => {
        if(!getworld().includes("Catac")) return;

        if(getpet()!=="Jellyfish"){
            ChatLib.chat("&6[Chimera] &4&lU R NOT USING JELLYFISH");
            Client.Companion.showTitle("&6[Chimera]","&4&lU R NOT USING JELLYFISH",0,100,20);
        }
    }, 5000);
});

register("chat",()=>{
    if(!gui.dungeon_pet_check) return;
    setTimeout(() => {
        if(getpet()==="Jellyfish"){
            ChatLib.chat("&6[Chimera] &4&lU R USING JELLYFISH");
            Client.Companion.showTitle("&6[Chimera]","&4&lU R USING JELLYFISH",0,100,20);
        }
    }, 1000);
}).setCriteria("Dungeon starts in 1 second.");
