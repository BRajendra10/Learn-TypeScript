// GENERICS

function warpInArray<T>(item: T): T[] {
    return [item]
}

warpInArray("Masala")
warpInArray(42)
warpInArray({ flavour: "flavour" })

function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b]
}

pair("masla", "test")

interface box<T>{
    content: T
}

const numberBox: box<number> = {content: 10}
const numberBoxCup: box<string> = {content: "10"}

interface ApiPromise<T>{
    status: number,
    data: T,
}

const res: ApiPromise<{flavor: string}> = {
    status: 200,
    data: {flavor: "masala"}
}