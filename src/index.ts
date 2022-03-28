import hello from "api/hello"

export function sum(a: number, b: number): number {
    return a + b;
}

export function diff(a: number, b: number): number {
    return a - b;
}

export function message(msg: string): string {
    return msg;
}

console.log(hello('ciao'));