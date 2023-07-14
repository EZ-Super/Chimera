import gui from "../../config"
import {DisplayRender} from "../../utils/Renderer"
import { userData } from "../../utils/userdata";

register("renderOverlay",()=>{
    if(!gui.current_time) return ;
    let da = new Date();
    DisplayRender(userData.CT.x,userData.CT.y,userData.CT.scale,da.getMonth()+"/"+da.getDate()+"/"+da.getHours()+":"+da.getMinutes());
})