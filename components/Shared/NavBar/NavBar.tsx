"use client"
import { Button } from "@/components/ui/button";
import { useAuth, UserButton } from "@clerk/nextjs";
import { Heart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { isAdministrator } from "@/lib/isAdministrator";
import { Tooltip } from "@nextui-org/react";

export function NavBar(){
    const { userId } = useAuth();
    return (
        <div className=" py-5 mx-auto">
            <div className="justify-between lg:flex">
                <Link href="/" className="flex items-center justify-center mx-auto lg:ml-11  ">
                    <Image src="/logo1.png" alt="Dinatours" width={225} height={79}  />
                </Link>
                <div className="flex items-center justify-center gap-x-7 mx-auto lg:mr-8">
                    <Link href="/places" className="relative after:bg-[#4fb350] after:absolute after:h-0.5 after:rounded-full after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                        List Places
                    </Link>

                    
                    {isAdministrator(userId) && (
                        <Link href="/dashboard" className="relative after:bg-[#4fb350] after:absolute after:h-0.5 after:rounded-full after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                            Dashboard
                        </Link>
                    )}

                    {userId ? (
                        <>
                        <Tooltip placement="bottom" content={
        <div className="px-1 py-2">
          <div className="text-small font-bold text-red-600">Loved Places</div>
        </div>
      } showArrow={true} color="secondary" >
                            <Link href="/loved-places">
                                <Heart strokeWidth={1} className={`cursor-pointer`} />
                            </Link>
                            </Tooltip>
                            <UserButton />
                            
                        </>
                    ) : (
                        <Link href="/sign-in" className="flex gap-x-3">
                            <Button>
                                Sign In
                                <User className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
