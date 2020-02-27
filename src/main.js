const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {resolve('OK')}, 2000);
});

async function executaPromisse(){

    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    
}

executaPromisse();