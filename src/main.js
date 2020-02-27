const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {resolve('OK')}, 2000);
});

async function executaPromisse(){
    const response = await minhaPromise();
    console.log(response);
    
}

executaPromisse();