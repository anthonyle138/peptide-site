import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PeptideLab - Premium Research Peptides',
  description: 'High purity research peptides for laboratory use. BPC-157, TB-500, Melanotan, Ipamorelin and more. Quality guaranteed.',
  keywords: 'peptides, research peptides, BPC-157, TB-500, Melanotan, Ipamorelin, laboratory research',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-molecule">
        {children}
      </body>
    </html>
  );
}
