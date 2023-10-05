const fs = require('fs');
const path = require('path')

const dir = './Logs'

// 1 - Remove Log files
for (let i=0; i<10;i++){
    const filename = `log${i}.txt`
    const filenamepath = path.join(dir,`log${i}.txt`)
    if(fs.existsSync(filenamepath)){
        fs.unlink(filenamepath, (err) => {
            if (err){
                console.error(`Cannot delete the file: ${filename}`, err)
            }else{
                console.log(`delete files...${filename}`);
            }

        })
    }
}
// 2 - Create Log files
for (let i=0; i<10;i++){
    const filename2 = `log${i}.txt`
    const filename2path = path.join(dir,`log${i}.txt`)

    fs.writeFile(filename2path, " ",(err) =>{
        if(err){
            console.error(`Cannot create ${filename2}:`, err)
        }else{
            console.log(`${filename2}`)
        }
    })
}
