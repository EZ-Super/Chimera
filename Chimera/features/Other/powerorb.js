import RenderLib from  "../../../RenderLib";
import gui from "../../config"
import {RegisterEventListener} from "../../utils/EventLinster"


///handle item range
RegisterEventListener(()=>gui.flareRangeMarker,
    register("renderWorld",()=>{
        let type = 5;
        let [x,y,z] =[0,0,0];
        let item = Player.getHeldItem();
        if(item===undefined) return;
        item = item.getName().removeFormatting();
        if(item!== "Gyrokinetic Wand" && !item.includes("Power Orb") && !item.includes("Flare")) return;

        if(item ===  "Gyrokinetic Wand") type =0; // gyro
        else if(item.includes("Plasmaflux")) type = 1; // plasma-flux
        else if(item.includes("Flare")) type =2; // flare
        else type = 3; //over flux other
        if(type===0){
            let la = Player.getPlayer().func_174822_a(25, 0.0);
            let bp = la.func_178782_a();
            bp = new BlockPos(bp);
            [x,y,z] = [bp.getX(),bp.getY(),bp.getZ()];
        }
        else{
            [x,y,z] = [Player.getX(),Player.getY(),Player.getZ()];
        }

        if(type===0){
            let block = World.getBlockAt(x,y,z);
            if(block.type.getID()!==0){
                RenderLib.drawCyl(x,y+1,z,0,10,0.2,30,1,0,90,90,0,0,0.5,0.5,false,false);
            }
        }
        else if(type === 1)
            RenderLib.drawCyl(x,y,z,0,20,0.2,30,1,0,90,90,0,0,0.5,0.5,false,false);
        else if(type === 2)
            RenderLib.drawCyl(x,y,z,0,40,0.2,30,1,0,90,90,0,0,0.5,0.5,false,false);
        else if(type === 3)
            RenderLib.drawCyl(x,y,z,0,18,0.2,30,1,0,90,90,0,0,0.5,0.5,false,false);

    })

)

/*
register("renderWorld",()=>{
    if(gui.flareRangeMarker === 0) return;
    let type = 5;
    let [x,y,z] =[0,0,0];
    let item = Player.getHeldItem();
    if(item==undefined) return; 
    item = item.getName().removeFormatting();
    if(item!== "Gyrokinetic Wand" && !item.includes("Power Orb") && !item.includes("Flare")) return;

    if(item ===  "Gyrokinetic Wand") type =0; // gyro
    else if(item.includes("Plasmaflux")) type = 1; // plasma-flux
    else if(item.includes("Flare")) type =2; // flare
    else type = 3; //over flux other
    if(type===0){
        let la = Player.getPlayer().func_174822_a(25, 0.0);
        let bp = la.func_178782_a();
        bp = new BlockPos(bp);
        [x,y,z] = [bp.getX(),bp.getY(),bp.getZ()];
    }
    else{
        [x,y,z] = [Player.getX(),Player.getY(),Player.getZ()];
    }
    
    if(type===0){
        let block = World.getBlockAt(x,y,z);
        if(block.type.getID()!=0){
            RenderLib.drawCyl(x,y+1,z,0,10,0.2,30,1,0,90,90,0,0,0.5,0.5,false,false);
        }
    }
    else if(type === 1)
        RenderLib.drawCyl(x,y,z,0,20,0.2,30,1,0,90,90,0,0,0.5,0.5,false,false);
    else if(type === 2)
        RenderLib.drawCyl(x,y,z,0,40,0.2,30,1,0,90,90,0,0,0.5,0.5,false,false);
    else if(type === 3)
        RenderLib.drawCyl(x,y,z,0,18,0.2,30,1,0,90,90,0,0,0.5,0.5,false,false);

});
*/

