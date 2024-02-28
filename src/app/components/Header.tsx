import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between p-[20px]">
        <div>LOGO</div>
        <nav>
          <ul className="flex justify-between gap-[10px]">
            <li>Use Zcash</li>
            <li>Ecosystem</li>
            <li>Organizations</li>
            <li>Guides</li>
            <li>Glossary & FAQ'S</li>
            <li>DAO</li>
          </ul>
        </nav>
        <div className="flex gap-[10px]">
            <h1>ic</h1>
            <h1>ic</h1>
            <h1>ic</h1>
            <h1>ic</h1>
            <button>Donate</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
