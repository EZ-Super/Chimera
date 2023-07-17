let allAttributes = ["Arachno","Attack Speed","Combo","Elite","Ignition","Life Recovery","Midas Touch","Undead","Mana Steal","Ender","Blazing","Warrior","Deadeye","Arachno Resistance"
                    ,"Blazing Resistance","Experience","Speed","Undead Resistance","Breeze","Lifeline","Life Regeneration","Mana Pool","Dominance","Ender Resistance",
                    "Mana Regeneration","Veteran","Vitality","Fortitude","Magic Find","Blazing Fortune","Fishing Experience","Double Hook","Fisherman","Fishing Speed",
                    "Hunter","Trophy Hunter","Infection"];

export default class ChestItem{
    EnchantList = new Map();
    AttributesList = new Map();
    LoreArray = [];
    NBT = "";

    constructor(item){
        if (!(item instanceof Item)&&item !== null) throw "Error ChestItem Constuctor value not item";
        this.NBT = item?.getRawNBT();
        this.LoreArray = item?.getLore();
        this.SetAttributesList();


    }

    SetAttributesList(){
        if(this.LoreArray === undefined) return;
        for(let lore =0;lore<this.LoreArray.length;lore++){
            allAttributes.forEach(Attribute => {
                let attlore = this.LoreArray[lore].removeFormatting().split(' ');
                let search = "";
                let lvl ="";
                if(attlore.length ===2){
                    search = attlore[0];
                    lvl = attlore[1];
                }
                else{
                    search = attlore[0] + " "+ attlore[1];
                    lvl = attlore[2];
                }

                
                if(search === Attribute){
                    //ChatLib.chat(search + " "+ lvl);
                    lvl = getLevl(lvl);
                    this.AttributesList.set(Attribute,lvl);
                }
            });
        }
    }

    SearchLore(Search){
        if(Search === undefined || this.LoreArray === undefined) return false;
        let Searched = []
        Search.forEach(search => {
            search = search.toLowerCase();
            if(search ==="") return;
            this.LoreArray.forEach((lore)=>{
                lore = lore.toLowerCase();
                if(lore.includes(search)) 
                    if(!Searched.includes(search))    
                        Searched.push(search);
                
            })
        });
        if(Searched.length === Search.length) return true;
        else return false;
    }
    ShowLore(){
        if(this.LoreArray === undefined) ChatLib.chat("non");
        else
            this.LoreArray.forEach((lore)=>{
        
                ChatLib.chat(lore);
            })
        
    }
    ShowNBT(){
        ChatLib.chat(this.NBT);
    }
    showAttributes(){
        if(this.AttributesList!==undefined)
            this.AttributesList.forEach( (lvl,Attribute) => {
                ChatLib.chat("test"+Attribute + " "+ lvl);
            });
    }
    getAttributes(){
        return this.AttributesList;
    }
}

function getLevl(level){
    if(level ==="I") return 1;
    else if(level === "II") return 2;
    else if(level === "III") return 3;
    else if(level === "IV") return 4;
    else if(level === "V") return 5;
    else if(level === "VI") return 6;
    else if(level === "VII") return 7;
    else if(level === "VIII") return 8;
    else if(level === "IX") return 9;
    else if(level === "X") return 10;
}