"use client";

import RandomImage from "@/components/random-image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const createPhotoSchema = z.object({
  url: z.string().url(),
  name: z.string().min(3),
  description: z.string().min(2),
});

export type CreatePhotoSchema = z.infer<typeof createPhotoSchema>;

export default function UploadPhotoForm() {
  const [url, setUrl] = useState("https://picsum.photos/id/10/1000");
  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: zodResolver(createPhotoSchema),
    defaultValues: { url, name: "", description: "" },
  });

  const { errors, isSubmitting } = formState;

  const handleSubmitForm = handleSubmit(async (data) => {
    console.log(data);
    await fetch("/api/photo", {
      method: "POST",
      body: JSON.stringify(data),
    });
  });

  return (
    <form className="flex gap-10 mt-5" onSubmit={handleSubmitForm}>
      <div className="flex flex-col gap-2 w-full">
        <RandomImage url={url} setUrl={setUrl} setValue={setValue} />

        <p className="text-red-500">{errors.url?.message}</p>
      </div>

      <div className="w-full space-y-2">
        <p>Name</p>
        <input
          className="border rounded-md border-black p-2 w-full"
          placeholder="Photo's name"
          {...register("name")}
        />
        <p className="text-red-500">{errors.name?.message}</p>
        <p>Description</p>
        <textarea
          rows={5}
          className="border rounded-md border-black p-2 w-full"
          placeholder="Photo's description"
          {...register("description")}
        />

        <p className="text-red-500">{errors.description?.message}</p>
        <button
          className="border rounded-md p-2 mx-auto mt-5 w-auto flex gap-2 justify-center items-center"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting && <Loader2 size={20} className="animate-spin" />}
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
