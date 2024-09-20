import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex h-screen w-screen">
      <Link href="/home" className="mx-auto my-auto">
        <Image
          src="/logo.png"
          alt="Bluestar Logo"
          width={200}
          height={200}
          className="transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </Link>
    </div>
  );
}
