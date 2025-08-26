import { Link } from "react-router";
import logo from "@/logoTM-white.png";

export function Logo() {
  return (
    <Link to="/" className="flex items-center text-sm sm:text-lg lg:text-xl 2xl:text-4xl">
      <img className="size-6 object-cover sm:size-7 lg:size-8 2xl:size-16" src={logo} />
      <span className="font-extrabold font-stretch-condensed">TEOREMIKA</span>
    </Link>
  );
}
