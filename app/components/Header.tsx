import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="/scrum-master2.png"
            width={80}
            height={80}
            className="rounded-full"
            alt="logo"
          />
        </Link>
        <h1>AGILE WAY</h1>
      </div>
      <div>
        <Link
          href="https://marcin-kuna.pages.dev/"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center"
        >
          Check My Developer Portfolio
        </Link>
      </div>
    </header>
  );
}
export default Header;
