import { @Vigilant, @ButtonProperty, @TextProperty, @SwitchProperty, @DecimalSliderProperty @SliderProperty, @SelectorProperty, @ColorProperty, Color } from "Vigilance";


@Vigilant("Chimera","Chimera mod ",{
    getCategoryComparator: () => (a, b) => {
        const categories = ["Dungeon", "Other","Party"];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    }
})


class gui {

    mimic = new Gui()

    FT = new Gui()
    CT = new Gui()


    @SwitchProperty({
        name: "mimic killed",
        description: "擊殺mimic通知",
        category: "Dungeon",
        subcategory: "Mimic",
    })mimickilled = true;

    @TextProperty({
        name:"Mimic killed message",
        description: "mimic 擊殺訊息",
        category : "Dungeon",
        subcategory :"Mimic"
    })minickilledsendmessage = "";

    @SwitchProperty({
        name : "Allow party member setting allinvite",
        description : "允許party成員開啟讓所有人party 使用!allinv",
        category : "Party",
        subcategory :"Always party all invite"
    })allwayspartyallinvite = false;
    @SwitchProperty({
        name:"Allow party member party someone",
        description : "Party someone 使用 !p {ign}",
        category : "Party",
        subcategory:"Allow party someone"
    })allow_party_member_party_someone = false;

    @SwitchProperty({
        name : "Auto transfer party(Testing)",
        description : "自動把party 傳給別人",
        category : "Party",
        subcategory : "auto transfer party"
    })autotransfer = false;

    @SwitchProperty({
        name : "Dungeon pet check",
        description : "dungeon pet check",
        category : "Dungeon",
        subcategory : "dungeon pet check"
    })dungeon_pet_check = false;

    @SwitchProperty({
        name : "Frag bot",
        description : "開啟讓別人party",
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
        description : "當hp低於多少時警告",
        category : "Dungeon",
        subcategory : "low hp warn",
        min : 0,
        max : 50000

    })dungeon_low_hp_text = 5000;

    @SwitchProperty({
        name : "Health warn",
        description : "",
        category : "Other",
        subcategory : "Health warn"
    })health_warn = false;

    @SliderProperty({
        name : "Health lower than how much warn ",
        description : "",
        category :"Other",
        subcategory : "Health warn",
        min : 0,
        max : 30000

    })health_warn_text = 200;


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
    })icespray_range = false
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