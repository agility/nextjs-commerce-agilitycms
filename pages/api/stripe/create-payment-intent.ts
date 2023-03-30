import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const stripeSecret = process.env.STRIPE_SECRET_KEY || ""

	const stripe = new Stripe(stripeSecret, {
		apiVersion: "2022-11-15",
		typescript: true
	});

	const paymentIntent = await stripe.paymentIntents.create({
		amount: 5000,
		currency: "CAD",
		capture_method: "automatic",

	})


	return res.status(200).send({ clientSecret: paymentIntent.client_secret });

}