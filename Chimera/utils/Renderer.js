import gui from "../config"
import { userData } from "./userdata";



register("renderOverlay",()=>{
    if(gui.FT.isOpen()){
        DisplayRender(userData.FT.x,userData.FT.y,userData.FT.scale,"Flare time:180000")
    }
    if(gui.CT.isOpen()){
        DisplayRender(userData.CT.x,userData.CT.y,userData.CT.scale,"");
    }
    if(gui.FF.isOpen()){
        DisplayRender(userData.FF.x,userData.FF.y,userData.FF.scale,"Fire Freeze");
    }
})


function setscale(mode,dir){
    if(dir ===1){
        mode.scale+=0.1;
    }
    else if(dir ===-1){
        mode.scale-=0.1
    }
    userData.save();
}

export function DisplayRender(x,y,scale,text){
    Renderer.scale(scale);
    Renderer.drawString(text,x,y);
}


let drag = false

register("dragged",(dx,dy,x,y)=>{
    if(!drag) return;
    if(gui.FT.isOpen()){
        userData.FT.x+=dx;
        userData.FT.y+=dy;
        userData.save();
    }
    else if(gui.CT.isOpen()){
        userData.CT.x+=dx;
        userData.CT.y+=dy;
        userData.save();
    }
    else if(gui.FF.isOpen()){
        userData.FF.x +=dx;
        userData.FF.y += dy;
    }
})

register("scrolled",(x,y,dir)=>{
    if(gui.FT.isOpen()){
        setscale(userData.FT,dir);
    }
    else if(gui.CT.isOpen()){
        setscale(userData.CT,dir);
    }
    else if(gui.FF.isOpen()){
        setscale(userData.FF,dir);
    }
})

register("guiOpened",()=>{
    setTimeout(() => {
        drag = true;
    }, 1000);
});

register("guiClosed",()=>{
    drag = false;
})



