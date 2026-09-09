import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CarritoProvider } from '@/components/CarritoContext';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-fraunces',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Finca Kilamupi — Agroturismo y productos de origen',
  description:
    'Finca agroecológica en el Valle del Upano, Morona Santiago. Café, vainilla y cacao de origen, y experiencias de agroturismo cerca del Parque Nacional Sangay.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-crema text-tierra font-body antialiased">
        <CarritoProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CarritoProvider>
      </body>
    </html>
  );
}
