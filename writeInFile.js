var fs=require('fs');


fs.writeFile('./info.txt', 'hello iti', function (err) {
    if (err) return console.log(err);
  console.log('Write in file successfuly');
  });