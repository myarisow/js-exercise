

//async and await

function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");

        }, 2000);
    });
};


async function fetchDataAsync() {
    try {
        const message = await fetchDataWithPromise();
        console.log(message); 
    } catch (error) {
        console.error(error); 
    };
};

fetchDataAsync();
