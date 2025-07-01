"use client";

import bookmarkProperty from "@/app/actions/bookmarkProperty";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
useSession;
toast;
bookmarkProperty;

const { FaBookmark } = require("react-icons/fa");

const BookmarkButton = ({ property }) => {
  const { data: session } = useSession();
  const userid = session?.user?.id;

  const handleClick = async () => {
    if (!userid) {
      toast.error("You need to be signed in to bookmark a listing");
      return;
    }

    bookmarkProperty(property._id).then((res) => {
      if (res.error) return toast.error(res.error);
      toast.success(res.message);
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
        onClick={handleClick}
      >
        <FaBookmark className="mr-2" />
        Bookmark Property
      </button>
    </div>
  );
};

export default BookmarkButton;
