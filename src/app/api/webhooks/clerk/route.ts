// /api/clerk/webhook/route.ts
// This is a Next.js API route that handles incoming webhooks from Clerk.
// It listens for POST requests and logs the received data to the console.
// The route is defined using the Next.js App Router and is located at /api/clerk/webhook.
// The route is exported as a POST function that takes a Request object as an argument.

import { db } from "@/server/db";

export const POST = async (req: Request) => {
    const {data} = await req.json();

    const firstName = data.first_name;
    const lastName = data.last_name;
    const emailAddress = data.email_addresses[0].email_address;
    const id = data.id;
    const imageUrl = data.profile_image_url;

    await db.user.create({
        data : {
            emailAddress,
            firstName,
            lastName,
            id,
            imageUrl,
        }
    })
    console.log("Received webhook data:", data);

    return new Response("Webhook received");
}