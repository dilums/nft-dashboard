import SidebarItem from "@/components/SidebarLeft/SidebarItem";
import LogoutIcon from "@/components/icons/LogoutIcon";
import CollectionIcon from "@/components/icons/CollectionIcon";
import DashboardIcon from "@/components/icons/DashboardIcon";
import FavouritesIcon from "@/components/icons/FavouritesIcon";
import MarketIcon from "@/components/icons/MarketIcon";
import SettingsIcon from "@/components/icons/SettingsIcon";
import TrendingIcon from "@/components/icons/TrendingIcon";
import WalletIcon from "@/components/icons/WalletIcon";

const sidebarItems = [
  {
    text: "market",
    icon: MarketIcon,
  },
  {
    text: "dashboard",
    icon: DashboardIcon,
  },
  {
    text: "favourites",
    icon: FavouritesIcon,
  },
  {
    text: "trending",
    icon: TrendingIcon,
  },
  {
    text: "collection",
    icon: CollectionIcon,
  },
  {
    text: "wallet",
    icon: WalletIcon,
  },
  {
    text: "settings",
    icon: SettingsIcon,
  },
];

export default function SidebarLeft() {
  return (
    <div className="hidden lg:flex h-screen flex-col justify-between w-48 fixed left-0 top-0 bottom-0 pt-24">
      <ul className="space-y-8">
        {sidebarItems.map(({ text, icon }, index) => (
          <SidebarItem key={text} text={text} index={index} icon={icon} />
        ))}
      </ul>
      <div className="pb-5  px-4">
        <hr className="mb-5 text-zinc-700" />
        <a
          href="#"
          className="py-2 flex items-center  text-zinc-500 font-semibold"
        >
          <span className="bg-zinc-800 w-8 h-8 grid place-items-center mr-2 rounded-md ">
            <LogoutIcon className="w-5 h-5" />
          </span>
          Logout
        </a>
      </div>
    </div>
  );
}
