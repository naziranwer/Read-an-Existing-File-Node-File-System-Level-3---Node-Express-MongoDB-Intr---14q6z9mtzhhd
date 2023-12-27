const fs = require("fs/promises");
const fileName = "myfile.txt";
const reader = async (fileName) => {
  // write code here
	// dont change function name
  try{
      const data= fs.readFile(fileName,{encoding :'utf8'});
      return data;
  }
  catch(e){
       console.error(e);
  }
  
};


module.exports =  reader ;
