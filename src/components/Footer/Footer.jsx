import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { TfiPinterest } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-[#14532D] text-white p-10">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Privacy Policy</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <RiInstagramFill size={24} />
            </a>
            <a>
              <TfiPinterest size={24} />
            </a>
            <a>
              <FaFacebookF size={24} />
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Green
            Nest
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
