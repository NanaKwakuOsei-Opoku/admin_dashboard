"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/lib/constants";

const Leftsidebar = () => {
  const pathname = usePathname();
  return (
    <div
      className="h-screen left-0 top-0 sticky p-10 flex flex-col gap-16 shadow-x1 bg-[#D2691E] hidden lg:flex" style={{ backgroundColor: '#EBD2B5' }}
    >
      <Image src="/company_logo.png" alt="logo" width={150} height={70} />

      <div className="flex flex-col gap-12">
        {navLinks.map((link) => (
          <Link href={link.url} key={link.label} className={`flex gap-4 text-body-medium ${pathname === link.url ? "text-blue-500" : "text-grey-500"}`} style={{ color: pathname === link.url ? 'blue' : 'black' }}>
            {link.icon} <p>{link.label}</p>
          </Link>
        ))}
      </div>

      <div className="flex gap-4 text-body-medium items-center lg:flex hidden" style={{ color: 'black' }}>
        <UserButton />
        <p>Edit Profile</p>
      </div>
    </div>
  );
};

export default Leftsidebar;