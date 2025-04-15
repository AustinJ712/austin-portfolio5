import Footer from "./Footer";
// import supportsColor from "supports-color";
import './global.css'

export default function Page() {
  return (
    <section>
      <div className="flex items-start mb-4" style={{ flexDirection: 'column' }}>
        <div className="flex items-start mb-4">
         <img className="w-24 h-24 rounded-full mr-2" src={'/images/profile-pic/profilePic.jpg'} alt="Austin Suhr Profile Image" />
        </div>
      </div>
      <h1 className="font-bold text-2xl mb-4 tracking-tighter" style={{ fontWeight: 600 }}>Austin Suhr</h1>
      <div className="layout-md text-lg space-y-14"><div className="space-y-5">
      <p className="layout-md text-black text-xl leading-tight font-light mb-16" id="eric-is" style={{ fontWeight: 400, fontSize: '20px' }}>
          <span className="g" style={{ color: '#a3a3a3' }}>is a</span> systems architect
          <span className="g">,</span><br />
          product manager
          <span className="g" style={{ color: '#a3a3a3' }}>, and</span><br />
          entrepreneur
          <span className="g">.</span>
      </p>
      <p style={{ fontWeight: 500, fontSize: '16px' }}>I currently work as the COO of <a className="link" href="https://commonground.io/app">CommonGround</a>, a marketplace that connects farmers, landowners, and real estate professionals aimed at building the future of land transactions.</p>
      <p style={{ fontWeight: 500, fontSize: '16px' }}>My
      <em className="svelte-ikj1jd" style={{ fontSize: '18px', fontFamily: 'newsreaderItalicFont', fontWeight: 500 }}> ambition </em>
      is to build products that people love by sweating the details.</p>
      <p style={{ fontWeight: 500, fontSize: '16px' }}>
        To accomplish this, I am a generalist with a passion for end-to-end problem solving that marries
        <em className="svelte-ikj1jd" style={{ fontSize: '18px', fontFamily: 'newsreaderItalicFont', fontWeight: 500 }}> system and interaction design</em>.
    </p>

      <p style={{ fontWeight: 500, fontSize: '16px' }}>Other interests: 3D technologies like NeRF and Gaussian Splatting, drone photography, exercise, playing basketball, reading The Economist and Medium articles on computer science.</p>
      </div> <div className="leading-snug space-y-4">
      <div style={{ padding: '0px 0' }}> {/* This will give some space around the Notable work section */}
              <p style={{ fontWeight: 500, fontSize: '16px', marginBottom: '0px' }}>Notable work:</p>
            
    </div>
      <div className="my-6"></div>
      <a className="project-pair project-hover underline-on-hover" href="projects#cashrenstimate-algorithm">
        <div className="text-black font-medium" style={{fontWeight: 700, fontSize: '16px', marginBottom: '4px'}}>CashRentstimate algorithm <svg width="18" height="18" stroke="#737373" strokeWidth="2" className="lucide-icon lucide lucide-arrow-up-right inline text-neutral-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </div>
          <div><p style={{ color:"#404040" , fontWeight: 500, fontSize: '16px'}}>An ML-based tool to estimate the value of farmland in a lease agreement.</p>
        <aside style={{ color: '#737373', fontWeight: 500, fontSize: '16px', marginBottom: '24px'}}>65k+ estimates sought</aside>
        </div>
      </a>
      <div className="my-6"></div>
      <a className="project-pair underline-on-hover" href="projects#multiparcel-auction-system">
        <div className="text-black font-medium" style={{fontWeight: 700, fontSize: '16px', marginBottom: '4px'}}>Multiparcel Auction Bidding System<svg width="18" height="18" stroke="#737373" strokeWidth="2" className="lucide-icon lucide lucide-arrow-up-right inline text-neutral-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </div>
          <div><p style={{color:"#404040" , fontWeight: 500, fontSize: '16px' }}>Fully designed from UX to logic to database schema.</p>
        <aside style={{ color: '#737373', fontWeight: 500, fontSize: '16px', marginBottom: '24px'}}>First in the industry</aside>
        </div>
      </a>
      <div className="my-6"></div>
      <a className="project-pair project-hover underline-on-hover" href="projects#cashrenstimate-algorithm">
        <div className="text-black font-medium" style={{fontWeight: 700, fontSize: '16px', marginBottom: '4px'}}>Cita Reservations<svg width="18" height="18" stroke="#737373" strokeWidth="2" className="lucide-icon lucide lucide-arrow-up-right inline text-neutral-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </div>
          <div><p style={{color:"#404040" , fontWeight: 500, fontSize: '16px'}}>A marketplace to purchase the country's most highly sought after reservations.</p>
        <aside style={{ color: '#737373', fontWeight: 500, fontSize: '16px', marginBottom: '24px'}}>Founder - sued by Amex/Resy</aside>
        </div>
      </a>
      <div className="my-6"></div>
      <a className="project-pair project-hover underline-on-hover" href="projects#melrose-technology">
        <div className="text-black font-medium" style={{fontWeight: 700, fontSize: '16px', marginBottom: '4px'}}>Melrose Technology<svg width="18" height="18" stroke="#737373" strokeWidth="2" className="lucide-icon lucide lucide-arrow-up-right inline text-neutral-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </div>
          <div><p style={{color:"#404040" , fontWeight: 500, fontSize: '16px'}}>A conversational AI application that identifies homeowners interested in selling their homes.</p>
        <aside style={{ color: '#737373', fontWeight: 500, fontSize: '16px', marginBottom: '24px'}}>Founder</aside>
        </div>
      </a>
      <div className="my-6"></div>
      <a className="project-pair project-hover underline-on-hover" href="projects#lockhop">
        <div className="text-black font-medium" style={{fontWeight: 700, fontSize: '16px', marginBottom: '4px'}}>Lockhop<svg width="18" height="18" stroke="#737373" strokeWidth="2" className="lucide-icon lucide lucide-arrow-up-right inline text-neutral-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </div>
          <div><p style={{color:"#404040" , fontWeight: 500, fontSize: '16px'}}>A real estate marketplace that helps agents more effectively market their listings.</p>
        <aside style={{ color: '#737373', fontWeight: 500, fontSize: '16px', marginBottom: '24px'}}>CTO - zero to one</aside>
        </div>
      </a>
      <div className="my-6"></div>
      <a className="project-pair project-hover underline-on-hover" href="projects#cashrenstimate-algorithm">
        <div className="text-black font-medium" style={{fontWeight: 700, fontSize: '16px', marginBottom: '4px'}}>Farmland Classification Model<svg width="18" height="18" stroke="#737373" strokeWidth="2" className="lucide-icon lucide lucide-arrow-up-right inline text-neutral-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </div>
          <div><p style={{color:"#404040" , fontWeight: 500, fontSize: '16px'}}>A machine learning model that classifies farmland by land use based on a wide range of parameters.</p>
        <aside style={{ color: '#737373', fontWeight: 500, fontSize: '16px', marginBottom: '24px'}}>First of its kind</aside>
        </div>
      </a>
      
      
       {/* <a href="/blog/developer-experience-examples" className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50  dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"><div className="flex flex-col"><p style={{ fontSize: '16px', fontWeight: 700 }}>What Makes A Great Developer Experience?</p><p style={{ fontSize: '12px'}}>29,939 views</p></div><div className="text-neutral-700 dark:text-neutral-300"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path></svg></div></a>
         <p class="pb-2">Notable work:</p> <a class="project-pair svelte-ikj1jd" href="/projects#bore"><div class="text-black font-medium">Bore <svg width="18" height="18" stroke="currentColor" strokeWidth="2" class="lucide-icon lucide lucide-arrow-up-right inline text-neutral-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></div> <div><p>bypass your NAT in just 400 lines of code</p> <aside class="svelte-ikj1jd">6500+ stars on GitHub</aside></div> </a><a class="project-pair svelte-ikj1jd" href="/projects#percival"><div class="text-black font-medium">Percival <svg width="18" height="18" stroke="currentColor" strokeWidth="2" class="lucide-icon lucide lucide-arrow-up-right inline text-neutral-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></div> <div><p>reactive notebooks for exploratory data analysis</p> </div> </a><a class="project-pair svelte-ikj1jd" href="/projects#rustpad"><div class="text-black font-medium">Rustpad <svg width="18" height="18" stroke="currentColor" strokeWidth="2" class="lucide-icon lucide lucide-arrow-up-right inline text-neutral-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></div> <div><p>self-hosted collaborative text editor</p> <aside class="svelte-ikj1jd">2M+ downloads</aside></div> </a><a class="project-pair svelte-ikj1jd" href="/projects#crepe"><div class="text-black font-medium">Crepe <svg width="18" height="18" stroke="currentColor" strokeWidth="2" class="lucide-icon lucide lucide-arrow-up-right inline text-neutral-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></div> <div><p>compiled Datalog language in Rust</p> <aside class="svelte-ikj1jd">used by distributed databases &amp; security systems</aside></div> </a><a class="project-pair svelte-ikj1jd" href="/projects#fastseg"><div class="text-black font-medium">FastSeg <svg width="18" height="18" stroke="currentColor" strokeWidth="2" class="lucide-icon lucide lucide-arrow-up-right inline text-neutral-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></div> <div><p>real-time semantic segmentation for self-driving cars</p> </div> </a><a class="project-pair svelte-ikj1jd" href="/projects#setwithfriends"><div class="text-black font-medium">Set with Friends <svg width="18" height="18" stroke="currentColor" strokeWidth="2" class="lucide-icon lucide lucide-arrow-up-right inline text-neutral-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></div> <div><p>online multiplayer card game</p> <aside class="svelte-ikj1jd">30M+ page views, 900K+ users</aside></div> </a></div> <div class="space-y-5"><p>Previously, I worked at <a class="link" href="https://prosper.org">Prosper Robotics</a>, <a class="link" href="https://convex.dev">Convex</a>,
      <a class="link" href="https://jumptrading.com">Jump Trading</a>,
      <a class="link" href="https://scale.com">Scale AI</a>, and
      <a class="link" href="https://nvidia.com">Nvidia</a>. I've also
      independently published things in the past, like a
      <a class="link" href="https://pubs.aip.org/books/monograph/129/F-ma-Contests2011-2019-Solutions-Manual">physics book</a>,
      <a class="link" href="https://www.combinatorics.org/ojs/index.php/eljc/article/view/v28i1p24/pdf">combinatorics research</a>, and
      <a class="link" href="https://github.com/ekzhang/graphics-workshop">graphics tutorials</a>
      used by thousands. Before that, I won two gold medals at the
      
        </p>
        */}</div></div>
      <p className="prose prose-neutral dark:prose-invert">
      </p>
      <p className="prose prose-neutral dark:prose-invert" style={{ marginTop: '1em' }}>
      </p>
      <Footer />
    </section>
  );
}