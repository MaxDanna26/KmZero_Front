import { loadStripe } from '@stripe/stripe-js';
import propTypes from 'prop-types';

const stripePromise = loadStripe('pk_test_51RHoePQpIu5EfrpZ2yMLwvo0r2UyVXTYcSxNvtQEI2GfuEpOM1ln8KlamIa4jwEHvTMyIlatYqubeBIbbHjp8qM500A4iKGX9v');

const CheckoutButton = ({ cartItems }) => {
  const handleClick = async () => {
    const stripe = await stripePromise;

    const response = await fetch('/checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cartItems }),
    });

    const data = await response.json();
    if (data.url) {
      window.location.href = data.url;
    }
  };

  return <button onClick={handleClick}>Pagar con Stripe</button>;
};

export default CheckoutButton;

CheckoutButton.propTypes = {
  cartItems: propTypes.func,
}

