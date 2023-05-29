import Image from "next/image";

interface Props {
  params: { id: string };
}

export default function Photo({ params }: Props) {
  const i = params.id;

  return (
    <div>
      Photo {params.id}
      <div className="relative w-full h-96">
        <Image
          src={`https://picsum.photos/id/${i}/500`}
          alt={i}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
