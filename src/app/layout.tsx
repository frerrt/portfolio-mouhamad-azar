import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mouhamad Azar — Portfolio',
  description: 'Développeur Backend / Full-Stack & Étudiant M1 IA',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-surface text-on-surface min-h-screen flex flex-col font-body-md">
        {children}
      </body>
    </html>
  );
}