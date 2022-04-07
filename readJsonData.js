var fs=require('fs');

//////     Blocking   //////
var content = fs.readFileSync('./data.json', 'utf8')
console.log("Sync")

var data=JSON.parse(content);
console.log(data)
console.log("Done Sync")

// // // // //

//////////////     non blocking     /////////////////////
 fs.readFile('./data.json','utf8', function(err, data){
	if(err) throw err;
    console.log("ASync")
   var FileContent = JSON.parse(data);
	console.log(FileContent)
})
console.log("=============================================")
console.log('Done');
