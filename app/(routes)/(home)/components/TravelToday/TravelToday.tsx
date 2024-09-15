"use client"
import { Reveal } from "@/components/Shared/Reveal";
import { Button } from "@nextui-org/button";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { CgMail } from "react-icons/cg";

export default function TravelToday() {
    const { userId } = useAuth(); 

    return (
        <div className="p-6 lg:my-32 max-w-7xl mx-auto">
            <div className="bg-[url('/images/background.jpg')] bg-center bg-no-repeat bg-cover rounded-xl p-6 lg:p-32 relative">
                <div className="lg:flex gap-x-6">
                    <div>
                        <h3 className="text-4xl text-white">Travel to your favorite place TODAY</h3>
                        {!userId ?(
                            <>
                        <p className="text-white text-xl my-5">
                            Register and explore the best places of El Salvador
                        </p>
                        </>
                        ):(
                            <p className="text-white text-xl my-5">
                                Discover what El Salvador is really all about!
                            </p>
                        )}

                       
                        {!userId && (
                            <Link href="/sign-up">
                                <Button variant="ghost" size="lg" className="text-white">
                                    Register here
                                </Button>
                            </Link>
                        )}

                        <p className="mt-6 font-semibold text-white">DINAtours 2024 ©</p>
                       <div className="items-center flex">
                       <Link href="">
                        <FaFacebook className="text-white mt-3 h-6 w-6 "/>
                        </Link>
                        <Link href="https://www.instagram.com/dinatours_/?utm_source=ig_web_button_share_sheet" passHref>
                        <FaInstagram target="_blank"  className="text-white mt-3 h-6 w-6 ml-3"/>
                        </Link>
                        <Link href="">
                        <CgMail className="text-white mt-3 h-8 w-8 ml-3"/>
                        </Link>
                        </div>
                    </div>
                    <Reveal classname="lg:absolute lg:-right-31 md:-right-24 top-5" position="bottom">
                        <Image src="/images/salvador.png" alt="Place" width={550} height={250} />
                    </Reveal>
                </div>
            </div>
        </div>
    );
}
