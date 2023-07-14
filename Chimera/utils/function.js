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