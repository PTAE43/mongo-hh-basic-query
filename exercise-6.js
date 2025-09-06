import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const db = client.db("practice-mongo");
        const pizzaOrders = db.collection("pizzaOrders");

        //exercise-6.1
        // const order = await pizzaOrders.updateMany(
        //     { customer_name: "Jack" },
        //     {
        //         $set: {
        //             "isAdmin": false
        //         }
        //     });

        //exercise-6.2
        // const order = await pizzaOrders.updateMany(
        //     {},
        //     {
        //         $set: {
        //             "country": "Thailand"
        //         }
        //     });

        //exercise-6.3
        const order = await pizzaOrders.updateOne(
            { customer_name: { $regex: "M" } },
            {
                $set: {
                    "size": "large",
                    "total_price": 200000,
                    "quantity": 20,
                    "customer_name": "M",
                    "credit_card_type": "mastercard",
                    "created_at": "2022-01-01T10:48:40Z"
                }
            });

        console.log(`เจอ ${order.matchedCount} document`);
        console.log(`แก้ไข ${order.modifiedCount} document`);


    } catch (error) {
        console.log(error.message);
    } finally {
        await client.close();
    }
}

run();