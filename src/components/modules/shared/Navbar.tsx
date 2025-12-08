'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Lock, Menu, User, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet';
import { DialogTitle } from '@radix-ui/react-dialog'; // ← This is the key import
import { cn } from '@/lib/utils';

const navItems = [
    { name: 'Find Work', href: '/find-work' },
    { name: 'Find Talent', href: '/find-talent' },
    { name: 'Why Us', href: '/why-us' },
    { name: 'Enterprise', href: '/enterprise' },
];

function NavLinks({ onClick }: { onClick?: () => void }) {
    const pathname = usePathname();

    return (
        <>
            {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                    <Link
                        key={item.name}
                        href={item.href}
                        onClick={onClick}
                        className={cn(
                            'text-sm font-medium transition-colors hover:text-orange-600 pb-1 relative',
                            isActive ? 'text-orange-600 font-semibold' : 'text-gray-700'
                        )}
                    >
                        {item.name}
                        {isActive && (
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-600 rounded-full" />
                        )}
                    </Link>
                );
            })}
        </>
    );
}

export default function Navbar() {
    const [open, setOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur supports-[backdrop-filter]:bg-white/90">
            <div className="container mx-auto flex h-20 items-center justify-between px-4">

                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-linear-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                        S
                    </div>
                    <span className="text-xl font-bold text-gray-900">ServiceSphere</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    <NavLinks />
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <Button variant="ghost" size="sm" className="text-gray-700 hover:text-orange-600 border">
                        <Lock />
                        Log In
                    </Button>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white font-base">
                        <User />
                        Sign Up
                    </Button>
                </div>

                {/* Mobile Menu */}
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-8 w-8" />
                            <span className="sr-only">Open menu</span>
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="right" className="w-60 px-2">
                        <DialogTitle className="sr-only">Navigation Menu</DialogTitle>

                        <div className="flex flex-col space-y-4 mt-8">
                            <nav className="flex flex-col space-y-4">
                                <NavLinks onClick={() => setOpen(false)} />
                            </nav>

                            <div className="flex flex-col space-y-4 pt-6 border-t">
                                <Button size="sm" variant="outline" className="w-full justify-start">
                                    <Lock />
                                    Log In
                                </Button>
                                <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600 text-white justify-start">
                                    <User />
                                    Sign Up
                                </Button>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}