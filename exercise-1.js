import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const db = client.db("practice-mongo");
        const pizzaOrders = db.collection("pizzaOrders");

        //exercise-1.1
        // const order = await pizzaOrders.findOne({ customer_name: "Cherlyn" });
        // if (order) {
        //     console.log("เจอข้อมูล:", order);
        // } else {
        //     console.log("ไม่พบข้อมูล");
        // }

        //exercise-1.2
        // const orders = await pizzaOrders.find({ credit_card_type: "mastercard" }).toArray();

        //exercise-1.3
        const orders = await pizzaOrders.find({ size: "medium" }).limit(5).toArray();

        if (orders.length > 0) {
            console.log("เจอข้อมูล:", orders);
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
