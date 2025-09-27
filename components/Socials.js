// links
import Link from "next/link";

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from "react-icons/ri";

import { VscGithub } from "react-icons/vsc";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://github.com/michellavezzo"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <VscGithub size={24} />
      </Link>
      {/* <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link> */}
      <Link
        href={"https://www.instagram.com/michellavezzo/"}
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiInstagramLine size={24} />
      </Link>
      {/* <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiDribbbleLine />
      </Link> */}
      {/* <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiBehanceLine />
      </Link> */}
      {/* <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiPinterestLine />
      </Link> */}
    </div>
  );
};

export default Socials;
