import { createOrUpdate } from '@/lib/action/user.actions'
import { verifyWebhook } from '@clerk/nextjs/webhooks'

export async function POST(req: Request) {
    try {
        const evt = await verifyWebhook(req)

        // Do something with payload
        // For this guide, log payload to console
        const eventType = evt.type
        console.log(` event type of ${eventType}`)
        if (evt.type === 'user.created' || evt.type === 'user.updated') {
            try {
                const { id, email_addresses, first_name, last_name } = evt.data
                const email = email_addresses?.[0]?.email_address;
                if (!email) {
                    return new Response('Email not found in webhook payload', { status: 400 });
                }
                
                await createOrUpdate({
                    id,
                    email,
                    first_name: first_name || '',
                    last_name: last_name || '',
                })
                return new Response('user is created or updated')
            } catch (error) {
                console.log('Error is created or updated', error);
                return new Response('Error Occured', { status: 400, })

            }

        }
        return new Response('Webhook received', { status: 200 })
    } catch (err) {
        console.error('Error verifying webhook:', err)
        return new Response('Error verifying webhook', { status: 400 })
    }

}