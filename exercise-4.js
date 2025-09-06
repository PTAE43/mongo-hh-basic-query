import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const db = client.db("practice-mongo");
        const pizzaOrders = db.collection("pizzaOrders");

        //exercise-4.1
        // const order = await pizzaOrders.find({
        //     $and: [
        //         { quantity: { $lt: 5 } },
        //         { credit_card_type: "mastercard" }
        //     ]
        // }).toArray();

        //exercise-4.2
        // const order = await pizzaOrders.find({
        //     $and: [
        //         { size: "small" },
        //         { quantity: { $gte: 1 } },
        //         { quantity: { $lte: 5 } }
        //     ]
        // }).toArray();

        //exercise-4.3
        const order = await pizzaOrders.find({
            $and: [
                { quantity: { $gt: 10 } },
                { credit_card_type: null }
            ]
        }).toArray();


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
