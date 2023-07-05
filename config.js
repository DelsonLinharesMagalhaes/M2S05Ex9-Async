async function runMyCode() {
    const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('mundo!');
        }, 3000);
    });

    await promise.then(response => {
        console.log(response);
    });
    console.log('Olá,');
}

runMyCode();
