import { usePoolsStore } from "@/store/usePoolsStore";
import Image from "next/image";

export const SearchBox: React.FC = () => {
  const [search, setSearch] = usePoolsStore((state) => [
    state.search,
    state.setSearch,
  ]);

  return (
    <div className="flex items-center gap-x-4 mb-5 px-8 py-4 border border-white/25 rounded-2xl bg-[#d9d9d9]/10 max-w-[520px] w-full">
      <input
        type="text"
        className="p-0 flex-1 bg-transparent placeholder:text-white/30 text-[20px]"
        placeholder="Filter by Token"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="opacity-30 transition-opacity ease-in-out duration-200 hover:opacity-100">
        <Image
          src="/images/icons/filter.svg"
          height={36}
          width={36}
          alt="filter"
        />
      </button>
      <button className="opacity-30 transition-opacity ease-in-out duration-200 hover:opacity-100">
        <Image
          src="/images/icons/settings.svg"
          height={36}
          width={36}
          alt="settings"
        />
      </button>
    </div>
  );
};
