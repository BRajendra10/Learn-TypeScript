function getChai(kind: string | number){
    if(typeof kind === 'string') {
        return `Making ${kind} chai...` 
    }

    return `Chai order: $${kind}`
}

function serveChai(msg?: string){
    if(msg){
        return `Serving ${msg}`;
    }

    return `Serving default masala chai`;
}

// function orderChai(size: "small" | "medium" | "large" | number){
//     if(size === "small"){
//         return `Small cutting chai...`
//     }

//     if(size === "medium" || size === "large"){
//         return `Make extra chai`
//     }

//     return `Chai order #${size}`
// }

class KulhadChai{
    serve(){
        return `Serving kulhad chai`
    }
}

class CuttingChai{
    serve(){
        return `Serving cutting chai`
    }
}

function serve(chai: KulhadChai | CuttingChai){
    if(chai instanceof KulhadChai){
        return chai.serve()
    }
}

type ChaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj: any):obj is ChaiOrder {
    return (
        typeof obj === "object" && 
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item: ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar}`
    }

    return `Serving custom chai: ${item}`
}

type MasalaChai = {type: "masala", spicelevel: number};
type GingerChai = {type: "ginger", spicelevel: number};
type ElaichiChai = {type: "elaichi", spicelevel: number};

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai){
    switch(order.type){
        case "masala": 
            return `Masala Chai`
            break;
        
        case "ginger": 
            return `ginger Chai`
            break;

        case "elaichi": 
            return "Elaichi Chai"
            break;
    }
}

// =======================================

// TASK 1
function orderChai(chai: string | number | boolean){
    if(typeof chai === "string"){
        return `Ordered ${chai} Chai`
    }

    if(typeof chai === "number"){
        return `Order ${chai} Chai`
    }


    return `Chai is${chai}`
}

// TASK 2

type email = {
    email: string,
    owner: string
}

type phone = {
    num: number,
    owner: string 
}

function userCredentials(data: email | phone){
    if("email" in data){
        return `Mail ${data.owner} on ${data.email}`
    }

    return `Call ${data.owner} on ${data.owner}`
}


/// TASK 3