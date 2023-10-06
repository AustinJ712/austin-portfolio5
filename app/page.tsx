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
        Hi, my name is Austin Suhr and I'm currently working as the COO at <a href="https://commonground.io/app" target="_blank" rel="noopener noreferrer">CommonGround</a> a marketplace that connects farmers, landowners, and real estate professionals aimed at building the future of land transactions.
      </p>
      {/* Add margin-top for spacing */}
      <p className="prose prose-neutral dark:prose-invert" style={{ marginTop: '1em' }}>
        My passion is building products that people love by sweating the details. 
      </p>
      {/* Add margin-top for spacing */}
      <p className="prose prose-neutral dark:prose-invert" style={{ marginTop: '1em' }}>
        To accomplish this, I am a generalist with a passion for end-to-end problem solving that marries system and interaction design.
      </p>
      {
      /*
       <ul style={{ listStyleType: 'disc', paddingLeft: '1em', margin: '1em 0' }}>
        <li style={{ marginLeft: '0', paddingLeft: '0' }}>Product Manager</li>
        <li style={{ marginLeft: '0', paddingLeft: '0' }}>Product Designer</li>
        <li style={{ marginLeft: '0', paddingLeft: '0' }}>Data Scientist</li>
        <li style={{ marginLeft: '0', paddingLeft: '0' }}>Database Architect</li>
        <li style={{ marginLeft: '0', paddingLeft: '0' }}>Marketing Integrations leader</li>
      </ul>
      */
      }
      <p className="prose prose-neutral dark:prose-invert" style={{ marginTop: '1em' }}>
        In my free time, I like to work, exercise, play basketball, watch Jeopardy, read The Economist and read Medium articles on computer science. I also love playing with the latest tools in AI, some of which helped me build this website.
      </p>
    </section>
  );
}