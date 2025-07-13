'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';
export default function HomeClient() {
  return (
    <>
    <Head>
  <title>Resource OS – Smarter Learning for Founders & Students</title>
  <meta name="description" content="Join 171,976+ founders & learners building better systems. Curated tools, content, and clarity with Resource OS." />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="index, follow" />
  <link rel="icon" href="/favicon.ico" />
</Head>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-black border-b border-white/10 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-white font-bold text-xl">Resource OS</div>
          <ul className="hidden md:flex gap-8 text-sm text-white">
            <li><a href="#">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
          <a
            href="/apply"
            className="bg-white text-black px-4 py-2 rounded-full font-medium text-sm hover:bg-gray-200 transition"
          >
            Apply Now
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="h-screen pt-24 bg-black text-white flex flex-col justify-center items-center px-6 text-center">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Unlock Smarter Learning with <br />
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Curated academic tools, skill-building content, and a growing community — built for today’s students who want more than lectures.
          </p>
          <a
            href="/apply"
            className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Apply Now
          </a>
        </motion.section>
        {/* Impact and Logo Section */}
<section className="bg-black text-white py-10 px-3 text-center" id="impact">
  <div className="flex flex-col items-center justify-center space-y-4">
    {/* Avatars */}
    <div className="flex -space-x-3">
      <img src="test.svg" alt="User 1" className="w-8 h-8 rounded-full border-1 border-black" />
      <img src="test.svg" alt="User 2" className="w-8 h-8 rounded-full border-1 border-black" />
      <img src="test.svg" alt="User 3" className="w-8 h-8 rounded-full border-1 border-black" />
      <img src="test.svg" alt="User 4" className="w-8 h-8 rounded-full border-1 border-black" />
      <img src="test.svg" alt="User 5" className="w-8 h-8 rounded-full border-1 border-black" />
    </div>

    {/* Stat Text */}
    <p className="text-lg font-medium max-w-md mx-auto text-white mt-2">
      Helping <span className="font-bold">5,200+</span> students build smarter learning paths
    </p>
  </div>
</section>


{/* <section className="w-full bg-black py-10 overflow-hidden">
  <div className="text-center mb-6 text-sm text-gray-400 uppercase tracking-widest">
    Trusted by learners from
  </div>

  <div className="relative w-full overflow-hidden">
    <div className="marquee">
      <div className="marquee-content">
      <img src="next.svg" alt="Logo 1" className="h-8 w-20 mx-6 text-white" />
        <img src="/logos/logo2.svg" alt="Logo 2" className="h-8 w-20 mx-6" />
        <img src="/logos/logo1.svg" alt="Logo 1" className="h-8 w-20 mx-6" />
        <img src="/logos/logo2.svg" alt="Logo 2" className="h-8 w-20 mx-6" />
        <img src="/logos/logo1.svg" alt="Logo 1" className="h-8 w-20 mx-6" />
        <img src="/logos/logo2.svg" alt="Logo 2" className="h-8 w-20 mx-6" />
        <img src="/logos/logo1.svg" alt="Logo 1" className="h-8 w-20 mx-6" />
        <img src="/logos/logo2.svg" alt="Logo 2" className="h-8 w-20 mx-6" />
        <img src="/logos/logo1.svg" alt="Logo 1" className="h-8 w-20 mx-6" />
        <img src="/logos/logo2.svg" alt="Logo 2" className="h-8 w-20 mx-6" />        
      </div>
    </div>
  </div>
</section> */}

      </main>

      <section className="w-full bg-black text-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
      Build systems that guide your learning
    </h2>
    <p className="text-lg md:text-xl text-gray-400 mt-4">
      Proven resources to accelerate clarity, collaboration, and academic growth.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
    {/* Left Block */}
    <div className="bg-white text-black p-6 rounded-2xl shadow-md flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-semibold mb-4">🎯 Gain Massive Clarity</h3>
        <p className="text-gray-700">
          Set meaningful academic goals, pick the right tools, and know exactly what steps to take.
        </p>
      </div>
      <img src="/images/target.svg" alt="Target" className="w-32 mt-6 mx-auto" />
    </div>

    {/* Right Block */}
    <div className="bg-white text-black p-6 rounded-2xl shadow-md flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-semibold mb-4">🤖 Learning Assistant</h3>
        <p className="text-gray-700">
          Get intelligent suggestions on resources, skill paths, and community support tailored to your interests.
        </p>
      </div>
      <img src="/images/assistant.svg" alt="Assistant" className="w-32 mt-6 mx-auto" />
    </div>
  </div>
</section>

<section className="bg-black text-white py-20 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Card 1 */}
    <div className="bg-white text-black p-6 rounded-2xl shadow">
      <h3 className="text-xl font-semibold mb-3">📈 Content Systems</h3>
      <p className="text-gray-700">
        Build an audience with proven content creation strategies. Maximize reach and engagement.
      </p>
      <img src="/images/content.svg" alt="Content System" className="w-20 mt-4" />
    </div>

    {/* Card 2 */}
    <div className="bg-white text-black p-6 rounded-2xl shadow">
      <h3 className="text-xl font-semibold mb-3">🧠 Access Our C-Suite</h3>
      <p className="text-gray-700">
        Remove guesswork with real-time feedback from top-performing students and mentors.
      </p>
      <img src="/images/c-suite.svg" alt="C-Suite" className="w-20 mt-4" />
    </div>

    {/* Card 3 */}
    <div className="bg-white text-black rounded-2xl shadow">
      <h3 className="text-xl font-semibold mb-3">📚 Step-by-Step Guidance</h3>
      <p className="text-gray-700">
        Our systems save you time and boost results — while reducing overwhelm with structured learning paths.
      </p>
      <img src="/images/steps.svg" alt="Step by Step" className="w-20 mt-4" />
    </div>
  </div>
</section>

<section className="bg-lime-400 text-black py-6 px-4">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
    <p className="flex items-center gap-3 text-lg font-medium">
      <span>👥</span>
      Join 5,200+ learners and get access to our 5-step Learning GPS System.
    </p>
    <a
      href="#framework"
      className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition"
    >
      Get the Framework
    </a>
  </div>
</section>
<section className="bg-black text-white py-20 px-6">
  <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">
    What founders are saying
  </h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
    {/* Testimonial 1 */}
    <div className="bg-white text-black p-6 rounded-xl shadow">
      <div className="flex items-center mb-4">
        <img src="/avatars/user1.jpg" alt="User 1" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <p className="font-semibold">James R.</p>
          <p className="text-xs text-gray-500">Founder, Productify</p>
        </div>
      </div>
      <p className="text-sm">
        “Matt’s frameworks and systems have been transformational for my growth.”
      </p>
    </div>

    {/* Testimonial 2 */}
    <div className="bg-white text-black p-6 rounded-xl shadow">
      <div className="flex items-center mb-4">
        <img src="/avatars/user2.jpg" alt="User 2" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <p className="font-semibold">Lisa M.</p>
          <p className="text-xs text-gray-500">Growth Strategist</p>
        </div>
      </div>
      <p className="text-sm">
        RESOURCE OS is top-notch. It gave me the clarity to scale without burnout.”
      </p>
    </div>

    {/* Testimonial 3 */}
    <div className="bg-white text-black p-6 rounded-xl shadow">
      <div className="flex items-center mb-4">
        <img src="/avatars/user3.jpg" alt="User 3" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <p className="font-semibold">David K.</p>
          <p className="text-xs text-gray-500">Serial Entrepreneur</p>
        </div>
      </div>
      <p className="text-sm">
        “I’ve closed multiple new contracts thanks to the tools inside Resource OS.”
      </p>
    </div>
  </div>
</section>
<section className="bg-black text-white py-16 px-6">
  <h2 className="text-center text-xl md:text-2xl font-semibold mb-10">
    No fluff. Just real systems, support, and community.
  </h2>

  <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
    {/* Founder OS */}
    <div className="bg-white text-black p-4 rounded-xl shadow">
      <p className="font-semibold mb-2">Founder OS</p>
      <img src="/images/founder-os.png" alt="Founder OS" className="w-full rounded-md" />
    </div>

    {/* Velocity */}
    <div className="bg-white text-black p-4 rounded-xl shadow">
      <p className="font-semibold mb-2">Velocity</p>
      <img src="/images/velocity.png" alt="Velocity" className="w-full rounded-md" />
    </div>
  </div>
</section>

<section className="bg-black text-white py-20 px-6">
  <h2 className="text-center text-xl md:text-2xl font-semibold mb-10">
    Build a business that works for you, not the other way around.
  </h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
    <div className="bg-white text-black p-6 rounded-xl text-center shadow">
      <img src="/icons/content.svg" alt="Content System" className="mx-auto mb-4 h-12" />
      <h3 className="font-semibold text-lg mb-2">Compounding Content</h3>
      <p className="text-sm text-gray-600">Attract your dream customer</p>
    </div>

    <div className="bg-white text-black p-6 rounded-xl text-center shadow">
      <img src="/icons/scaling.svg" alt="Scaling Templates" className="mx-auto mb-4 h-12" />
      <h3 className="font-semibold text-lg mb-2">Scaling Templates</h3>
      <p className="text-sm text-gray-600">Transform vision into execution</p>
    </div>

    <div className="bg-white text-black p-6 rounded-xl text-center shadow">
      <img src="/icons/money.svg" alt="Monetization" className="mx-auto mb-4 h-12" />
      <h3 className="font-semibold text-lg mb-2">Monetization Frameworks</h3>
      <p className="text-sm text-gray-600">Convert content into opportunity</p>
    </div>
  </div>
</section>

<footer className="bg-black text-white py-16 px-6">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
    
    {/* Left Side: Logo + CTA */}
    <div className="space-y-4 max-w-lg">
      <h3 className="text-2xl font-bold">FOUNDER OS</h3>
      <a
        href="#"
        className="inline-block bg-lime-300 text-black font-semibold px-6 py-3 rounded-md hover:bg-lime-200 transition"
      >
        GET THE FRAMEWORK
      </a>
      <p className="text-white text-base leading-relaxed">
        Join more than <span className="font-semibold">171,976</span> founders and get access to my
        five-part email series where I reveal my exact Content GPS framework.
      </p>
    </div>

    {/* Right Side: Social + Links */}
    <div className="space-y-4">
      <div className="flex items-center gap-4 justify-end text-white text-2xl">
        <a href="#" aria-label="Twitter"><i className="ri-twitter-x-line"></i></a>
        <a href="#" aria-label="Twitter"><i className="ri-linkedin-line"></i></a>
        <a href="#" aria-label="Twitter"><i className="ri-youtube-line"></i></a>
        <a href="#" aria-label="Twitter"><i className="ri-tiktok-line"></i></a>
        <a href="#" aria-label="Twitter"><i className="ri-instagram-line"></i></a>
        <a href="#" aria-label="Twitter"><i className="ri-mic-line"></i></a>
        <a href="#" aria-label="Twitter"><i className="ri-blogger-line"></i></a>
      </div>
      <div className="flex gap-6 text-lime-300 font-medium text-sm justify-end">
        <a href="#">Careers</a>
        <a href="#">Partners</a>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-white/70">
    <p className="mb-2">
      Founder OS Copyright 2025. All materials on this website are the property of Founder OS.
      All rights reserved.
    </p>
    <div className="flex justify-center gap-6 text-lime-300 font-medium text-sm flex-wrap">
      <a href="#">Contact</a>
      <span>|</span>
      <a href="#">DMCA Policy</a>
      <span>|</span>
      <a href="#">Privacy Policy</a>
      <span>|</span>
      <a href="#">Terms of Service</a>
    </div>
  </div>
</footer>

    </>
  );
}