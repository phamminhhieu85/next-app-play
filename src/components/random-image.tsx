import Image from "next/image";
import { Dices, Loader2 } from "lucide-react";
import { useState } from "react";
import { FieldValues, UseFormSetValue } from "react-hook-form";
import { CreatePhotoSchema } from "./upload/upload-photo-form";

interface Props {
  url: string;
  setUrl: (url: string) => void;
  setValue: UseFormSetValue<CreatePhotoSchema>;
}

export default function RandomImage({ setValue, url, setUrl }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  const handleRandom = () => {
    setIsLoading(true);

    const r = Math.floor(Math.random() * 1000);

    const newUrl = `https://picsum.photos/id/${r}/1000`;
    setUrl(newUrl);
    setValue("url", newUrl);
  };

  return (
    <div className="w-full">
      <div className="border-2 aspect-square border-black rounded-md border-dashed p-1">
        <div className="relative h-full">
          <Image
            src={url}
            alt="test"
            fill
            className="rounded-md"
            onLoadingComplete={() => setIsLoading(false)}
            onError={() => setIsLoading(false)}
          />
        </div>
      </div>

      <button
        className="border rounded-md p-2 mx-auto flex mt-5 gap-2"
        onClick={handleRandom}
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 size={20} className="animate-spin" />
        ) : (
          <Dices size={20} />
        )}
        Random
      </button>
    </div>
  );
}
