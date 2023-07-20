import gui from "../../config"
import RenderLib from "../../../RenderLib";

import {RegisterEventListener} from "../../utils/EventLinster";
import renderBeaconBeam from "../../../BeaconBeam"
let avoidEntity = ["EntityArmorStand","EntityPlayerSP","EntityItemFrame","EntityVillager","EntityXPOrb","EntityPainting","EntityArrow"
                    ,"EntityFishHook","EntityFireworkRocket","EntityFallingBlock","EntityItem","EntityBoat","EntityMinecartEmpty","EntityMinecartTNT","EntityMinecartHopper"
                    ,"EntityExpBottle"]

RegisterEventListener(()=>gui.PreciseDisplay,
    register("renderWorld",()=>{
        if(!gui.PreciseDisplay) return;
        if(!Player.getHeldItem()?.getName()?.includes("Precise")) return;
        let entity = World.getAllEntities();

        entity.find((mob)=>{
            if(Player.lookingAt() instanceof BlockType || Player.lookingAt() instanceof Block) return
            if(Player.lookingAt().getUUID()!== mob.getUUID()) return;
            for(let i=0;i<avoidEntity.length;i++){
                if(mob.getClassName()===avoidEntity[i]) return;
            }
            let x = mob.getEyePosition(Tessellator.partialTicks).field_72450_a;
            let y = mob.getEyePosition(Tessellator.partialTicks).field_72448_b;
            let z = mob.getEyePosition(Tessellator.partialTicks).field_72449_c;
            renderBeaconBeam(x-0.5,y,z-0.5, 0.5,1,1,1,false,300)
            //RenderLib.drawEspBox(mob.getX(),mob.getEyePosition(Tessellator.partialTicks).field_72448_b-0.3,mob.getZ(),mob.getWidth(),0.5,1,1,1,1,false);

        })
    })

)

/*
register("renderWorld",()=>{
    if(!gui.PreciseDisplay) return;
    if(!Player.getHeldItem()?.getName()?.includes("Precise")) return;
  let entity = World.getAllEntities();
  
  entity.find((mob)=>{
    if(Player.lookingAt() instanceof BlockType || Player.lookingAt() instanceof Block) return
    if(Player.lookingAt().getUUID()!== mob.getUUID()) return;
    for(let i=0;i<avoidEntity.length;i++){
      if(mob.getClassName()===avoidEntity[i]) return;
    }
    let x = mob.getEyePosition(Tessellator.partialTicks).field_72450_a;
    let y = mob.getEyePosition(Tessellator.partialTicks).field_72448_b;
    let z = mob.getEyePosition(Tessellator.partialTicks).field_72449_c;
    renderBeaconBeam(x-0.5,y,z-0.5, 0.5,1,1,1,false,300)
    //RenderLib.drawEspBox(mob.getX(),mob.getEyePosition(Tessellator.partialTicks).field_72448_b-0.3,mob.getZ(),mob.getWidth(),0.5,1,1,1,1,false);
  
  })
})*/