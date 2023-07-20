let RegisterEvent = [];

//made by 2000
export function RegisterEventListener(conditions,event){
    let listener = {
        conditions :conditions,
        event : event.unregister(),
        registered : false,
    }
    RegisterEvent.push(listener);

}

export  function  UpdateRegisterEventListener(){
    RegisterEvent.forEach((listener)=>{
       // ChatLib.chat(listener.conditions());
        if(listener.conditions() && !listener.registered){
            listener.registered=true;
            listener.event.register();
        }
        else if(!listener.conditions() && listener.registered){
            listener.event.unregister();
            listener.registered = false;
        }
    })

}

register("guiClosed",()=>{
    UpdateRegisterEventListener();
})

