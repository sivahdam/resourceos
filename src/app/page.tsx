// 'use client';

// import { useEffect } from 'react';
// import Image from 'next/image';

// export default function Home() {
//   useEffect(() => {
//     // Just to ensure mailerlite picks up dynamic content if needed
//     if (typeof window !== 'undefined' && (window as any).ml) {
//       (window as any).ml('form', 'gNY3ke'); // optional
//     }
//   }, []);

//   return (
//     <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
//       <Image src={"/logo-black.png"} alt={''} width={400} height={400} className="invert"></Image>
//       {/* ✅ Embedded form container */}
//       <div className="ml-embedded" data-form="gNY3ke"></div>
//     </main>
//   );
// }

import MailerLiteEmbed from './components/MailerLiteEmbed';
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
    <img src="/logo-black.png" alt="" width="400" height="400" className="invert" />
    {/* <Image src={"/logo-black.png"} alt={''} width={400} height={400} className="invert"></Image> */}
      {/* 👉 the working inline form */}
      <MailerLiteEmbed />
      <br></br>
      <h1 className="text-4xl font-semibold mb-2">Comming Soon</h1>
      <br></br>
      <p>© 2025 Resource OS. All Rights Reserved.</p>
    </main>
  );
}
