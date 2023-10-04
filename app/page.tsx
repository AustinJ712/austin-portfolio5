export default function Page() {
  return (
    <section>
      <div className="flex items-start mb-4" style={{ flexDirection: 'column' }}>
        <div className="flex items-start mb-4">
         <img className="w-24 h-24 rounded-full mr-2" src={'/images/profile-pic/profilePic.jpg'} alt="Profile Image" />
        </div>
      </div>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">Austin Suhr</h1>
      <p className="prose prose-neutral dark:prose-invert">
        Hi, my name is Austin Suhr and I'm currently working as the COO at <a href="https://commonground.io/app" target="_blank" rel="noopener noreferrer">CommonGround</a>, a marketplace that connects farmers, hunters, landowners, and real estate professionals to facilitate land transactions. I wear many hats at CommonGround:
      </p>
      <ul>
        <li>Product Manager</li>
        <li>Product Designer</li>
        <li>Data Scientist</li>
        <li>Database Architect</li>
        <li>Marketing Integrations leader</li>
      </ul>
      <p className="prose prose-neutral dark:prose-invert">
        In my free time, I like to work, exercise, play basketball, watch Jeopardy, read The Economist and read Medium articles on computer science. I also love playing with the latest tools in AI, some of which helped me build this website.
      </p>
    </section>
  );
}