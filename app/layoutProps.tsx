'use client'

import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

interface LayoutProp {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProp) => {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith('/admin');

  return (
    <>
      {!isAdminPage && <Navbar />}
      <main>{children}</main>

    </>
  );
};

export default Layout;