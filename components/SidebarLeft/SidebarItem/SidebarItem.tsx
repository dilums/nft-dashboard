type IconProps = {
  className?: string;
  strokeWidth?: number;
};

type Props = {
  text: string;
  icon: ({ className, strokeWidth }: IconProps) => JSX.Element;
  index: number;
};

export default function SidebarItem({ text, index, icon: Icon }: Props) {
  return (
    <li className="relative">
      {index === 1 ? (
        <div className="absolute -left-1 top-0 bg-fuchsia-600 w-2 h-8 rounded-full" />
      ) : null}
      <a
        href="#"
        className={`pl-4 flex items-center capitalize font-semibold   ${
          index === 1 ? "text-white" : "text-zinc-500"
        }`}
      >
        <span
          className={`bg-zinc-800 w-8 h-8 grid place-items-center mr-2 rounded-md ${
            index === 1 ? "bg-fuchsia-600" : "bg-zinc-800"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <Icon />
          </svg>
        </span>
        {text}
      </a>
    </li>
  );
}
