export default class ChestItem{
    EnchantList = new Map();
    AttributesList = {};
    LoreArray = [];


    constructor(item){
        if (!(item instanceof Item)&&item !== null) throw "Error ChestItem Constuctor value not item";
    
        this.LoreArray = item?.getLore();



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
}