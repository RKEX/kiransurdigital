import { ReactNode } from "react";
import "./globals.css";
import DesktopNavs from "@/components/Navs/DesktopNavs";
import MobileNavs from "@/components/Navs/MobileNavs";

type RootLayoutPropsType = Readonly<{
  children: ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutPropsType) => {
  return (
    <html lang="en">
      <body className="min-w-screen overflow-x-hidden">
        <section className="hidden md:block">
          <DesktopNavs />
        </section>
        <section className="md:hidden">
          <MobileNavs />
        </section>
        <main>{children}</main>
      </body>
    </html>
  );
};
export default RootLayout;
