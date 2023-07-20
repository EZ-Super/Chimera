import gui from "../../config";
import {DisplayRender} from "../../utils/Renderer"
import { userData } from "../../utils/userdata";
import {RegisterEventListener} from "../../utils/EventLinster";


const ArmorStand = Java.type("net.minecraft.entity.item.EntityArmorStand");

const Flare = [
    "ewogICJ0aW1lc3RhbXAiIDogMTY0NjY4NzMwNjIyMywKICAicHJvZmlsZUlkIiA6ICI0MWQzYWJjMmQ3NDk0MDBjOTA5MGQ1NDM0ZDAzODMxYiIsCiAgInByb2ZpbGVOYW1lIiA6ICJNZWdha2xvb24iLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMjJlMmJmNmMxZWMzMzAyNDc5MjdiYTYzNDc5ZTU4NzJhYzY2YjA2OTAzYzg2YzgyYjUyZGFjOWYxYzk3MTQ1OCIKICAgIH0KICB9Cn0",
    "ewogICJ0aW1lc3RhbXAiIDogMTY0NjY4NzMyNjQzMiwKICAicHJvZmlsZUlkIiA6ICI0MWQzYWJjMmQ3NDk0MDBjOTA5MGQ1NDM0ZDAzODMxYiIsCiAgInByb2ZpbGVOYW1lIiA6ICJNZWdha2xvb24iLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvOWQyYmY5ODY0NzIwZDg3ZmQwNmI4NGVmYTgwYjc5NWM0OGVkNTM5YjE2NTIzYzNiMWYxOTkwYjQwYzAwM2Y2YiIKICAgIH0KICB9Cn0",
    "ewogICJ0aW1lc3RhbXAiIDogMTY0NjY4NzM0NzQ4OSwKICAicHJvZmlsZUlkIiA6ICI0MWQzYWJjMmQ3NDk0MDBjOTA5MGQ1NDM0ZDAzODMxYiIsCiAgInByb2ZpbGVOYW1lIiA6ICJNZWdha2xvb24iLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYzAwNjJjYzk4ZWJkYTcyYTZhNGI4OTc4M2FkY2VmMjgxNWI0ODNhMDFkNzNlYTg3YjNkZjc2MDcyYTg5ZDEzYiIKICAgIH0KICB9Cn0"
];



let flare = {
    type: -1,
    time: 0,
    UUID :""
};

RegisterEventListener(()=>gui.flare_timer,
    register("renderOverlay",()=>{
        let ArmorStands = World.getAllEntitiesOfType(ArmorStand);

        ArmorStands.find((ArmorStand)=>{
            const playerPos = [Player.getX(), Player.getY(), Player.getZ()];

            const distance = ArmorStand.distanceTo(playerPos[0],playerPos[1],playerPos[2]);

            if (distance > 40 || ArmorStand.getTicksExisted() > 3600) return;

            let as = new EntityLivingBase(ArmorStand.getEntity());
            let head = as.getItemInSlot(4)?.getRawNBT();

            if (!head) return;

            let type = -1;

            for (let i = 0; i < Flare.length; i++) {
                if (head.includes(Flare[i])) {
                    type = i;
                    break;
                }
            }

            if (type === -1) return;

            //ChatLib.chat(as.getUUID());

            let flareTime = parseInt(180 - ArmorStand.getTicksExisted() / 20);

            if (type > flare.type) {
                flare.UUID = as.getUUID();
                flare.type = type;
                flare.time = flareTime;
            } else if (type === flare.type && flareTime > flare.time) {
                flare.UUID = as.getUUID();
                flare.time = flareTime;
            }
            else if(as.getUUID() === flare.UUID){
                flare.time = flareTime;
            }

            let FlareType = ""
            if(flare.type===0) FlareType ="&a&lWarning";
            else if(flare.type === 1) FlareType = "&1&lAlert";
            else if(flare.type === 2) FlareType = "&5&lSOS"
            else return;
            DisplayRender(userData.FT.x,userData.FT.y,userData.FT.scale,`${FlareType}  : ${flare.time}`)

        })

        if(flare.time<=0){
            flare.UUID = "";
            flare.type =-1;
        }

    })
)
/*

register("renderOverlay",()=>{
    if(!gui.flare_timer) return;
    let armorstands = World.getAllEntitiesOfType(ArmorStand);

    armorstands.find((ArmorStand)=>{
        const playerPos = [Player.getX(), Player.getY(), Player.getZ()];

        const distance = ArmorStand.distanceTo(playerPos[0],playerPos[1],playerPos[2]);

        if (distance > 40 || ArmorStand.getTicksExisted() > 3600) return;

        let as = new EntityLivingBase(ArmorStand.getEntity());
        let head = as.getItemInSlot(4)?.getRawNBT();

        if (!head) return;

        let type = -1;

        for (let i = 0; i < Flare.length; i++) {
            if (head.includes(Flare[i])) {
                type = i;
                break;
            }
        }

        if (type === -1) return;

        //ChatLib.chat(as.getUUID());

        let flareTime = parseInt(180 - ArmorStand.getTicksExisted() / 20);

        if (type > flare.type) {
            flare.UUID = as.getUUID();
            flare.type = type;
            flare.time = flareTime;
        } else if (type === flare.type && flareTime > flare.time) {
            flare.UUID = as.getUUID();
            flare.time = flareTime;
        }
        else if(as.getUUID() === flare.UUID){
            flare.time = flareTime;
        }

        let FlareType = ""
        if(flare.type===0) FlareType ="&a&lWarning";
        else if(flare.type === 1) FlareType = "&1&lAlert";
        else if(flare.type === 2) FlareType = "&5&lSOS"
        else return;
        DisplayRender(userData.FT.x,userData.FT.y,userData.FT.scale,`${FlareType}  : ${flare.time}`)

    })
    
    if(flare.time<=0){
        flare.UUID = "";
        flare.type =-1;
    }

})
*/

register("worldUnload",()=>{
    flare = {
        type: -1,
        time: 0
    };
})