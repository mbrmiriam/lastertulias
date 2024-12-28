import { NextResponse } from 'next/server'
import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set in environment variables');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
})

export async function POST(request: Request) {
  try {
    console.log('1. Iniciando creación de sesión de checkout');
    const { priceId } = await request.json();
    console.log('2. Price ID recibido:', priceId);

    if (!priceId) {
      console.error('3. ❌ No se proporcionó Price ID');
      return new NextResponse('Price ID is required', { status: 400 });
    }

    // Obtener la URL base
    const origin = request.headers.get('origin') || 'https://las-tertulias-web.miriamdong.repl.co';
    console.log('URL base:', origin);

    console.log('3. ✅ Price ID validado');
    console.log('4. Creando sesión de checkout en Stripe...');

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/#entradas`,
      allow_promotion_codes: true,
      billing_address_collection: 'required',
      customer_creation: 'always',
    });

    console.log('5. ✅ Sesión creada:', session.id);
    console.log('Success URL:', session.success_url);
    console.log('Cancel URL:', session.cancel_url);
    console.log('Checkout URL:', session.url);
    
    return NextResponse.json({ 
      sessionId: session.id,
      url: session.url 
    });
  } catch (error) {
    console.error('❌ Error en el servidor:', error);
    return new NextResponse(
      'Internal Server Error',
      { status: 500 }
    );
  }
} 