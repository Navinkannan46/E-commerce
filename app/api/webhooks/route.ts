import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { createOrUpdate, deleteUser } from "@/lib/action/user.actions";

export async function POST(req: Request) {
  try {
    const evt = await verifyWebhook(req);
    console.log(`Event type: ${evt.type}`);

    if (evt.type === "user.created" || evt.type === "user.updated") {
      const { id, email_addresses, first_name, last_name } = evt.data;
      const email = email_addresses?.[0]?.email_address;
      if (!email) {
        return new Response("Email not found in webhook payload", { status: 400 });
      }

      await createOrUpdate({
        id,
        email,
        first_name: first_name || "",
        last_name: last_name || "",
      });
      return new Response("User created or updated", { status: 200 });
    } else if (evt.type === "user.deleted") {
      const { id } = evt.data;
      if (!id) {
        return new Response("User ID not found in webhook payload", { status: 400 });
      }
      await deleteUser(id);
      return new Response("User deleted", { status: 200 });
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error processing webhook:", err);
    return new Response("Error processing webhook", { status: 400 });
  }
}