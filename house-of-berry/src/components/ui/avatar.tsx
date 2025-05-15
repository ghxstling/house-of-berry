"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }

export default function MembershipCard() {
  return (
    <div className="p-4 max-w-sm mx-auto bg-white shadow-md rounded-xl flex items-center space-x-4">
      {/* Avatar */}
      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300 shadow-md">
        <img
          src="https://github.com/shadcn.png"
          alt="User Avatar"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info and Badge */}
      <div>
        <p className="text-lg font-semibold">Ryan Supardi</p>
        <span className="inline-block bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
          Premium Member
        </span>
      </div>
    </div>
  );
}

