// IMPORT REACT STUFF
import React from "react";
import Image from "next/image";
import Link from "next/link";

// IMPORT LAYOUT
import { MainLayout } from "../layout/MainLayout";

// IMPORT COMPONENTS

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-titleBlack pt-5 md:pt-20 text-white ">
      <MainLayout>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center pb-10">
          <Link href="/">
            <a className="mb-5 md:justify-self-start ">
              <Image src="/logo.svg" alt="logo" height={50} width={130} />
            </a>
          </Link>
        </div>
      </MainLayout>
      <div className="py-10 border-t-2 border-textGray">
        <MainLayout>
          <div className="flex flex-col gap-5 sm:flex-row items-center justify-between">
            <p className="text-textGray">© {currentYear} AyushJG</p>
            <div className="flex items-center justify-center gap-5">
              <Link href="https://github.com/AyushJG">
                <a>
                  <Image src="/landingPage/github.svg" height={24} width={24} />
                </a>
              </Link>
            </div>
          </div>
        </MainLayout>
      </div>
    </footer>
  );
};
