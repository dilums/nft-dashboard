type Props = {
  text: string;
  index: number;
};

export default function ArtworkSelector({ text, index }: Props) {
  return (
    <li className="">
      <button
        className={` ${
          index ? "text-zinc-500" : "text-fuchsia-600 underline font-bold"
        }`}
      >
        {text}
      </button>
    </li>
  );
}
