import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const db = client.db("practice-mongo");
        const pizzaOrders = db.collection("pizzaOrders");

        //exercise-3.1
        // const order = await pizzaOrders.find(
        //     { total_price: { $gte: 0 } }).sort({ total_price: -1 }).toArray();

        //exercise-3.2
        const order = await pizzaOrders.find(
            { created_at: { $lte: new Date() } }).sort({ created_at: 1 }).toArray();

        if (order.length > 0) {
            console.log("เจอข้อมูล:", order);
        } else {
            console.log("ไม่พบข้อมูล");
        }

    } catch (error) {
        console.log(error.message);
    } finally {
        await client.close();
    }
}

run();
