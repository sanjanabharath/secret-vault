import React from "react";
import "@/app/globals.css";
import ThirdWebProvider from "@/components/provider/ThirdWebProvider";
import Web3ConnectionWrapper from "@/web3Connection/Web3ConnectionContext";
import SideBar from "@/components/Sections/Nav/SideBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThirdWebProvider>
      <Web3ConnectionWrapper>
        <div className="flex">
          <SideBar />
        </div>
      </Web3ConnectionWrapper>
    </ThirdWebProvider>
  );
}
