import { db } from "./server/db";

await db.user.create({
    data : {
        emailAddress : "abc@gmail.com",
        firstName : "abc",
        lastName : "xyz",
    }
})