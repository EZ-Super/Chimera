import gui from "../../config";
import ChestItem  from '../../Class/ChestItem';
import Chest from "../../Class/Chest";
import {DisplayRender} from "../../utils/Renderer"
import { userData } from "../../utils/userdata";

register("postGuiRender",()=>{
    let gui = Player?.getContainer();
    if(gui===null) return;
    if(gui.getName()!=="Attribute Fusion") return;
    gui = new Chest(gui);
    let LeftIetm = gui.getIndexItem(29).getAttributes();
    let RightItem = gui.getIndexItem(33).getAttributes();
    let str = "&4&lAttributes Protect\nArmor 1\n"
    LeftIetm.forEach((lvl,att) => {
        str+=(att+" "+lvl+"\n");
    });
    str+= "Armor 2\n"
    RightItem.forEach((lvl,att) => {
        str+=(att+" "+lvl+"\n");
    });

    let voice = true;
    LeftIetm.forEach((lvl1,att1) => {
        RightItem.forEach((lvl2,att2) => {
            if(att1===att2)
                if(lvl1<lvl2){
                     str+=`&4&lWarning ${att1}\n &4&lLeft ${lvl1}< Right ${lvl2}`;
                    if(voice){
                        voice = false;
                        World.playSound("mob.blaze.death",20,1);
                        setTimeout(() => {
                            voice = true;
                        }, 5000);
                    }
                }
        });
    });

    DisplayRender(userData.AP.x,userData.AP.y,userData.AP.scale,`${str}`);
    

})