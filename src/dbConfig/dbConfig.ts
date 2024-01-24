import mongoose from 'mongoose';
    

export async function connect(){
    try {
     mongoose.connect(process.env.MONGO_URL!);
     const connection = mongoose.connection;

     connection.on('mongodb connected!!!',()=>{
        console.log("mongodb connected!!!")
     })
     
        connection.on('error',(err)=>{
            console.log('Mongodb not connected' + err)
            process.exit();
        })



    } catch(error) {
        console.log('Something was wrong');
        console.log(error);
     
    }    
    
}