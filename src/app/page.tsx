import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 mt-5">
        {new Array(20).fill(null).map((_, i) => (
          <Link href={`/photos/${i}`} key={i}>
            <div className="aspect-square relative hover:scale-105 duration-200">
              <Image
                src={`https://picsum.photos/id/${i}/500`}
                alt="test"
                sizes="300px"
                fill
                className="rounded-md"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
