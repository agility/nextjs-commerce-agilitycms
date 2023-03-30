import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
import { useEffect, useState } from 'react'
import CheckoutForm from './checkout-form'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const publicKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || ''
const stripePromise = loadStripe(publicKey)

interface Props {
  onComplete: () => void
}

export default function Checkout({ onComplete }: Props) {
  const [clientSecret, setClientSecret] = useState('')

  const options = {
    // passing the client secret obtained from the server
    clientSecret,
  }

  useEffect(() => {
    axios.post('/api/stripe/create-payment-intent', {}).then((res) => {
      console.log('res:', res)
      setClientSecret(res.data.clientSecret)
    })

    return () => {}
  }, [])

  return (
    <>
      {!clientSecret && <div>Loading...</div>}
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm onComplete={() => onComplete()} />
        </Elements>
      )}
    </>
  )
}
