import gui from "../../config"
import {HighlightSlot}  from "../../utils/function"

const GuiTextField = Java.type("net.minecraft.client.gui.GuiTextField");


register("postGuiRender",()=>{
  if(!gui.AttributeText) return;
    if(searchTerm ==="") return;
    if(Player?.getContainer()?.getClassName()!=="ContainerChest")  return;

    let items =  Player.getContainer().getItems();

    for(let i=0;i<items.length;i++){
        if(items[i] === null) continue;
        let ItemLores = items[i]?.getLore();
        let highlight = [];
        let SearchLore = searchTerm.split(",");
        for(let lore = 0 ;lore<ItemLores.length;lore++){
            

            for(let search =0;search<SearchLore.length;search++){
                ItemLores[lore] = ItemLores[lore].toLowerCase();
                SearchLore[search] = SearchLore[search].toLowerCase();
                if(ItemLores[lore].includes(SearchLore[search])&&SearchLore[search]!=="") 
                    if(!highlight.includes(SearchLore[search]))
                        highlight.push(SearchLore[search]);
            }

        }
        if(highlight.length === SearchLore.length) HighlightSlot(i);
    }

})
register("command",()=>{
    let SearchText = searchTerm.split(",");

    for(let i=0;i<SearchText.length;i++){
        ChatLib.chat(`${i}  ${SearchText[i]}`)

    ChatLib.chat(SearchText.length);
    }

}).setName("getAttributeText");

register("command",()=>{
    let item =  Player?.getHeldItem()?.getLore();

    for(let i=0;i<item.length;i++){
        ChatLib.chat(item[i]);
    }
}).setName("test")
let searchBar = new GuiTextField(0, Client.getMinecraft().field_71466_p,  25, 25, 100, 10);
let searchTerm = "";






register("tick", () => {
    if (!Client.isInGui()) {
      searchBar.func_146195_b(false) // setfocused
    } else {
      searchTerm = searchBar.func_146179_b()
    }
  })

  register("guiRender", () => {
        if(!gui.AttributeText) return;
        if(Player?.getContainer()?.getClassName()!=="ContainerChest")  return;
        searchBar.func_146194_f(); // draw text box
  })
  register("guiMouseClick", (x, y, button) => {
    searchBar.func_146192_a(x, y, button); // detect when click text box
  })
  register("guiKey", (char, keyCode, gui, event) => {
    if (searchBar.func_146206_l()) { // if text box is focused
      searchBar.func_146201_a(char, keyCode) // add character to text box
      if (keyCode != 1) { // keycode for escape key
        cancel(event)
      }
    }
  })
    