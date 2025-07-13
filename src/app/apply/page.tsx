// app/apply/page.tsx (for App Router in Next.js 13+)
export default function ApplyPage() {
    return (
      <main className="bg-white text-black min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h3 className="text-sm font-bold uppercase tracking-wide mb-4">FOUNDER OS</h3>
        <h1 className="text-3xl md:text-5xl font-bold max-w-3xl leading-snug mb-10">
          The future belongs to founders who build systemized personal brands. <br />
          Watch how the top 1% are creating leverage without sacrificing their freedom.
        </h1>
  
        <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://embed.vidalytics.com/video/YOUR_VIDEO_ID"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </main>
    );
  }