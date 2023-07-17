import ChestItem  from  "./ChestItem";

export default class Chest{
    items = [];
    ChestName = ""
    constructor(chest){
    
        if(!(chest instanceof Inventory)) throw "Error Chest Constructor";
        this.ChestName = chest.getClassName();
        chest = chest.getItems();
        chest.forEach(item => {
            this.items.push(new ChestItem(item));
        });
    }

    SearchItem(search){
        let SearchSlot = [];
        for(let index = 0;index<this.items.length;index++){
            if(this.items[index].SearchLore(search)) SearchSlot.push(index)
        }
        return SearchSlot;
    }


    ShowChest(){
        ChatLib.chat(this.ChestName);
        for(let index = 0;index<this.items.length;index++){
            ChatLib.chat(`${index} : `);
            //this.items[index].ShowLore();
            //this.items[index].ShowNBT();
            this.items[index].showAttributes();
        }
    }


    getIndexItem(index){
        return this.items[index];
    }
}