//power orb range
RegisterEventListener(()=>gui.flareRangeMarker,

    register("renderWorld",()=>{
        let ArmorStand = World.getAllEntitiesOfType(net.minecraft.entity.item.EntityArmorStand);
        ArmorStand.find((stand)=>{
            if(!stand.getName().includes("Plasmaflux")&&!stand.getName().includes("Overflux")&&!stand.getName().includes("Mana Flux")&&!stand.getName().includes("Radiant")) return;

            if(gui.flareRangeMarker ===2){ //平面
                let py = getby(stand.getX(),stand.getY(),stand.getZ());
                if(stand.getName().includes("Plasmaflux"))
                    RenderLib.drawCyl(stand.getX(),py+1,stand.getZ(),0,20,0.2,30,1,0,90,90,0,0,0.5,0.5,false,false);
                else
                    RenderLib.drawCyl(stand.getX(),py+1,stand.getZ(),0,18,0.2,30,1,0,90,90,0,0,0.5,0.5,false,false);
            }else if(gui.flareRangeMarker===1){  //圓環
                if(stand.getName().includes("Plasmaflux"))
                    RenderLib.drawCyl(stand.getX(),stand.getY()-20,stand.getZ(),19,20,40,30,1,0,90,90,0,0,0.5,0.5,false,false);
                else
                    RenderLib.drawCyl(stand.getX(),stand.getY()-18,stand.getZ(),17,18,36,30,1,0,90,90,0,0,0.5,0.5,false,false);
            }

        });
    })


)
/*

register("renderWorld",()=>{
    if(gui.flareRangeMarker === 0) return;
        let armorstand = World.getAllEntitiesOfType(net.minecraft.entity.item.EntityArmorStand);
        armorstand.find((stand)=>{
            if(!stand.getName().includes("Plasmaflux")&&!stand.getName().includes("Overflux")&&!stand.getName().includes("Mana Flux")&&!stand.getName().includes("Radiant")) return;
            
            if(gui.flareRangeMarker ===2){ //平面
                let py = getby(stand.getX(),stand.getY(),stand.getZ());
                if(stand.getName().includes("Plasmaflux"))
                    RenderLib.drawCyl(stand.getX(),py+1,stand.getZ(),0,20,0.2,30,1,0,90,90,0,0,0.5,0.5,false,false);
                else
                    RenderLib.drawCyl(stand.getX(),py+1,stand.getZ(),0,18,0.2,30,1,0,90,90,0,0,0.5,0.5,false,false);
            }else if(gui.flareRangeMarker==1){  //圓環
                if(stand.getName().includes("Plasmaflux"))
                RenderLib.drawCyl(stand.getX(),stand.getY()-20,stand.getZ(),19,20,40,30,1,0,90,90,0,0,0.5,0.5,false,false);
                else
                RenderLib.drawCyl(stand.getX(),stand.getY()-18,stand.getZ(),17,18,36,30,1,0,90,90,0,0,0.5,0.5,false,false);
            }
        
        });
});*/



