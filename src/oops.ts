// class Chai {
//     flavour: string;
//     price: number

//     // constructor(flavour: string, price: number){
//     //     this.flavour = flavour
//     //     this.price = price
//     // }

//     constructor(flavour: string){
//         this.flavour = flavour
//     }
// }

// const masalaChai = new Chai("Ginger", 20)
// masalaChai.flavour = "Masala"

class Chai{
    public flavour: string = "Masala"
    private secretIngredients = "Cardmom"

    reveal(){
        return this.secretIngredients
    }
}

class Shop {
    protected shopName = "Chai corner"
}

class Branch extends Shop {
    getName(){
        return this.shopName
    }
}

class Walet{
    #balance = 100

    getBalance(){
        return this.#balance
    }
}

const w = new Walet();
w.getBalance

class Cup{
    readonly capacity: number = 250;

    constructor (capacity:number){
        this.capacity = capacity
    }
}

class ModernChai {
    private _sugar = 2

    get sugar(){
        return this._sugar
    }

    set sugar(value:number){
        if(value > 5) throw new Error("Too sweet");

        this._sugar = value
    }
}

const c = new ModernChai()
c.sugar = 3

class EkChai{
    static shopName = "Chaicode caffe"

    constructor(public flavour: string){}
}

abstract class Drink{
    abstract make():void
}

class MyChai extends Drink{
    make(){
        console.log("Brewing chai")
    }
}

class Heater{
    heat(){}
}

class ChaiMake{
    constructor(private heater: Heater){

    }

    make(){
        this.heater.heat
    }
}