import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

interface SocialMediaLink {
  icon: JSX.Element;
  href: string;
}

const SocialMedia: React.FC = () => {
  const socialMediaLinks: SocialMediaLink[] = [
    { icon: <FaFacebook />, href: "" },
    { icon: <FaTwitter />, href: "" },
    { icon: <FaInstagram />, href: "" },
    { icon: <FaLinkedin />, href: "" },
  ];

  return (
    <div className="flex justify-start items-center gap-4">
      {socialMediaLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          target="_blank"
          className="text-xl lg:text-2xl transition-all duration-300 hover:text-[#FD6F00]"
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
