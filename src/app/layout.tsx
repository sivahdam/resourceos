// import './globals.css';
// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Resource OS',
//   description: 'Student resource hub',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* MailerLite Script (must be in <head>) */}
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){
// (w[f].q=w[f].q||[]).push(arguments);};l=d.createElement(e);l.async=1;
// l.src=u;n=d.getElementsByTagName(e)[0];n.parentNode.insertBefore(l,n);
// })(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
// ml('account', '1595228');`,
//           }}
//         />
//       </head>
//       <body className={`${inter.className} bg-black text-white`}>
//         {children}
//       </body>
//     </html>
//   );
// }


import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Resource OS',
  description: 'Student resource hub',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>{children}</body>
    </html>
  );
}
