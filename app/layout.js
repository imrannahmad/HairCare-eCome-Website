import './globals.css';

export const metadata = {
  title: 'Sajad Hygam | Botanical Hair Restoration & Scalp Science',
  description: 'Handcrafted botanical hair restoration formulations by Sajad Hygam. Reverse scalp thinning and awaken dormant roots in 60-90 days with 100% herbal active extracts.',
  keywords: 'Sajad Hygam, hair loss treatment, botanical hair elixir, herbal hair regrowth, Kashmir herbs',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=Nunito+Sans:ital,opsz,wght@0,6..12,300;0,6..12,400;0,6..12,500;0,6..12,600;0,6..12,700;0,6..12,800;1,6..12,400&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
