"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";

const formSchema = z.object({
  username: z.string().nonempty("You must enter your name"),
  phone: z
    .string()
    .nonempty("You must enter a phone number")
    .regex(/^\+?[1-9]\d{8,11}$/, "Invalid phone number"),
  email: z
    .string()
    .nonempty("You must enter an email address")
    .email("Invalid email address"),
  comment: z.string().nonempty("You must enter a message"),
});

export default function ContactForm() {
  const [message, setMessage] = React.useState<string | undefined>(undefined);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      phone: "",
      email: "",
      comment: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setMessage(JSON.stringify(values));
    setMessage("Submitting...");

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.username,
          phone: values.phone,
          email: values.email,
          message: values.comment,
        }),
      });

      if (res.ok) {
        setMessage(
          "Email sent successfully! We will get back to you with your request soon."
        );
        form.reset();
      } else {
        setMessage("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage(
        "An error occurred while submitting the form. Please try again."
      );
      return;
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Phone Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email Address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Comment" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {message && <div className="text-black">{message}</div>}
          <Button
            className="bg-hob-pink text-black hover:bg-[#F6CBD7] justify-self-center cursor-pointer"
            type="submit"
          >
            SUBMIT
          </Button>
        </div>
      </form>
    </Form>
  );
}