//flare range
RegisterEventListener(()=>gui.flareRangeMarker,

    register("renderWorld",()=>{
        if(gui.flareRangeMarker === 0) return;
        let ArmorStand = World.getAllEntitiesOfType(net.minecraft.entity.item.EntityArmorStand);
        let firework = World.getAllEntitiesOfType(net.minecraft.entity.item.EntityFireworkRocket);

        firework.find((fire)=>{
            [flare_x,flare_y,flare_z] = [parseInt(fire.getX()),parseInt(fire.getY()),parseInt(fire.getZ())];
        });
        ArmorStand.find((entity)=>{
            let as = new EntityLivingBase(entity.getEntity());
            let head = as.getItemInSlot(4)?.getRawNBT();

            if(!head) return;

            if(head.includes("ewogICJ0aW1lc3RhbXAiIDogMTY0NjY4NzMwNjIyMywKICAicHJvZmlsZUlkIiA6ICI0MWQzYWJjMmQ3NDk0MDBjOTA5MGQ1NDM0ZDAzODMxYiIsCiAgInByb2ZpbGVOYW1lIiA6ICJNZWdha2xvb24iLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMjJlMmJmNmMxZWMzMzAyNDc5MjdiYTYzNDc5ZTU4NzJhYzY2YjA2OTAzYzg2YzgyYjUyZGFjOWYxYzk3MTQ1OCIKICAgIH0KICB9Cn0"))
                [r,g,b] = [0.56, 0.93, 0.56] ;
            else if(head.includes("ewogICJ0aW1lc3RhbXAiIDogMTY0NjY4NzMyNjQzMiwKICAicHJvZmlsZUlkIiA6ICI0MWQzYWJjMmQ3NDk0MDBjOTA5MGQ1NDM0ZDAzODMxYiIsCiAgInByb2ZpbGVOYW1lIiA6ICJNZWdha2xvb24iLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvOWQyYmY5ODY0NzIwZDg3ZmQwNmI4NGVmYTgwYjc5NWM0OGVkNTM5YjE2NTIzYzNiMWYxOTkwYjQwYzAwM2Y2YiIKICAgIH0KICB9Cn0"))
                [r,g,b] = [0.68, 0.84, 0.91];
            else if(head.includes("ewogICJ0aW1lc3RhbXAiIDogMTY0NjY4NzM0NzQ4OSwKICAicHJvZmlsZUlkIiA6ICI0MWQzYWJjMmQ3NDk0MDBjOTA5MGQ1NDM0ZDAzODMxYiIsCiAgInByb2ZpbGVOYW1lIiA6ICJNZWdha2xvb24iLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYzAwNjJjYzk4ZWJkYTcyYTZhNGI4OTc4M2FkY2VmMjgxNWI0ODNhMDFkNzNlYTg3YjNkZjc2MDcyYTg5ZDEzYiIKICAgIH0KICB9Cn0"))
                [r,g,b] = [0.50, 0, 0.50];
            else return;


            if(gui.flareRangeMarker===2){ //平面
                let py = getby(entity.getX(),entity.getY(),entity.getZ())
                RenderLib.drawCyl(entity.getX(),py+1,entity.getZ(),0,40,0.2,30,1,0,90,90,r,g,b,0.5,false,false);
            }else if(gui.flareRangeMarker ===1){ //圓環
                RenderLib.drawCyl(entity.getX(),entity.getY()-40,entity.getZ(),39.9,40,80,30,1,0,90,90,r,g,b,0.5,false,false);
            }
        });

    })
)
/*
register("renderWorld",()=>{
    if(gui.flareRangeMarker === 0) return;
    let armorstand = World.getAllEntitiesOfType(net.minecraft.entity.item.EntityArmorStand);
    let firework = World.getAllEntitiesOfType(net.minecraft.entity.item.EntityFireworkRocket);

    firework.find((fire)=>{
        [flare_x,flare_y,flare_z] = [parseInt(fire.getX()),parseInt(fire.getY()),parseInt(fire.getZ())];
    });
    armorstand.find((entity)=>{
        let as = new EntityLivingBase(entity.getEntity());
           let head = as.getItemInSlot(4)?.getRawNBT();

            if(!head) return;

            if(head.includes("ewogICJ0aW1lc3RhbXAiIDogMTY0NjY4NzMwNjIyMywKICAicHJvZmlsZUlkIiA6ICI0MWQzYWJjMmQ3NDk0MDBjOTA5MGQ1NDM0ZDAzODMxYiIsCiAgInByb2ZpbGVOYW1lIiA6ICJNZWdha2xvb24iLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMjJlMmJmNmMxZWMzMzAyNDc5MjdiYTYzNDc5ZTU4NzJhYzY2YjA2OTAzYzg2YzgyYjUyZGFjOWYxYzk3MTQ1OCIKICAgIH0KICB9Cn0"))
                [r,g,b] = [0.56, 0.93, 0.56] ;    
            else if(head.includes("ewogICJ0aW1lc3RhbXAiIDogMTY0NjY4NzMyNjQzMiwKICAicHJvZmlsZUlkIiA6ICI0MWQzYWJjMmQ3NDk0MDBjOTA5MGQ1NDM0ZDAzODMxYiIsCiAgInByb2ZpbGVOYW1lIiA6ICJNZWdha2xvb24iLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvOWQyYmY5ODY0NzIwZDg3ZmQwNmI4NGVmYTgwYjc5NWM0OGVkNTM5YjE2NTIzYzNiMWYxOTkwYjQwYzAwM2Y2YiIKICAgIH0KICB9Cn0"))    
                [r,g,b] = [0.68, 0.84, 0.91];
            else if(head.includes("ewogICJ0aW1lc3RhbXAiIDogMTY0NjY4NzM0NzQ4OSwKICAicHJvZmlsZUlkIiA6ICI0MWQzYWJjMmQ3NDk0MDBjOTA5MGQ1NDM0ZDAzODMxYiIsCiAgInByb2ZpbGVOYW1lIiA6ICJNZWdha2xvb24iLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYzAwNjJjYzk4ZWJkYTcyYTZhNGI4OTc4M2FkY2VmMjgxNWI0ODNhMDFkNzNlYTg3YjNkZjc2MDcyYTg5ZDEzYiIKICAgIH0KICB9Cn0")) 
                [r,g,b] = [0.50, 0, 0.50];
            else return;


            if(gui.flareRangeMarker===2){ //平面
                let py = getby(entity.getX(),entity.getY(),entity.getZ())
                RenderLib.drawCyl(entity.getX(),py+1,entity.getZ(),0,40,0.2,30,1,0,90,90,r,g,b,0.5,false,false);
            }else if(gui.flareRangeMarker ===1){ //圓環
                RenderLib.drawCyl(entity.getX(),entity.getY()-40,entity.getZ(),39.9,40,80,30,1,0,90,90,r,g,b,0.5,false,false);
            }
    });

})
*/


function getby(x,y,z){
    let py;
    for(let i=y;i>=0;i--){
        let blockat = World.getBlockAt(x,i,z);
        if(blockat.type.getID()!==0) {
            py = parseInt(i);
            return py;
        }
    }
}



register("command",()=>{
    if(!gui.power_display) return;
    let ArmorStand = World.getAllEntitiesOfType(net.minecraft.entity.item.EntityArmorStand);

    ArmorStand.find((entity)=>{
        let as = new EntityLivingBase(entity.getEntity());
           let head = as.getItemInSlot(4);
           if(head==null) return;
           head = head.getRawNBT();
           if(head==null) return;

            ChatLib.chat("x:"+entity.getX()+"y"+entity.getY()+"z"+entity.getZ());
            ChatLib.chat(head);
    });

        
}).setName("getflare");


