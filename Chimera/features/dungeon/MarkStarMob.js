/*import RenderLib from "../../../RenderLib";
import gui from  "../../config"


register("renderWorld",()=>{

    if(!gui.StarMob) return
    let entities = World.getAllEntities();

    entities.find((mob)=>{
        if(mob.getName().includes("✯")){
            RenderLib.drawInnerEspBox(mob.getX(),mob.getY()-2,mob.getZ(),1 ,2,0, 0, 1,0.5, true);
        }
    })
})*/