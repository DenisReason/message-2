import { MongoClient } from "mongodb";


const url = "mongodb+srv://denisadmin:00000000tri@cluster0.nmebfc9.mongodb.net/"
const Client = new MongoClient(url)

export const GetuserByUsername = async  (username)=>{
    try {
        await Client.connect()
        const db = Client.db("MessageDB")
        const collection = db.collection("Account")
        const data = await collection.findOne({username:username})
        console.log(data);
        Client.close()
        return data
    } catch (error) {
        console.log(error)
    }
}   