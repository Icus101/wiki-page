import React from "react";

const Footer = () => {
  return (
    <div className="text-[#ffff]">
      <div className="text-center mb-[50px] bg-[rgb(25,132,199)] mx-[30px] rounded-lg">
        <h1 className="py-[20px]">LOGO</h1>
        <div className="flex justify-center gap-[10px] mb-[20px]">
            <h1>About</h1>
            <h1>Privacy Policy</h1>
            <h1>Licensing</h1>
            <h1>Contact</h1>
        </div>
        <p className="mb-[10px]">2023 Zechub. All Rights Reserved.</p>
        <p className="mb-[10px]">Made by Icus</p>
        <div className="flex justify-center gap-[10px] pb-[10px]">
            <h1>Icon</h1>
            <h1>Icon</h1>
            <h1>Icon</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
