import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center min-h-[60px]">
      <h3 className="text-3xl font-bold">Pixabay</h3>
      <input className="border border-black w-96 rounded-md p-2" />

      <div className="flex gap-2 items-center">
        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <Link href="/sign-in">
            <button className="border rounded-md p-2 border-black">
              Sign in
            </button>
          </Link>
        </SignedOut>

        <Link href="/upload">
          <button className="border rounded-md p-2">Upload</button>
        </Link>
      </div>
    </nav>
  );
}
