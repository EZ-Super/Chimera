import gui from "../../config"
import {DisplayRender} from "../../utils/Renderer"
import { userData } from "../../utils/userdata";
import {RegisterEventListener} from "../../utils/EventLinster";


RegisterEventListener(()=>gui.current_time,
    register("renderOverlay",()=>{
        let da = new Date();
        DisplayRender(userData.CT.x,userData.CT.y,userData.CT.scale,da.getMonth()+"/"+da.getDate()+"/"+da.getHours()+":"+da.getMinutes());
    })

)
/*
register("renderOverlay",()=>{
    if(!gui.current_time) return ;
    let da = new Date();
    DisplayRender(userData.CT.x,userData.CT.y,userData.CT.scale,da.getMonth()+"/"+da.getDate()+"/"+da.getHours()+":"+da.getMinutes());
})*/