import gui from "../../config"

let control = false;

register("actionBar",(h1,h2) =>{
    if(!gui.health_warn) return;
    h1 = h1.replace(",","");
    h1 = parseInt(h1);
    if(h1<gui.health_warn_text && control!= true){
        control = true;
        ChatLib.chat("&6[Chimera] &6&l血量低於設定值 ❤");
        World.playSound("mob.blaze.death",20,1);
        Client.Companion.showTitle("&6[Chimera] 提醒你","血量低於設定值",0,100,20);

        setTimeout(()=>{
            control = false;
        },5000)
    }

}).setCriteria("${h1}/${h2}❤     ${mseeage}")


