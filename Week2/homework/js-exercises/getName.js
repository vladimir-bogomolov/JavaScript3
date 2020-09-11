const getAnonName = (firstName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!firstName) {
                reject("You didn't pass in a first name!");
            }
            resolve(`${firstName} Doe`);
        }, 2000);
    });
};

getAnonName('John')
.then((result) => {console.log(result)})
.catch((err) => {console.log(err)});