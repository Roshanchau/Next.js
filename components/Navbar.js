// here the Link element helps to link the pages using js pages to render it not html pages requested by the browser to the server.

import Link from "next/link";
// we can import image tag from next.
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        {/* we can use the Image tag just like the img with source but we have to set the width and height. */}
        <Image src="/logo.svg" width={128} height={77}></Image>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>  
      <Link href="/ninjas">Ninja Listing</Link>
    </nav>
  );
};

export default Navbar;
