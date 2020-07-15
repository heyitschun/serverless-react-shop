import React from "react";

function Footer() {
  return (
    <div className="flex-col">
      <footer className="font-sans bg-gray-100 text-center text-md absolute bottom-0 w-full p-6 shadow-inner">
        &copy; 2020 Designed and built by <a href="http://heyitschun.com" target="_blank" rel="noopener noreferrer" className="text-orange-500">Chun Poon</a> 
          <div className="mt-3">
          Stack: <a href="https://reactjs.org" rel="noreferrer noopener" target="_blank"><img className="inline-block w-12" src="https://heyitschun-assets.s3.amazonaws.com/mock-store/react.svg" alt="react"></img></a> + <a href="https://tailwindcss.com" rel="noreferrer noopener" target="_blank"><img className="inline-block w-10" src="https://heyitschun-assets.s3.amazonaws.com/mock-store/tailwindcss-icon.svg" alt="tailwindcss"></img></a> + <a href="https://netlify.com" rel="noreferrer noopener" target="_blank"><img className="inline-block w-12" src="https://heyitschun-assets.s3.amazonaws.com/mock-store/Netlify_logo.svg" alt="netlify"></img></a>
          </div>
      </footer>
    </div>
  );
}

export default Footer;