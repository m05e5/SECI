import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavBar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Our Programs", href: "/ourPrograms" },
    { name: "Our Team", href: "/ourTeam" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
  ];

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, [window.scrollY]);

  return (
    <div>
      <div
        className={`${
          scroll ? "bg-black" : "bg-transparent"
        } fixed top-0 h-[100px] transition duration-500 px-20 flex items-center justify-between w-full text-white`}
      >
        <Link href={"/"} >logo</Link>
        <div className="flex gap-10 text-[20px] font-[300]">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                className={`${isActive ? "underline underline-offset-4" : ""}`}
                href={link.href}
                key={link.name}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
