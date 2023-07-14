import {getPlayerName} from "./function"

let inParty = false;
export function getInParty() { return inParty; }

let isLeader = false;
export function getIsLeader() { return isLeader; }

ign = "";
// --- TRACK PARTY ---
register("chat", () => { // Tracks /stream open x
    inParty = true;
    isLeader = true;
}).setCriteria("Party is capped at ${cap} players.")

register("chat", (player) => { // Tracks /p disband
    inParty = false;
    isLeader = false;
}).setCriteria("${player} has disbanded the party!")

register("chat", () => { // Tracks empty party
    inParty = false;
    isLeader = false;
}).setCriteria("The party was disbanded because all invites expired and the party was empty.")

register("chat", () => { // Tracks /p leave
    inParty = false;
    isLeader = false;
}).setCriteria("You left the party.")


// --- TRACK PARTY LEADER ---
register("chat", (player1, player2) => { // Tracks transfers
    isLeader = ign.equals(getPlayerName(player1)) ? true : false;
}).setCriteria("The party was transferred to ${player1} by ${player2}")

register("chat", (player1, player2) => { // Tracks transfers by leave
    isLeader = ign.equals(getPlayerName(player1)) ? true : false;
}).setCriteria("The party was transferred to ${player1} because ${player2} left")

register("chat", (player1, player2) => { // Tracks transfers by promotion
    isLeader = ign.equals(getPlayerName(player2)) ? true : false;
}).setCriteria("${player1} has promoted ${player2} to Party Leader")

register("chat", (player1, player2) => { // Tracks first invite
    isLeader = ign.equals(getPlayerName(player1)) ? true : false;
    inParty = true;
}).setCriteria("${player1} invited ${player2} to the party! They have 60 seconds to accept.")


// --- TRACK PARTY INTERACTIONS ---
register("chat", (player) => { // Tracks first join
    isLeader = false;
    inParty = true;
}).setCriteria("You have joined ${player}'s party!");

register("chat", () => { // Tracks player kick
    inParty = false;
}).setCriteria("You have been kicked from the party by ${player}");


// ---  CONTROL FOR GAME/CT RS ---
register("gameLoad", () => {
    ign = Player.getName();
    ChatLib.chat(`&6[Chimera] &b Checking for party!`);
    ChatLib.command("p list");
});

register("chat", () => {
    ign = Player.getName();
    ChatLib.chat(`Checking for party!`);
     ChatLib.command("p list");
}).setCriteria("Welcome to Hypixel SkyBlock!");

register("chat", (leader) => {
    isLeader = ign.equals(getPlayerName(leader)) ? true : false;
    inParty = true;
}).setCriteria("Party Leader: ${leader} ●");
