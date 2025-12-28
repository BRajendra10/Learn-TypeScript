const ChailFlavours: string[] = ["Masala", "Adrak"]
const ChaiPrice: number[] = [10, 20]

const rating: Array<number> = [4.5, 5.0]

type Chai = {
    name: string;
    price: number
}

const menu: Chai[] = [
    {
        name: "Masala",
        price: 15,
    }
]

const cities: readonly string[] = ["Delih", "jaipur"]

const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
]

let chaiTuple: [string, number];

chaiTuple = ["Masala", 20];


let userInfo: [string, number, boolean?];
userInfo = ["Hitesh", 100];
userInfo = ["Hitesh", 100, true]

const location: readonly [number, number] = [28.66, 32.22];

const chaiTimes: [name: string, price: number] = ["masala", 25]

enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE

enum Status {
    PENDING = 100,
    SERVED, // 101
    CANCELLED // 102
}

enum ChaiType  {
    MASALA = "masala",
    GINGER = "ginger"
}

function makeChai(type: ChaiType) {
    console.log(`Making ${type}`)
}

makeChai(ChaiType.GINGER)

enum RandomEnum {
    ID = 1,
    NAME ="CHAI"
}

const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3,
}

const s = Sugars.LOW

let t:  [string, number] = ["Chai", 10]