export function getPlayerName(player) {
    // Remove rank from player name
    let name = player;
    let nameIndex = name.indexOf(']');

    while (nameIndex != -1) {
        name = name.substring(nameIndex + 2);
        nameIndex = name.indexOf(']');
    }

    return name;
}

export function remove_pet(pet_name){
    let name = pet_name;
    let nameIndex = name.indexOf(']');

    while (nameIndex != -1) {
        name = name.substring(nameIndex + 2);
        nameIndex = name.indexOf(']');
    }
    if(name.includes("✦")){
        name = name.replace("✦","");
    }

    return name;
}

export function HighlightSlot(index){
    if(Player.getPlayer() === null || Player.getContainer() === null) return;
    const container = Player.getContainer();
    x = index % 9;
    y = Math.floor(index / 9);

    const renderX = Renderer.screen.getWidth() / 2 + ((x - 4) * 18);
    let renderY;
        renderY = (Renderer.screen.getHeight() + 10) / 2 + ((y - container.getSize() / 18) * 18);


    if(container.getSize()===90) if(index>=54) return;
    if(container.getSize()===72)  if(index>=36) return;   
    Renderer.translate(0, 0, 100);
    Renderer.drawRect(Renderer.color(255, 0,0, 100), renderX - 9, renderY - 9, 17, 17);
}