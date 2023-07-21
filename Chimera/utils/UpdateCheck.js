import request from "../../requestV2"
import gui from "../config"
import {RegisterEventListener} from "./EventLinster"

let control = true;

RegisterEventListener(()=>control,
    register("worldLoad",()=>{
        let UD = request({url:"https://raw.githubusercontent.com/EZ-Super/Chimera/main/version.json",json:true})
            .then(data=>{
                if(!control) return;
                control = false;
                setTimeout(() => {



                    const latestVersion = data.latestVersion;
                    const VersionLog = data.versionlog;
                    const ModuleMetdata = JSON.parse(FileLib.read("Chimera","metadata.json"));




                    let search = false;
                    let ChangeLogText = "";
                    let text = "";
                    let Essential = false;
                    for(let i = 0;i<VersionLog.length;i++){
                        if(VersionLog[i].version === ModuleMetdata.version){
                            search = true;
                            continue;
                        }
                        if(!search) continue;
                        if( VersionLog[i].essential===true){
                            Essential = true;
                            ChangeLogText+=`      &b&l-->${VersionLog[i].version} &4&l(Essential) &2&l New\n`;
                        } else
                            ChangeLogText+=`      &b&l-->${VersionLog[i].version} &2&l New \n`;
                        VersionLog[i].changelog.forEach(element => {
                            text += ("         &e&l* "+element+"\n")
                            ChangeLogText+=("         &e&l* "+element+"\n")
                        });

                    }


                    if(Essential===false)
                        if(!gui.UpdateCheck)
                            return;

                    ChatLib.chat("&6&l[Chimera]&b&l Checking Version......");
                    if(ModuleMetdata.version === latestVersion){
                        ChatLib.chat("&6&l[Chimera]&b&l Your version is lastest");
                        return;
                    }

                    ChatLib.chat(`&6&l[Chimera]&b&l your mod version ${ModuleMetdata.version} and lastest version is ${latestVersion}`);
                    Client.Companion.showTitle("&6[Chimera] &4Update Checker",`&bYour mod version ${ModuleMetdata.version} and lastest version is ${latestVersion}`,0,100,20);
                    ChatLib.chat("&7&lVersion change log:")


                    ChatLib.chat(ChangeLogText);
                    if(!search) ChatLib.chat("&4&lSome Error Happened please report to discord: o_in");
                    let githubLink = "https://github.com/EZ-Super/Chimera/releases";
                    new Message(
                        `&9&m${ChatLib.getChatBreak(" ")}\n`,
                        `&e&lA new version of &6&lChimera &e&lis available!\n`,
                        `\n`,
                        new TextComponent(`&7Changelog: &8(change log)\n`).setHover("show_text",text),
                        new TextComponent(`&aClick here to go to the Github page!\n`).setClick("open_url", githubLink).setHover("show_text", githubLink),
                        `&9&m${ChatLib.getChatBreak(" ")}`
                    ).chat()
                },5000 );


            })
    })
)
