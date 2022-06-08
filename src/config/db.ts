import {connect} from "mongoose";

require("./db");

 async function connects(){
    
        try {
         await connect('mongodb://localhost:27017/UserDetails');
        
         console.log("Database is connected");
     } catch (error) {
         console.log(error);
     }
}

export default connects;

