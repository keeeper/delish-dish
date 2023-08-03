import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="mx-auto px-4 py-4 sm:py-8">
      <Link className="flex flex-col justify-center items-center" href="/">
        <Image src="/logo.svg" width={52} height={52} alt="Delish Dish Logo"/>
        <div className="font-comfortaa text-xl">delish dish</div>
      </Link>
    </header>
  )
}

export default Header;