const chai = {
    name: "Masala chai",
    price: 20,
    isHot: true
}

let tea: {
    name: string,
    price: number,
    isHot: boolean
}

tea = {
    name: "Ginger Tea",
    price: 25,
    isHot: true
}

// type alias object

type Tea = {
    name: string,
    price: number,
    ingredients: string[]
}

const adrakChai: Tea ={
    name: "Adrak Chai",
    price: 15,
    ingredients: ["ginger", "tea leaves"]
}

// duc types

type Cup = { size: string };
let smallCup: Cup = { size: "200ml" };

let bigCup = {size: "500ml", material: "steel"};

smallCup = bigCup

type Brew = { brewTime: number };
const coffe = { brewTime: 5, beans: "Arabica" }

const chaiBrew:Brew = coffe

type User = {
    username: string,
    password: string
}

const u: User = {
    username: "chaicode",
    password: "123"
}


// spilt out data type

type Item = { name: string, quality: number};
type Address = {street: string, pin: number};

type Order = {
    id: string;
    item: Item[];
    address: Address
}

// type Chai = {
//     name: string;
//     price: number,
//     isHot: boolean
// }

// const updateChai = (updates: Partial<Chai>) => {
//     console.log("updating chai with, updates")
// }

type ChaiOrder = {
    name?:string;
    quantity?:number
}

const placeholder = (order: Required<ChaiOrder>) => {
    console.log(order)
}

placeholder({
    name: "Masala Chai",
    quantity: 2
})

type Chai = {
    name: string,
    price: number,
    isHot: boolean,
    ingredients: string[]
}

type BasicChaiInfo = Pick<Chai, "name" | "price">

const chaiInfo: BasicChaiInfo = {
    name: "Lemon Tea",
    price: 30
}

type ChaiNew = {
    name: string,
    price: number,
    isHot: boolean,
    secretIngredients: string
}

type PublicChai = Omit<Chai, "secretIngredients">;
