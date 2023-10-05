const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

const output = new Promise((resolve, reject) => {
    setTimeout(()=> {
        if (Array.isArray(mixedArray)) { // Resolve if input is array

            // .filter() for array filter
                // typeof = 'string', regex /^[a-zA-Z]+$/.test(),
            // .map() for lower case
                // .toLowerCase()
            const filteredArray = mixedArray.filter(item => {
                return typeof item === 'string' && /^[a-zA-Z]+$/.test(item)
            }).map(item => item.toLowerCase(item))

            resolve(filteredArray)
        } else {  // Reject if input is not array
            reject("You must input an array")
        }
    }, 300)    
})

output.then(fulResult => { console.log(fulResult) })
    .catch(err => { console.log(err) })
