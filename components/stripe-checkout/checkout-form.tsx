import {
  PaymentElement,
  useStripe,
  useElements,
  Elements,
} from '@stripe/react-stripe-js'
import { useState } from 'react'

interface Props {
  onComplete: () => void
}

const CheckoutForm = ({ onComplete }: Props) => {
  const stripe = useStripe()
  const elements = useElements()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    setLoading(true)

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: 'http://localhost:3000/',
      },
    })

    if (!error) {
      //send the notification
      console.log('paymentIntent:', paymentIntent)
      setSuccess(true)
    } else {
      console.error('error:', error)
      setError(error.message || 'Something went wrong.')
    }

    setLoading(false)
  }

  if (error) {
    return (
      <div>
        <h2 className="text-lg text-center">Payment Error</h2>
        <div className="my-8 text-center">
          Your payment could not be processed. Please try again.
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="mt-3 inline-flex w-40 justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
            onClick={() => onComplete()}
          >
            OK
          </button>
        </div>
      </div>
    )
  }

  if (success) {
    return (
      <div>
        <h2 className="text-lg text-center">Payment Successful</h2>
        <div className='my-8 text-center'>Your payment was processed successfully.</div>
        <div className="flex justify-center">
          <button
            type="button"
            className="mt-3 inline-flex w-40 justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
            onClick={() => onComplete()}
          >
            OK
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-lg text-center"> Complete your Purchase</h2>
      <div className="mt-2">
        <PaymentElement id="payment-element" />
      </div>
      <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
        <button
          type="submit"
          className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2 disabled:opacity-50"
          disabled={!stripe || loading}
        >
          {loading ? 'Loading...' : 'Complete Purchase'}
        </button>
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
          onClick={() => onComplete()}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default CheckoutForm
