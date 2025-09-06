import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const db = client.db("practice-mongo");
        const pizzaOrders = db.collection("pizzaOrders");

        //exercise-2
        const order = await pizzaOrders.findOne(
            { customer_name: "Zoe" },
            {
                projection: {
                    total_price: 1,
                    customer_name: 1,
                    _id: 0
                }
            });

        if (order) {
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