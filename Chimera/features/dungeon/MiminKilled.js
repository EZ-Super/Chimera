import gui from "../../config"
import {getworld} from "../../world/world"


register('Entitydeath', (entity) => {
    if(gui.mimickilled){
            if(getworld().includes("Catac") &entity.getClassName()=="EntityZombie"&&entity.getEntity().func_70631_g_() ){
                if(entity.getEntity().func_82169_q(0)===null&&entity.getEntity().func_82169_q(1)===null&&entity.getEntity().func_82169_q(2)===null&&entity.getEntity().func_82169_q(3)===null){
                    ChatLib.say("/pc "+gui.minickilledsendmessage)

                }
            }
        
    }          
});
