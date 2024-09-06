
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useTranslations } from "next-intl";
import LocalSwitch from "./LocalSwitch";
import { Link } from "@/i18n/routing";

export default function NavBar() {
  const pathname = usePathname();
  const t = useTranslations("NavLinks")
  const navLinks = [
    { name: t('about'), href: "/about" },
    { name: t('ourPrograms'), href: "/ourPrograms" },
    { name: t('watchOnline'), href: "/watchOnline"},
    { name: t('events'), href: "/events" },
    { name: t('contact'), href: "/contact" },
  ];

  const locations = [
    {
      name: "Cameroon",
      subLocation: [
        {name: "Littoral", href: "/"},
        {name: "Centre", href: "/"},
        {name: "Ouest", href: "/"},
        {name: "Sud", href: "/"},
      ]
    }
  ]

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
        } fixed top-0 h-[100px] transition duration-500 px-10 lg:px-20 flex items-center justify-between w-full text-white z-[100]`}
      >
        <Link href={"/"}>logo</Link>

        <div  id="menu-toggle" className="block lg:hidden">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </div>
        <div className="lg:flex gap-10 text-[20px] font-[300] hidden">
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

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="flex items-center gap-2">
                {t('locations')}
                <svg className="w-2.5 h-2.5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <p className="block px-1 font-bold pt-2 text-[12px] text-gray-700">
                  Littorale
                </p>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-1 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    Edea
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    Bonamoussadi
                  </a>
                </MenuItem>
              </div>
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    [text]
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    [text]
                  </a>
                </MenuItem>
              </div>

            </MenuItems>
          </Menu>
          <LocalSwitch />
        </div>
      </div>
    </div>
  );
}
