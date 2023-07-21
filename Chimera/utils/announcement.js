import {userData} from "./userdata";
import {RegisterEventListener} from "./EventLinster"
let FirstLogin = true ;
import request from "../../requestV2";

RegisterEventListener(()=>FirstLogin,
    register("worldLoad",()=> {
        if(!FirstLogin) return;
        FirstLogin = false;

        let UD = request({url: "https://raw.githubusercontent.com/EZ-Super/Chimera/main/announcement.json", json: true})
            .then(data => {
                setTimeout(() => {
                    if (userData.announcement === data.ID) return;
                    let announcement = "";
                    for (let i = 0; i < data.ann.length; i++) {
                        announcement += data.ann[i];
                    }

                    let detail = "";
                    for (let i = 0; i < data.detail.length; i++) {
                        detail += (data.detail[i]);
                    }


                    new Message(
                        `&9&m${ChatLib.getChatBreak(" ")}\n`,
                        `&8Date: ${data.Date} announcement ID ${data.ID}\n`,
                        `&e&lA new announcement of &6&lChimera!\n`,
                        announcement,
                        `\n`,
                        new TextComponent(`&7Drag here to see more detail: &8(detail)\n`).setHover("show_text", detail),
                        `&9&m${ChatLib.getChatBreak(" ")}`
                    ).chat()


                    userData.announcement = data.ID;
                    userData.save();
                }, 7000)



            })
    })

)

register("command",()=>{

    let UD = request({url:"https://raw.githubusercontent.com/EZ-Super/Chimera/main/announcement.json",json:true})
        .then(data=> {
            setTimeout(()=>{

                let announcement = ""
                for(let i = 0 ;i<data.ann.length;i++){
                    announcement+=data.ann[i];
                }

                let detail ="";
                for(let i = 0 ;i<data.detail.length;i++){
                    detail+=(data.detail[i]);
                }


                new Message(
                    `&9&m${ChatLib.getChatBreak(" ")}\n`,
                    `&8Date: ${data.Date} announcement ID ${data.ID}\n`,
                    `&e&lA new announcement of &6&lChimera!\n`,
                    announcement,
                    `\n`,
                    new TextComponent(`&7Drag here to see more detail: &8(detail)\n`).setHover("show_text",detail),
                    `&9&m${ChatLib.getChatBreak(" ")}`
                ).chat()
            },7000)

        })
}).setName("announcement");

