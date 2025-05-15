import React from "react";

export function MembershipCard() {
  return (
    <div className="p-4 max-w-sm mx-auto bg-white shadow-md rounded-xl flex items-center space-x-4">
      {/* Avatar */}
      <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-gray-300 shadow-md">
        <img
          src="https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/batman_91.png"
          alt="User Avatar"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info and Badge */}
      <div>
        <p className="text-lg font-extrabold">Ryan Supardi</p>
        <span className="inline-block bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
          Best Member 100%
        </span>
      </div>
    </div>
  );
}

<MembershipCard
  name="Your Name"
  avatarUrl="https://your-image-host.com/my-photo.jpg"
  status="Premium Member"
/>
