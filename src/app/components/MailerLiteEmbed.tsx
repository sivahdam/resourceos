/* ──────────────────────────────────
   Inline MailerLite form component
   ────────────────────────────────── */
   'use client';

   import Script from 'next/script';
   
   const ACCOUNT_ID = '1595228';
   const FORM_UID   = 'gNY3ke';             // ← the UID you were given
   
   export default function MailerLiteEmbed() {
     return (
       <>
         {/* 1️⃣  Load the ML loader *after* React has hydrated  */}
         <Script
           id="ml-universal"
           strategy="afterInteractive"
           dangerouslySetInnerHTML={{
             __html: `
               (function (w,d,e,u,f,l,n){
                 w[f]=w[f]||function(){(w[f].q=w[f].q||[]).push(arguments);};
                 l=d.createElement(e); l.async=1; l.src=u;
                 n=d.getElementsByTagName(e)[0]; n.parentNode.insertBefore(l,n);
               })(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
   
               ml('account', '${ACCOUNT_ID}');
               ml('enablePopups', false);        /* ✅ 2 – no pop-ups ever   */
             `,
           }}
         />
   
         {/* 3️⃣  The placeholder MailerLite replaces at runtime.
                 suppressHydrationWarning tells React to ignore whatever
                 ML injects into this node.                           */}
         <div
           className="ml-embedded"
           data-form={FORM_UID}
           suppressHydrationWarning
         />
       </>
     );
   }
   