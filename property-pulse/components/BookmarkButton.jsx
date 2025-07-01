const { FaBookmark } = require("react-icons/fa");

const BookmarkButton = ({ properties }) => {
  return (
    <div className="flex flex-col gap-2">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center">
        <FaBookmark className="mr-2" />
        Bookmark Property
      </button>
    </div>
  );
};

export default BookmarkButton;
