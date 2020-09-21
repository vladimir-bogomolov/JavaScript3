// Exercise B
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];

async function makeAllCaps(array) {
        try {
            let capsArray = array.map(word => {
                if (typeof word === 'string') {
                    return word.toUpperCase();
                } else {
                    throw new Error('Error: Not all items in the array are strings!');
                }
            });
            return capsArray;
        } catch(err) {
            return err;
        }
}

async function main() {
    console.log(await makeAllCaps(arrayOfWords));
}
main();
