//example with promises of adding cold drinks.
console.log('person 1: shows ticket');
console.log('person 2: shows ticket');
const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000)
});
promiseWifeBringingTicks.then((t)=>{
    console.log(`person 3: shows ${t}`);
});
console.log('person 4 : shows ticket');
console.log('person 5: shows ticket');
const getPopcorn=promiseWifeBringingTicks.then((t)=>{
    console.log('wife: i have the ticks');
    console.log('husband: we should go in');
    console.log('wife: no, i am hungry');
    return new Promise((resolve,reject)=>resolve(`${t} popcorn`));
});
const addbutter=getPopcorn.then((t)=>{
    console.log('husband: i got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: i want some butter on popcorn');
    return new Promise((resolve,reject)=>resolve(`${t} butter`));
});
const getcolddrinks=addbutter.then((t)=>{
    console.log('husband: i got some butter on popcorn');
    console.log('husband: we should go in');
    console.log('wife: i want some cold drinks.');
    return new Promise((resolve,reject)=>resolve(`${t} colddrinks`));
})
getcolddrinks.then((t)=>console.log(t));

//example with async-await of adding cold drinks.
console.log('person 1 : shows ticket');
console.log('person 2 : shows ticket');
const preMovie=async()=>{
    const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('ticket'),3000);
    });
    const getpopcorn=new Promise((resolve,reject)=>resolve(`popcorn`));
    
    const addbutter=new Promise((resolve,reject)=>resolve(`butter`));
    
    const getcolddrink=new Promise((resolve,reject)=>resolve(`colddrink`));
    
    let ticket=await promiseWifeBringingTicks;

    console.log(`wife: i have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no, i am hungry');

    let popcorn=await getpopcorn;

    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: i want some butter on popcorn');

    let butter= await addbutter;

    console.log(`husband: i got some ${butter} on popcorn`);
    
    let colddrink=await getcolddrink;

    console.log('husband: we should go in');
    console.log('wife: i want some cold drinks.');
    console.log('husband: i got some cold drinks.');

    return ticket;
}

preMovie().then((m)=>console.log(`person3: shows ${m}`));

console.log('person 4: shows ticket');
console.log('person 5: shows ticket');