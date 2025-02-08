import { Search } from "lucide-react";

function SearchBar() {
  return (
    <section id="search" className="relative hidden md:block">
      <input
        type="text"
        placeholder="Search courses..."
        title="Press Enter to search"
        aria-label="Search courses"
        className="w-[36rem] max-w-xl px-4 py-2 pl-10 rounded-md text-sm bg-transparent border border-gray-500 dark:border-blue-300/30 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
      />
      <Search
        size={18}
        className="absolute top-1/2 left-3 -translate-y-1/2 dark:text-blue-300/40 text-gray-500"
      />
    </section>
  );
}

export default SearchBar;
