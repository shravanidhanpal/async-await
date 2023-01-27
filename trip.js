function buycar(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('buy a car');
        },6000);
    })
}

function makeaplan(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('plan a trip')
        },2000);
    })
}

function visittour(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('visit to the tourist places');
        },1000)
    });
}

function reachhyd(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject('some problem occured');
        },1000)
    });
}

async function fun1(){
    try{
        const msg= await buycar();
        console.log(msg);
        const msg1=await makeaplan();
        console.log(msg1);
        const msg2=await visittour();
        console.log(msg2);
        const msg3=await reachhyd();
        console.log(msg3); 
    }
    catch(err){
        console.log(err);
    }
}
fun1();