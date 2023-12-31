import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/agile.png"
          width={60}
          height={60}
          className="hidden md:block"
          alt="logo"
        />
        <div className="relative font-alfa space-x-1">
          <span className="text-5xl md:text-6xl text-[var(--clr-primary)]">
            S
          </span>
          <span className="text-5xl md:text-6xl text-[var(--clr-primary)]">
            S
          </span>
          <span className="text-5xl md:text-6xl text-[var(--clr-secondary)]">
            L
          </span>
          <hr className="border-[#f4f4f4] w-full h-2 border-4 absolute z-10 top-[18px] md:top-6 right-2" />
          <hr className="border-[var(--clr-primary)] border-1 absolute z-20 top-[22px] md:top-7 right-2 w-[100px] md:w-[124px] h-2" />
        </div>
      </Link>
      <div>
        <Link
          href="https://marcin-kuna.pages.dev/"
          className="px-3 py-2 md:px-5 md:py-3 text-xs md:text-base bg-[var(--clr-dark)] text-[var(--clr-yellow)] flex items-center rounded-full text-center hover:bg-[var(--clr-yellow)] hover:text-[var(--clr-dark)] transition-all delay-100 ease-in"
        >
          Check My <span className="hidden md:block mx-1"> Developer</span>{" "}
          Portfolio
        </Link>
      </div>
    </header>
  );
}
export default Header;
