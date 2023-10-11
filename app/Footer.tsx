// Footer.tsx
import React from "react";
import "./footer.css";  // make sure to create this CSS file

export default function Footer() {
  return (
    <footer className="layout-md mt-40 text-lg flex flex-col">
      <div className="row flex items-center justify-between">
        <span>Twitter</span>
        <div className="divider"></div>
        <a className="link" href="https://twitter.com/austinsuhr">@austinsuhr</a>
      </div>
      <div className="row flex items-center justify-between">
        <span>Replit</span>
        <div className="divider"></div>
        <a className="link" href="https://replit.com/@AustinSuhr">@AustinSuhr</a>
      </div>
      <div className="row flex items-center justify-between">
        <span>Email</span>
        <div className="divider"></div>
        <a className="link" href="mailto:austin.j.suhr@gmail.com">austin.j.suhr@gmail.com</a>
      </div>
    </footer>
  );
}