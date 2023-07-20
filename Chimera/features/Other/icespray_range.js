import gui from "../../config"
import RenderLib from "../../../RenderLib";
import {RegisterEventListener} from "../../utils/EventLinster"

let avoidEntity = ["EntityArmorStand","EntityPlayerSP","EntityItemFrame","EntityVillager","EntityXPOrb","EntityPainting","EntityArrow"
                    ,"EntityFishHook","EntityFireworkRocket","EntityFallingBlock","EntityItem","EntityBoat","EntityMinecartEmpty","EntityMinecartTNT","EntityMinecartHopper"
                    ,"EntityExpBottle"]

RegisterEventListener(()=>gui.IceSpray_range,
    register("renderWorld",()=>{
        let held_item = Player.getHeldItem()?.getName();
        if(held_item === undefined) return;
        if(!held_item.includes("Ice Spray Wand")) return;

        //RenderLib.drawCyl(Player.getX(),Player.getY(),Player.getZ(),0,7.5,0.2,30,1,0,90,90,0.68,0.84,0.91,0.5,false,false)
        let px = Player.getX();
        let py = Player.getY();
        let pz = Player.getZ();



        const radius = 8; // 半徑長度
        const angle = 60; // 角度
        let yaw = Player.getYaw()+90 ; // 獲取玩家的偏航角度（yaw），並將其轉換為 0 到 359 的範圍
        // ChatLib.chat(yaw);
        if(yaw<0&&yaw>=-270) yaw +=360;
        let startAngle = (yaw - angle / 2)%360; //* (Math.PI / 180); // 計算起始角度（從玩家偏航角度的一半角度向左偏移）


        let endAngle = (yaw + angle / 2) %360; // * (Math.PI / 180); // 計算結束角度（從玩家偏航角度的一半角度向右偏移）


        if(startAngle<0) startAngle += 360;

        //ChatLib.chat(parseInt(yaw)+" "+parseInt(startAngle)+" "+parseInt(endAngle));

        let blocksx = [];
        let blocksz = [];
        for (var x = px - radius; x <= px + radius; x++) {
            for (var z = pz - radius; z <= pz + radius; z++) {
                var deltaX = x - px;
                var deltaZ = z - pz;

                var blockAngle = Math.atan2(deltaZ, deltaX)* (180 / Math.PI);

                if(blockAngle<0) blockAngle+=360;

                if (startAngle <= endAngle) {
                    if (blockAngle >= startAngle && blockAngle <= endAngle) {

                        blocksx.push(x); // 將在範圍內的方塊添加到陣列中
                        blocksz.push(z);
                    }
                } else {
                    if(blockAngle>startAngle || blockAngle<endAngle){
                        blocksx.push(x); // 將在範圍內的方塊添加到陣列中
                        blocksz.push(z);
                    }
                }




            }
        }

        let entities = World.getAllEntities();

        entities.find((mob)=>{

            for(let i=0;i<avoidEntity.length;i++)
                if(mob.getClassName()===avoidEntity[i]) return;

            if(mob.distanceTo(px,py,pz)>7.5) return;
            //ChatLib.chat(mob.getClassName())
            for(let i=0;i<blocksx.length;i++){

                if(parseInt(mob.getX())===parseInt(blocksx[i]) &&parseInt(mob.getZ())===parseInt(blocksz[i])){

                    RenderLib.drawBaritoneEspBox(mob.getX()-0.5,mob.getY(),mob.getZ()-0.5,mob.getWidth()+0.3 ,mob.getHeight()+0.3,0.68, 0.84, 0.91,1, true);
                }
            }

        })



    })

)
/*
register("renderWorld",()=>{
    if(!gui.IceSpray_range) return;
    let held_item = Player.getHeldItem()?.getName();
    if(held_item === undefined) return;
    if(!held_item.includes("Ice Spray Wand")) return; 

    //RenderLib.drawCyl(Player.getX(),Player.getY(),Player.getZ(),0,7.5,0.2,30,1,0,90,90,0.68,0.84,0.91,0.5,false,false)
    let px = Player.getX();
    let py = Player.getY();
    let pz = Player.getZ();
    


    const radius = 8; // 半徑長度
    const angle = 60; // 角度
    let yaw = Player.getYaw()+90 ; // 獲取玩家的偏航角度（yaw），並將其轉換為 0 到 359 的範圍
   // ChatLib.chat(yaw);
    if(yaw<0&&yaw>=-270) yaw +=360;
    let startAngle = (yaw - angle / 2)%360; //* (Math.PI / 180); // 計算起始角度（從玩家偏航角度的一半角度向左偏移）


    let endAngle = (yaw + angle / 2) %360; // * (Math.PI / 180); // 計算結束角度（從玩家偏航角度的一半角度向右偏移）


    if(startAngle<0) startAngle += 360;

    //ChatLib.chat(parseInt(yaw)+" "+parseInt(startAngle)+" "+parseInt(endAngle));

    let blocksx = [];
    let blocksz = [];
    for (var x = px - radius; x <= px + radius; x++) {
        for (var z = pz - radius; z <= pz + radius; z++) {
            var deltaX = x - px;
            var deltaZ = z - pz;
        
            var blockAngle = Math.atan2(deltaZ, deltaX)* (180 / Math.PI);   

            if(blockAngle<0) blockAngle+=360;

            if (startAngle <= endAngle) {
                if (blockAngle >= startAngle && blockAngle <= endAngle) {

                    blocksx.push(x); // 將在範圍內的方塊添加到陣列中
                    blocksz.push(z);
                }
              } else {
                if(blockAngle>startAngle || blockAngle<endAngle){
                    blocksx.push(x); // 將在範圍內的方塊添加到陣列中
                    blocksz.push(z);
                }
              }




        }
    }

    let entities = World.getAllEntities();

    entities.find((mob)=>{

        for(let i=0;i<avoidEntity.length;i++)
            if(mob.getClassName()===avoidEntity[i]) return;

        if(mob.distanceTo(px,py,pz)>7.5) return;
        //ChatLib.chat(mob.getClassName())
        for(let i=0;i<blocksx.length;i++){
    
            if(parseInt(mob.getX())===parseInt(blocksx[i]) &&parseInt(mob.getZ())===parseInt(blocksz[i])){
 
                RenderLib.drawBaritoneEspBox(mob.getX()-0.5,mob.getY(),mob.getZ()-0.5,mob.getWidth()+0.3 ,mob.getHeight()+0.3,0.68, 0.84, 0.91,1, true);
            }
        }

    })



});
*/