import { IconType } from "react-icons";

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType
  onclick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  onclick
  }) => {
  return(
    <div className="flex flex-row item-center">
      <div 
        className="
          realtive
          rounded-full
          h-14
          w-14
          flex
          item-center
          justify-center
          p-4
          hover:bg-slate-300
          hover:bg-opacity-10
          cursor-pointer
          lg:hidden
        ">
          <Icon size={28} color="white" />
      </div>

      <div 
        className="
          relative
          hidden
          lg:flex
          items-center
          gap-4
          p-4
          rounded-full
          hover:bg-slate-300
          hover:bg-opacity-10
          cursor-pointer
        "
      >
        <Icon size={24} color="white" />
        <p className="hidden lg:block text-white text-xl">
          {label}
        </p>
      </div>
    </div>
  );
}

export default SidebarItem;