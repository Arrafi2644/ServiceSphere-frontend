import { Footer } from "@/components/modules/shared/Footer";
import Navbar from "@/components/modules/shared/Navbar";

export default function CommonLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
