import request from "../../requestV2"
import gui from "../config"

let control = true;

register("worldLoad",()=>{
    let UD = request({url:"https://raw.githubusercontent.com/EZ-Super/Chimera/main/version.json",json:true})
    .then(data=>{
        if(!control) return;
        setTimeout(() => {
            control = false;

    
            const latestVersion = data.latestVersion;
            const versionlog = data.versionlog;
            const moudleMetdata = JSON.parse(FileLib.read("Chimera","metadata.json"));
    


    
            let search = false;
            let ChangeLogText = "";
            let Essential = false;
            for(let i = 0;i<versionlog.length;i++){
                if(versionlog[i].version === moudleMetdata.version){
                    search = true;
                    continue;
                }
                if(!search) continue;
                if(versionlog[i].essential==true){
                    Essential = true;
                    ChangeLogText+=`      &b&l-->${versionlog[i].version} &2&l New &4&l(Essential)\n`;
                } else
                    ChangeLogText+=`      &b&l-->${versionlog[i].version} &2&l New \n`;
                versionlog[i].changelog.forEach(element => {
                    
                    ChangeLogText+=("         &e&l* "+element+"\n")
                });
                
            }


            if(Essential===false)
                if(!gui.UpdateCheck)
                    return;

            ChatLib.chat("&6&l[Chimera]&b&l Checking Version......");
            if(moudleMetdata.version == latestVersion){
                ChatLib.chat("&6&l[Chimera]&b&l Your version is lastest");
                return;
            }
            
            ChatLib.chat(`&6&l[Chimera]&b&l your mod version ${moudleMetdata.version} and lastest version is ${latestVersion}`);
            Client.Companion.showTitle("&6[Chimera] &4Update Checker",`&bYour mod version ${moudleMetdata.version} and lastest version is ${latestVersion}`,0,100,20);
            ChatLib.chat("&7&lVersion change log:")


            ChatLib.chat(ChangeLogText);
            if(!search) ChatLib.chat("&4&lSome Error Happened please report to discord: o_in");
            let githubLink = "https://github.com/EZ-Super/Chimera/releases";
            new Message(
                `&9&m${ChatLib.getChatBreak(" ")}\n`,
                `&e&lA new version of &6&lChimera &e&lis available!\n`,
                `\n`,
                new TextComponent(`&7Changelog: &8(change log)\n`).setHover("show_text",ChangeLogText),
                new TextComponent(`&aClick here to go to the Github page!\n`).setClick("open_url", githubLink).setHover("show_text", githubLink),
                `&9&m${ChatLib.getChatBreak(" ")}`
            ).chat()
        },5000 );
        

    })
})