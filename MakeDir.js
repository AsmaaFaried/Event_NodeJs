var fs=require('fs');
const folderName = './NewNodeJsDir'

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName)
    console.log(folderName+" Making directory successfuly")
  }
} catch (err) {
  console.error(err)
}