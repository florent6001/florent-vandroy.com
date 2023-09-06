import Link from "next/link";

export default function Counter({number, text}) {
  return (
    <div className="py-5 text-center w-full">
        <div className="font-bold text-3xl">
            {number}+
        </div>
        <div className="font-thin text-sm">
            {text}
        </div>
    </div>
  );
}
