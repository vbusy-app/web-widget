import type React from "react";
import Link from "next/link";
import { PiGithubLogoBold, PiStarBold, PiLinkBold } from "react-icons/pi";

const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; All Rights Reserved</p>
      
      <div className="icons">
        <Link
          href="https://github.com/vbusy-app/web-widget"
          aria-label="Star Repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PiStarBold style={{ fontSize: "20" }} />
        </Link>
        <Link
          href="https://github.com/enna-ai/vbusy"
          aria-label="Vbusy Repository"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PiGithubLogoBold style={{ fontSize: "20" }} />
        </Link>
        <Link
          href="https://vbusy.vercel.app"
          aria-label="Vbusy Website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PiLinkBold style={{ fontSize: "20" }} />
        </Link>
      </div>
    </footer>
  )
};

export default Footer;
