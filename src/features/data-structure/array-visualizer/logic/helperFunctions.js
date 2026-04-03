export const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

export function getKey(){
    return Date.now() + Math.random();
}