import React from "react";
import jacqueline from "../../../public/jackie.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
export default function Contact() {
  return (
    <section className="w-full bg-hob-lightpink grid gap-20">
      {/* Image  */}
      <div className="grid grid-cols-2 w-full h-[30rem]">
        {/* TODO: replace placeholder images */}
        <div className="relative">
          <p className="absolute z-10 bg-white top-1/2 left-1/2">PLACEHOLDER</p>
          <Image
            src={jacqueline}
            alt="Photo of Jacqueline"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative">
          <p className="absolute z-10 bg-white top-1/2 left-1/2">PLACEHOLDER</p>
          <Image
            src={jacqueline}
            alt="Photo of Jacqueline"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="w-full gap-12 py-12 grid justify-center bg-white">
        <div className="text-lg space-y-6 text-center w-4xl">
          <h1 className="text-4xl mb-12 text-hob-pink font-bold">
            Catch the Cart
          </h1>
          <p>Got an event coming up? We&apos;d love to be there!</p>
          <p>
            Fill out the form below and our team will get back to you ASAP.
            Whether it&apos;s a market, birthday,
            <br />
            wedding, or corporate function, House of Berry brings the fun
            experience with a tailored menu to you!
          </p>
          <p>
            Feel free to share a little about your event, the vibe you&apos;re
            going for, and any questions you have.
            <br />
            We&apos;ll get back to you as soon as possible and take it from
            there!
          </p>
        </div>
        <div className=" w-4xl">
           <code>
            <Card className="border-none shadow-none">
                
                <CardContent>
                  <form>
                    <div className="flex flex-col gap-5">
                      <div className="flex">
                        <div className = "outline outline-green-600  w-7/15">
                          <input
                          id="Name"
                          type="Name"
                          placeholder="Name"
                          className= "pl-4 w-full"
                          required
                        />
                        </div>
                        <div className = "w-1/15"> </div>
                        <div className = "outline outline-green-600  w-7/15">
                          <input
                          id="phoneNumber"
                          type="phoneNumber"
                          placeholder="Phone Number"
                          className= "pl-4 w-full"
                          required
                        />
                        </div>
                        
                      </div>
                      
                      <div className="grid outline outline-green-600 gap-2">
                        <input
                          id="email"
                          type="email"
                          placeholder="Email Address"
                          className= "pl-4 w-full"
                          required
                        />
                      </div>
                      <div className="grid outline outline-green-600  gap-2 h-14">
                        <input
                          id="comment"
                          placeholder="Comment"
                          className= "pl-4 w-full"
                          required
                        />
                      </div>
                    </div>
                  </form>
                  
                </CardContent>
                <CardFooter className = "relative">
                  <div className = "absolute top-5 left-1/2 -translate-x-1/2 -translate-y-1/2   ">
                    <Button className = "bg-[#f0acc4] text-black hover:bg-[#fff0fc]">
                      BOOK NOW
                    </Button>
                  </div>
                  
                </CardFooter>
            </Card>
            
          </code>
        </div>
        <p className="text-center italic">
          If you have any other questions, feel free to <br />
          email houseofberrynz@gmail.com
        </p>
      </div>
    </section>
  );
}
