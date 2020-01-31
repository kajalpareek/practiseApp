//CRUD create , read, update and delete operations
//const mongodb= require('mongodb')
//const MongoClient = mongodb.MongoClient

const {MongoClient,ObjectId} =require('mongodb')

const connectionUrl='mongodb://127.0.0.1//27017'
const databaseName='task-manager'



MongoClient.connect(connectionUrl,{useNewUrlParser: true}, (error,client)=>{
    if(error){
        console.log('error occured')
    }
    //create database first
   const db= client.db('databaseName')
    

/////////////  Insert operation  ///////

 //create collection(table) and insert data in that for single insertion
 /* 
 db.collection('users').insertOne(
       {
       name:'priyanka',
       age: 23
   },(error,result)=>{
       if(error){
           console.log('error in uploading data')
       }
       console.log(result.ops)
   })

*/
//for inserting multiple data


  /* db.collection('users').insertMany([{
       name:'kajal',
       age:'23'
   },{
       name:'Priya',
       age:'24'
   }],(error,result)=>{
       if(error){
           console.log('data upload unsuccessfull')
       }
       console.log(result.ops)
  })
  db.collection('tasks').insertMany([{
       description:'house cleaning task',
       completed: true
},{
    description:'washing clothes task',
       completed: true
},{
    description:'cooking food task',
       completed: false
}]),  (error,result)=>{
    if(error){
        console.log('data upload issue')
    }
    console.log(result.ops)
}
*/

///////////////   Read operation   ////////////////////////////////////
/*
db.collection('users').findOne(  {name:'nisha'},(error,user)=>{
    if(error){
    return console.log('unable to fetch')
    }
    console.log(user)
})
db.collection('users').findOne({_id: new ObjectId("5e328c54973ee54530f5d5a8")},(error,user)=>{
    if(error){
        return console.log("unable to fetch")
    }
    console.log(user)
})
db.collection('users').find({age:'23'}).toArray((error,users)=>{
    if(error){
        return console.log('unable to fetch data')
    }
    console.log(users)
})

db.collection('users').find({age:'23'}).count((error,count)=>{
    console.log(count)
})
//task
db.collection('tasks').findOne({_id:new ObjectId("5e328e9e371bf01188008f18")},(error,user)=>{
    if(error){
        console.log('unable to fetch')
    }
    console.log(user)
})
db.collection('tasks').find({completed: false}).toArray((error,task)=>{
    if(error){
        console.log('error in fetch')
    }
    console.log(task)
})
*/

///////// Update Opearation //////////
/*
 db.collection('users').updateOne({
    _id: new ObjectId("5e33dd92d9c2c4b300eb0a7b")
},{
    $inc:{
        age: 1
    }

})
.then((result)=>{
    console.log(result)
}
).catch((error)=>{
    console.log(error)
})
*/
/*
db.collection('tasks').updateMany({
    completed: false
},{
    $set:{
        completed: true
    }
}).then((result)=>{
    console.log(result)
})
.catch((error)=>{
console.log(error)
})
*/
///////////  Delete Opeartion   ////////
db.collection('users').deleteMany({
    age:'23'
}).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})
db.collection('tasks').deleteOne({
    description: 'sweep'
}).then((result)=>{
    console.log(result)
}).catch(
    (error)=>{
        console.log(error)
    }
)
})