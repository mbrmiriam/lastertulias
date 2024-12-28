import { loadStripe } from '@stripe/stripe-js';

console.log('1. Iniciando configuración de Stripe');
console.log('STRIPE_KEY:', process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ? 'Existe' : 'No existe');

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  console.error('2. ❌ La clave pública de Stripe no está configurada');
} else {
  console.log('2. ✅ La clave pública de Stripe está configurada');
}

export function useStripeCheckout() {
  const handleCheckout = async (priceId: string) => {
    try {
      console.log('4. Iniciando proceso de checkout');
      console.log('   Price ID:', priceId);

      console.log('5. Creando sesión de checkout...');
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId }),
      });

      if (!response.ok) {
        console.error('6. ❌ Error en la respuesta del servidor:', response.status);
        throw new Error('Error al crear la sesión de pago');
      }

      console.log('6. ✅ Sesión creada correctamente');
      const { url } = await response.json();
      console.log('7. URL de checkout obtenida:', url);

      if (!url) {
        throw new Error('No se recibió la URL de checkout');
      }

      console.log('8. Redirigiendo a:', url);
      window.location.href = url;
    } catch (error) {
      console.error('❌ Error en el proceso:', error);
      alert('Hubo un error al procesar tu compra. Por favor, inténtalo de nuevo.');
    }
  };

  return { handleCheckout };
} 