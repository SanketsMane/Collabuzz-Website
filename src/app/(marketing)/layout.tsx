import { Footer, Navbar } from "@/components";
import React from 'react'

interface Props {
    children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
    return (
        <div className="flex flex-col items-center w-full">
            <Navbar />
            <div className="pt-12 sm:pt-14 w-full">
                {children}
            </div>
            <Footer />
        </div>
    )
};

export default MarketingLayout
