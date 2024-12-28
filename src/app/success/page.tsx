'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";

export default function SuccessPage() {
  useEffect(() => {
    // Aquí podrías verificar el estado de la sesión con el session_id si lo necesitas
    const sessionId = new URLSearchParams(window.location.search).get('session_id');
    console.log('Session ID en success:', sessionId);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">¡Gracias por tu compra!</h1>
        <p className="text-xl text-gray-400 mb-8">
          Hemos enviado los detalles de tu compra a tu correo electrónico.
        </p>
        <Button
          size="lg"
          className="bg-white text-black hover:bg-gray-100"
          asChild
        >
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    </div>
  );
} 