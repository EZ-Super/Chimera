import { @Vigilant, @ButtonProperty, @TextProperty, @SwitchProperty, @DecimalSliderProperty ,@SliderProperty, @SelectorProperty, @ColorProperty, Color } from "Vigilance";


@Vigilant("Chimera","Chimera mod ",{
    getCategoryComparator: () => (a, b) => {
        const categories = ["Dungeon", "Other","Party"];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    }
})


class gui {


    FT = new Gui()  // flare time
    CT = new Gui()  // current time
    FF = new Gui() //Fire freeze
    AP =new Gui() //Attributes Protect

    @SwitchProperty({
        name: "mimic killed",
        description: "Mimic Killed message customization",
        category: "Dungeon",
        subcategory: "Mimic",
    })MimicKilled = true;

    @TextProperty({
        name:"Mimic killed message",
        description: "Mimic Killed message ",
        category : "Dungeon",
        subcategory :"Mimic"
    })MinicKilledSendMessage = "";

    @SwitchProperty({
        name : "Allow party member setting allinvite",
        description : "allow party setting allinvite party , using !allinv",
        category : "Party",
        subcategory :"Always party all invite"
    })AllowPartyAllInvite = false;
    @SwitchProperty({
        name:"Allow party member party someone",
        description : "Party someone ,using !p {ign}",
        category : "Party",
        subcategory:"Allow party someone"
    })allow_party_member_party_someone = false;

    @SwitchProperty({
        name : "Auto transfer party(Testing)",
        description : "auto transfer party",
        category : "Party",
        subcategory : "auto transfer party"
    })AutoTransfer = false;

    @SwitchProperty({
        name : "Dungeon pet check",
        description : "dungeon pet check",
        category : "Dungeon",
        subcategory : "dungeon pet check"
    })dungeon_pet_check = false;

    @SwitchProperty({
        name : "Frag bot",
        description : "open auto accept party then after 7 sec leave",
        category : "Other",
        subcategory : "Frag bot"
    })frag_bot = false;
    
    @SwitchProperty({
        name : "Low hp warn",
        description : "dungeon low hp warn",
        category : "Dungeon",
        subcategory : "low hp warn"
    })dungeon_low_hp_warning = false;

    @SliderProperty({
        name : "When the HP is lower than how much warning",
        description : "When the HP is lower than how much warning",
        category : "Dungeon",
        subcategory : "low hp warn",
        min : 0,
        max : 50000

    })dungeon_low_hp_setting = 5000;

    @SwitchProperty({
        name : "Health warn",
        description : "",
        category : "Other",
        subcategory : "Health warn"
    })health_warn = false;

    @SliderProperty({
        name : "Health lower than how much percent warn ",
        description : "",
        category :"Other",
        subcategory : "Health warn",
        min : 0,
        max : 100

    })health_warn_setting = 50;


    @SwitchProperty({
        name : "NDT",
        description : "no down time",
        category : "Dungeon",
        subcategory : "NDT"
    })NDT= false;

    @SliderProperty({
        name :"DT time (s)",
        description :"",
        category :"Dungeon",
        subcategory : "NDT",
        min : 1,
        max : 10
    })DT_time = 1;

    @SelectorProperty({
        name: "Flare/Power Orb Range Marker",
        description: "Display the range of the flare",
        category: "Other",
        subcategory: "Flare Range Marker",
        options: ["none", "cylinder", "floor"],
    })flareRangeMarker = 0;


    @SwitchProperty({
        name : "Flare timer ",
        description : "Flare timer",
        category : "Other",
        subcategory : "Flare time"
    })flare_timer = false
    @ButtonProperty({
        name : "move Flare time",
        description : "",
        category : "Other",
        subcategory : "Flare time"
    })
    moveFB (){
        this.FT.open();
    }

    @SwitchProperty({
        name :"Current time",
        description : "",
        category : "Other",
        subcategory : "Current time"
    }) current_time = false;

    @ButtonProperty({
        name : "move timer",
        description : "" , 
        category : "Other",
        subcategory : "Current time"
    })moveCT(){
        this.CT.open();
    }


    @SwitchProperty({
        name : "Ice spray range",
        description : "Mark mob if in ice spray range",
        category : "Other",
        subcategory : "Ice spray"
    })IceSpray_range = false;

    @SwitchProperty({
        name : "Fire Freeze",
        description : "Show fire freeze time at m3",
        category : "Dungeon",
        subcategory : "Fire Freeze"
    })FireFreeze = false;
    @ButtonProperty({
        name : "Move Fire Freeze",
        description : "",
        category : "Dungeon",
        subcategory : "Fire Freeze"
    })moveFF(){
        this.FF.open();
    }
/*
    @SwitchProperty({
        name : "Mark Star Mob",
        description : "",
        category : "Dungeon",
        subcategory : "Star Mob Mark"
    })StarMob = false;
*/
    @SwitchProperty({
        name : "PRECISE coordinate display",
        description : "show mob PRECISE pos",
        category : "Other",
        subcategory : "PRECISE"
    })PreciseDisplay = false;

    @SwitchProperty({
        name : "Item search(Enchanted/Attribute)",
        description : "Attribute and Enchanted search use , to Split",
        category : "Other",
        subcategory : "Item search"
    })AttributeText = false;

    @SwitchProperty({
        name : "Attributes Protect",
        description : "Avoid Attributes low-level and high-level composition",
        category : "Other",
        subcategory : "Avoid Attributes low-level and high-level composition"
    })AttributesProtect = false;

    @ButtonProperty({
        name : "Attributes Protect move",
        description : "AttributesProtect move",
        category : "Other",
        subcategory :"Avoid Attributes low-level and high-level composition"
    })moveAP(){
        this.AP.open()
    }

    @SwitchProperty({
        name : "Update Checker",
        description : "Udate Check &4&lIf Update is Essential it will work",
        category : "Other",
        subcategory : "Update Check"
    })UpdateCheck = true;
//======== unworking


    constructor (){
        this.initialize(this);



    }

}


//DecimalSliderProperty     
export default new gui();

/*
    @DecimalSliderProperty({
        name: "Waypoint Text Size",
        description: "The waypoint text size",
        category: "Waypoint",
        subcategory: "Waypoint Text Size",
        minF: 0.0,
        maxF: 5.0,
        decimalPlaces: 1
    }) waypointTextSize = 2.0;



*/