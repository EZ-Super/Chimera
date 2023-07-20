import gui from "../../config"
import {HighlightSlot}  from "../../utils/function"
import {RegisterEventListener} from "../../utils/EventLinster";


import Chest from "../../Class/Chest";

const GuiTextField = Java.type("net.minecraft.client.gui.GuiTextField");


let highlight= [];

RegisterEventListener(()=>gui.AttributeText,
    register("step",()=>{
        if(Player?.getContainer()?.getClassName() !=="ContainerChest") return;
        let chest = new Chest(Player.getContainer());
        highlight =[]
        let SearchLore = searchTerm.split(",");
        highlight = chest.SearchItem(SearchLore);
    }).setDelay(0.5)

)
/*
register("step",()=>{
  if(!gui.AttributeText) return;
  if(Player?.getContainer()?.getClassName() !=="ContainerChest") return;
  let chest = new Chest(Player.getContainer());
  highlight =[]
  let SearchLore = searchTerm.split(",");
  highlight = chest.SearchItem(SearchLore);
}).setDelay(0.5)*/


RegisterEventListener(()=>gui.AttributeText,
    register("postGuiRender",()=>{
        if(!gui.AttributeText) return;
        if(Player?.getContainer()?.getClassName() !=="ContainerChest") return;
        highlight.forEach((slot)=>{
            HighlightSlot(slot);
        })

    })

)
/*
register("postGuiRender",()=>{
  if(!gui.AttributeText) return;
  if(Player?.getContainer()?.getClassName() !=="ContainerChest") return;
  highlight.forEach((slot)=>{
    HighlightSlot(slot);
  })
  
})*/

register("command",()=>{
    let SearchText = searchTerm.split(",");

    for(let i=0;i<SearchText.length;i++){
        ChatLib.chat(`${i}  ${SearchText[i]}`)

    //hatLib.chat(SearchText.length);
    }

}).setName("getAttributeText");


let searchBar = new GuiTextField(0, Client.getMinecraft().field_71466_p,  25, 25, 100, 10);
let searchTerm = "";


RegisterEventListener(()=>gui.AttributeText,
    register("tick", () => {
        if (!Client.isInGui()) {
            searchBar.func_146195_b(false) // setfocused
        } else {
            searchTerm = searchBar.func_146179_b()
        }
    })
)


/*
register("tick", () => {
    if (!Client.isInGui()) {
      searchBar.func_146195_b(false) // setfocused
    } else {
      searchTerm = searchBar.func_146179_b()
    }
  })
*/

RegisterEventListener(()=>gui.AttributeText,
    register("guiRender", () => {
        if(Player?.getContainer()?.getClassName()!=="ContainerChest")  return;
        searchBar.func_146194_f(); // draw text box
    })
)

/*

  register("guiRender", () => {
        if(!gui.AttributeText) return;
        if(Player?.getContainer()?.getClassName()!=="ContainerChest")  return;
        searchBar.func_146194_f(); // draw text box
  })*/

RegisterEventListener(()=>gui.AttributeText,
    register("guiMouseClick", (x, y, button) => {
        searchBar.func_146192_a(x, y, button); // detect when click text box
    })
)
/*
  register("guiMouseClick", (x, y, button) => {
    searchBar.func_146192_a(x, y, button); // detect when click text box
  })*/

RegisterEventListener(()=>gui.AttributeText,
    register("guiKey", (char, keyCode, gui, event) => {
        if (searchBar.func_146206_l()) { // if text box is focused
            searchBar.func_146201_a(char, keyCode) // add character to text box
            if (keyCode !== 1) { // keycode for escape key
                cancel(event)
            }
        }
    })
)
/*
  register("guiKey", (char, keyCode, gui, event) => {
    if (searchBar.func_146206_l()) { // if text box is focused
      searchBar.func_146201_a(char, keyCode) // add character to text box
      if (keyCode !== 1) { // keycode for escape key
        cancel(event)
      }
    }
  })
    */