import gui from "../../config";
import {DisplayRender} from "../../utils/Renderer"
import { userData } from "../../utils/userdata";

const ArmorStand = Java.type("net.minecraft.entity.item.EntityArmorStand");

const Flare = [
    "ewogICJ0aW1lc3RhbXAiIDogMTY0NjY4NzMwNjIyMywKICAicHJvZmlsZUlkIiA6ICI0MWQzYWJjMmQ3NDk0MDBjOTA5MGQ1NDM0ZDAzODMxYiIsCiAgInByb2ZpbGVOYW1lIiA6ICJNZWdha2xvb24iLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMjJlMmJmNmMxZWMzMzAyNDc5MjdiYTYzNDc5ZTU4NzJhYzY2YjA2OTAzYzg2YzgyYjUyZGFjOWYxYzk3MTQ1OCIKICAgIH0KICB9Cn0",
    "ewogICJ0aW1lc3RhbXAiIDogMTY0NjY4NzMyNjQzMiwKICAicHJvZmlsZUlkIiA6ICI0MWQzYWJjMmQ3NDk0MDBjOTA5MGQ1NDM0ZDAzODMxYiIsCiAgInByb2ZpbGVOYW1lIiA6ICJNZWdha2xvb24iLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvOWQyYmY5ODY0NzIwZDg3ZmQwNmI4NGVmYTgwYjc5NWM0OGVkNTM5YjE2NTIzYzNiMWYxOTkwYjQwYzAwM2Y2YiIKICAgIH0KICB9Cn0",
    "ewogICJ0aW1lc3RhbXAiIDogMTY0NjY4NzM0NzQ4OSwKICAicHJvZmlsZUlkIiA6ICI0MWQzYWJjMmQ3NDk0MDBjOTA5MGQ1NDM0ZDAzODMxYiIsCiAgInByb2ZpbGVOYW1lIiA6ICJNZWdha2xvb24iLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYzAwNjJjYzk4ZWJkYTcyYTZhNGI4OTc4M2FkY2VmMjgxNWI0ODNhMDFkNzNlYTg3YjNkZjc2MDcyYTg5ZDEzYiIKICAgIH0KICB9Cn0"
];

const FlareColors = [
    [0.56, 0.93, 0.56], // Light Green
    [0.68, 0.84, 0.91], // Light Blue
    [0.50, 0, 0.50],    // Purple
];

let flare = {
    type: -1,
    time: 0
};

const Firework = new Item("fireworks")



register("renderOverlay",()=>{
    if(!gui.flare_timer) return;
    let armorstands = World.getAllEntitiesOfType(ArmorStand);

    armorstands.find((armorstand)=>{
        const playerPos = [Player.getX(), Player.getY(), Player.getZ()];

        const distance = armorstand.distanceTo(playerPos[0],playerPos[1],playerPos[2]);

        if (distance > 40 || armorstand.getTicksExisted() > 3600) return;

        let as = new EntityLivingBase(armorstand.getEntity());
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

        let flareTime = parseInt(180 - armorstand.getTicksExisted() / 20);

        if (type > flare.type) {
            flare.type = type;
            flare.time = flareTime;
        } else if (type === flare.type) {
            flare.time = flareTime;
        }
        else if(type < flare.type){
            flare.type = type;
            flare.time = flareTime;
        }

        let flaretype = ""
        if(flare.type===0) flaretype ="&a&lWarning";
        else if(flare.type === 1) flaretype = "&1&lAlert";
        else if(flare.type === 2) flaretype = "&5&lSOS"
        else return;
        DisplayRender(userData.FT.x,userData.FT.y,userData.FT.scale,`${flaretype}  : ${flare.time}`)

    })
    if(flare.time<=0){
        flare.type =-1;
    }
})


register("worldUnload",()=>{
    flare = {
        type: -1,
        time: 0
    };
})