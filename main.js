
let stocks={
    model:["Veg","Non-veg"],
    item:["Vegtables","Chicken-pieces"],
    toppingstype1:["Sauce","More-sauce"],
    toppingstype2:["Needed-cheese","No-cheese"],
    brand:["Domino's","Pizza Hut"]
}

let shopOpen=true;

function kitchen(ms){
    return new Promise((resolve,reject)=>{
        if(shopOpen){
            setTimeout(resolve,ms)
        }
        else{
            reject (document.write("Shop is now closed <br><br>"))
        }
    })
}

async function prepare(){
    try{
        await kitchen(2000)
        document.write("Shop is open <br><br>");
        await kitchen(2000)
        document.write(` ${stocks.brand[0]} brand is selected <br><br>`);
        await kitchen(2000)
        document.write(` ${stocks.model[1]} selected <br><br>`);
        await kitchen()
        document.write("Production was started <br><br>");
        await kitchen(2000)
        document.write(` ${stocks.item[1]} are added <br><br>`);
        await kitchen(1000)
        document.write (` Needed vegtables are added <br><br>`);
        await kitchen(1000)
        document.write(` Start the machine <br><br>`);
        await kitchen(1000)
        document.write(` ${stocks.toppingstype1[0]} is  added <br><br>`);
        await kitchen(2000)
        document.write(` ${stocks.toppingstype2[0]} is added <br><br>`);
        await kitchen(2000)
       document.write(`Serve Pizza`);
    }

catch(err){
    document.write("Cutomer left");
}
}
prepare()