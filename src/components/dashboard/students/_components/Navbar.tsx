import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Search } from "lucide-react";

const Navbar = () => {
  const { state } = useSidebar();
  const isMobile = useIsMobile();
  const shouldShowSidebarTrigger = state === "collapsed" || isMobile;

  return (
    <nav className="bg-white shadow p-4 sticky top-0 right-0 z-[40]">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* ============ Top Row (Mobile) / Left Side (Desktop) ============ */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 md:gap-4">
            {shouldShowSidebarTrigger && (
              <>
                <SidebarTrigger />
                <Separator orientation="vertical" className="mr-2 h-4" />
              </>
            )}
          </div>
        </div>

        {/* ============ Second Row (Mobile) / Center (Desktop) ============ */}
        <div className="flex items-center justify-center md:justify-start">
          <section
            id="search"
            className="relative bg-[#ECECEC] w-full max-w-xl rounded-md"
          >
            <Input
              type="text"
              placeholder="Search for anything..."
              title="Press Enter to search"
              aria-label="Search for anything"
              className="w-full xl:min-w-[31rem] px-4 py-5 pl-10 text-sm bg-transparent focus:outline-none rounded-md"
            />
            <Search
              size={18}
              className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 dark:text-blue-300/40"
              aria-hidden="true"
            />
          </section>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
