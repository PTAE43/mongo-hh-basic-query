import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const db = client.db("practice-mongo");
        const pizzaOrders = db.collection("pizzaOrders");

        //exercise-7
        const order = await pizzaOrders.deleteMany({ customer_name: "Jack" });

        console.log(`ลบไปทั้งหมด ${order.deletedCount} document`);

    } catch (error) {
        console.log(error.message);
    } finally {
        await client.close();
    }
}

run();