export default function Page() {
  return (
    <section>
      <div className="flex items-start mb-4" style={{ flexDirection: 'column' }}>
        <div className="flex items-start mb-4">
         <img className="w-24 h-24 rounded-full mr-2" src={'/images/profile-pic/profilePic.jpg'} alt="Profile Image" />
        </div>
      </div>
      <h1 className="font-bold text-2xl mb-4 tracking-tighter" style={{ fontWeight: 600 }}>Austin Suhr</h1>
      <div className="layout-md text-lg space-y-14"><div className="space-y-5">
      <p className="layout-md text-black text-xl leading-tight font-light mb-16" id="eric-is" style={{ fontWeight: 300, fontSize: '20px' }}>
          <span className="g" style={{ color: '#a3a3a3' }}>is a</span> systems architect
          <span className="g">,</span><br />
          product manager
          <span className="g" style={{ color: '#a3a3a3' }}>, and</span><br />
          entrepreneur
          <span className="g">.</span>
      </p>
      <p>I currently work as the COO of <a className="link" href="https://commonground.io/app">CommonGround</a>, a marketplace that connects farmers, landowners, and real estate professionals aimed at building the future of land transactions.</p> <p>My ambition is to build products that people love by sweating the details.</p> <p>To accomplish this, I am a generalist with a passion for end-to-end problem solving that marries<em className="svelte-ikj1jd"> system and interaction design</em>.
      </p> <p> Other interests: 3D technologies like NeRF and Gaussian Splatting, drone photography, exercise, playing basketball, reading The Economist and Medium articles on computer science.</p> 
      </div> <div className="leading-snug space-y-4">
        {/* <p class="pb-2">Notable open-source work:</p> <a class="project-pair svelte-ikj1jd" href="/projects#bore"><div class="text-black font-medium">Bore <svg width="18" height="18" stroke="currentColor" stroke-width="2" class="lucide-icon lucide lucide-arrow-up-right inline text-neutral-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></div> <div><p>bypass your NAT in just 400 lines of code</p> <aside class="svelte-ikj1jd">6500+ stars on GitHub</aside></div> </a><a class="project-pair svelte-ikj1jd" href="/projects#percival"><div class="text-black font-medium">Percival <svg width="18" height="18" stroke="currentColor" stroke-width="2" class="lucide-icon lucide lucide-arrow-up-right inline text-neutral-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></div> <div><p>reactive notebooks for exploratory data analysis</p> </div> </a><a class="project-pair svelte-ikj1jd" href="/projects#rustpad"><div class="text-black font-medium">Rustpad <svg width="18" height="18" stroke="currentColor" stroke-width="2" class="lucide-icon lucide lucide-arrow-up-right inline text-neutral-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></div> <div><p>self-hosted collaborative text editor</p> <aside class="svelte-ikj1jd">2M+ downloads</aside></div> </a><a class="project-pair svelte-ikj1jd" href="/projects#crepe"><div class="text-black font-medium">Crepe <svg width="18" height="18" stroke="currentColor" stroke-width="2" class="lucide-icon lucide lucide-arrow-up-right inline text-neutral-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></div> <div><p>compiled Datalog language in Rust</p> <aside class="svelte-ikj1jd">used by distributed databases &amp; security systems</aside></div> </a><a class="project-pair svelte-ikj1jd" href="/projects#fastseg"><div class="text-black font-medium">FastSeg <svg width="18" height="18" stroke="currentColor" stroke-width="2" class="lucide-icon lucide lucide-arrow-up-right inline text-neutral-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></div> <div><p>real-time semantic segmentation for self-driving cars</p> </div> </a><a class="project-pair svelte-ikj1jd" href="/projects#setwithfriends"><div class="text-black font-medium">Set with Friends <svg width="18" height="18" stroke="currentColor" stroke-width="2" class="lucide-icon lucide lucide-arrow-up-right inline text-neutral-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></div> <div><p>online multiplayer card game</p> <aside class="svelte-ikj1jd">30M+ page views, 900K+ users</aside></div> </a></div> <div class="space-y-5"><p>Previously, I worked at <a class="link" href="https://prosper.org">Prosper Robotics</a>, <a class="link" href="https://convex.dev">Convex</a>,
      <a class="link" href="https://jumptrading.com">Jump Trading</a>,
      <a class="link" href="https://scale.com">Scale AI</a>, and
      <a class="link" href="https://nvidia.com">Nvidia</a>. I’ve also
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
    </section>
  );
}