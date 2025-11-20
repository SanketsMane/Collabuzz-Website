import { Footer, Navbar } from "@/components";
import React from 'react'

interface Props {
    children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
    return (
        <div className="flex flex-col items-center w-full min-h-screen pb-20">
            <Navbar />
            <div className="pt-12 sm:pt-14 w-full flex-1">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default MarketingLayout
