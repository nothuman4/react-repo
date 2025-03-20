
//this file is vreatred to connect with database
const mongoose = require('mongoose');
  const connection = mongoose.connect('mongodb://0.0.0.0/men').then(()=>{
console.log("connected to database"); //YE LINE CONST CONNECTION HMARE DB AND NODE K BICH CONNECTION
//TO BNATI HI BNATI H SATH IS SATH US CONNECTION KO RETIRN BHI KRTI H TO 
//HMNE US RETURN VALUE KO EK VARIABLE ME STORE KREWA LIYA 


});
//now  export it 
module.exports =  connection;
 