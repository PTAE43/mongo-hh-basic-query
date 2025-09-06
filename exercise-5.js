import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const db = client.db("practice-mongo");
        const pizzaOrders = db.collection("pizzaOrders");

        //exercise-5.1
        // const order = await pizzaOrders.insertOne({
        //     "size": "small",
        //     "total_price": 3000,
        //     "quantity": 8,
        //     "customer_name": "John",
        //     "credit_card_type": null,
        //     "created_at": "2021-02-07T10:48:40Z"
        // });

        //exercise-5.2
        const order = await pizzaOrders.insertMany([
            {
                "size": "small",
                "total_price": 3000,
                "quantity": 1,
                "customer_name": "James",
                "credit_card_type": null,
                "created_at": "2021-02-07T10:48:40Z"
            },
            {
                "size": "large",
                "total_price": 12000,
                "quantity": 13,
                "customer_name": "K",
                "credit_card_type": null,
                "created_at": "2022-03-05T10:48:40Z"
            },
            {
                "size": "small",
                "total_price": 2000,
                "quantity": 2,
                "customer_name": "Jack",
                "credit_card_type": null,
                "created_at": "2022-02-14T10:48:40Z"
            }
        ]);


        if (order) {
            console.log("เพิ่มข้อมูลสำเร็จ:", order);
        } else {
            console.log("ไม่สามารถเพิ่มข้อมูลได้ กรุณาตรวจสอบใหม่อีกครั้ง");
        }

    } catch (error) {
        console.log(error.message);
    } finally {
        await client.close();
    }
}

run();