import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripeCheckoutForm from "./StripeCheckoutForm";
import { useState, useEffect } from "react";
import { fetchWithAuth } from "../utils";

// Use your actual publishable key from Stripe Dashboard
const stripePromise = loadStripe("pk_test_51NuvsxGmy2bYQ49hWNTrWOTlYLcBHBCX6810klE6yeg90wWMQ6ndwFRypn1qNUmG79Y8GjCvMxuy8EfHQYcUdymn00LqcirOUj");

export default function StripeCheckout() {
    const [clientSecret, setClientSecret] = useState('');
    
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetchWithAuth("http://localhost:8000/api/payments/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({'amount': 1000}),
        })
          .then((res) => res.json())
          .then((data) => {
            setClientSecret(data.clientSecret);
          });
      }, []);

    return (
        <div className="py-10">
            {clientSecret && (
                <Elements stripe={stripePromise} options={{clientSecret: clientSecret}}>
                    <StripeCheckoutForm />
                </Elements>
            )}
        </div>
    );
}
