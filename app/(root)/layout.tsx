import Sidebar from "@/components/Sidebar"
import StreamVideoProvider from "@/providers/StreamClientProvider"
import { Metadata } from "next";
import React, { ReactNode } from "react"


export const metadata: Metadata = {
  title: "NeonSight",
  description: "Video Calling App",
  icons: {
    icon:'/assets/favicon_io/favicon.ico'
  }
};

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <StreamVideoProvider>
            {children}
            </StreamVideoProvider>
        </main>
    )
}

export default RootLayout
