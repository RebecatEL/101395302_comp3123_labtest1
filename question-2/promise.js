const resolvedPromise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        let success ='delayed success!'
        resolve(success);
    }, 500)    
})

const rejectedPromise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        let err ='delayed exception!'
        reject(err)
    }, 500)    
})

resolvedPromise.then(resolvedResult => { console.log(`{message: '${resolvedResult}'}`) })
rejectedPromise.catch(rejectedResult => { console.log(`{error: '${rejectedResult}'}`) })
