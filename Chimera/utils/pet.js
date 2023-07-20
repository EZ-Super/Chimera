import {userData} from "./userdata"
import {remove_pet} from "./function"
import gui from "../config"

let pet_name="";
export function getpet(){
    return pet_name;
}


//============================================
register("chat",(pet)=>{
    pet = remove_pet(pet);
    pet_name = pet; 
}).setCriteria("You summoned your ${pet}!");

register("chat",(pet)=>{
    pet = remove_pet(pet);
    pet_name = "";
}).setCriteria("You despawned your ${pet}!")

register("chat",(pet)=>{
    pet = remove_pet(pet);
    pet_name = pet;
}).setCriteria("Autopet equipped your ${pet}! VIEW RULE")

register("chat",(player)=>{
    let name = Player.getName();
    player = player.removeFormatting();
    player = player.replace("☠","")
    player = player.trim();

    if(name === player) pet_name = "Spirit"; 

}).setCriteria("${player} disconnected from the Dungeon and became a ghost.")


register("step",()=>{
    if(pet_name!=="") return;
    let inv = Player.getContainer();
    if(inv === null) return ;
    inv = inv.getItems()
    if(Player.getContainer().getName().includes(") Pets"))
    for(let i=0;i<inv.length;i++){
            if(inv[i]==null) break; 
            if(inv[i].getName().includes("[Lvl ")){
                //ChatLib.chat(inv[i].getName());
                getLore(inv[i]).forEach((line)=>{
                    if(line.includes("Click to despawn!")){
                        ChatLib.chat("&6[Chimera] &bNow use pet is :"+inv[i].getName());
                        pet_name = remove_pet(inv[i].getName().removeFormatting());
                    }
                    });
            }

    }
}).setDelay(5);

register("step",()=>{
    let armorstand = World.getAllEntitiesOfType(net.minecraft.entity.item.EntityArmorStand);
    armorstand.find((armor)=>{
        if(!armor.getName().includes(Player.getName())) return;
        let pet = armor.getName();
        pet = pet.split(" ");
        pet_name = pet[2];
    })
}).setDelay(1)

//=========================================

register("gameLoad",()=>{
    
    pet_name = userData.curren_pet;
});

register("gameUnload",()=>{
    userData.curren_pet = pet_name;
    userData.save();
});


register("command",()=>{
    ChatLib.chat(pet_name);
}).setName("getpet");

