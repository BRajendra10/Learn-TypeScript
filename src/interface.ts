// INTERFACE & GENERIC

interface Chai {
    flavour: string,
    price: number,
    milk?: boolean
}

const masalaChai: Chai = {
    flavour: "Masala",
    price: 30
}

interface Shop {
    readonly id: number
    name: string
}

const s: Shop = {
    id: 1,
    name: "ChaiCode caffe"
}

interface DiscountCalculator {
    (price: number): number
}

const apply50: DiscountCalculator = (p) => {
    return p * 0.5
}

interface TeaMachine{
    start(price:number):void
    stop():void
}

const machine: TeaMachine = {
    start(){
        console.log("start")
    },
    stop() {
        console.log("stop")
    },
}

interface ChaiRating {
    [flavour: string]: number
}

const ratings: ChaiRating = {
    masalaChai: 4.5
}

interface User {
    name: string
}

interface User {
    age: number
}
const u: User = {
    name: "Rajendra Behera",
    age: 20
}

interface A {a: string}
interface B {b: string}

interface c extends A, B {}