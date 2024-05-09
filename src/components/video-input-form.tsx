import { FileVideo, Upload } from "lucide-react";
import { Separator } from "./ui/separator";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { ChangeEvent, FormEvent, useMemo, useState } from "react";

export function VideoInputForm() {
  const [videoFile, setVideoFile] = useState<File | null>(null);

  function handleFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.currentTarget;

    if (!files) {
      return;
    }

    const selectedFile = files[0];

    setVideoFile(selectedFile);
  }

  function handleUploadVideo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    
}


  const previewURL = useMemo(() => {
    if (!videoFile) {
        return null
    }

    return URL.createObjectURL(videoFile)
  }, [videoFile])

  return (
    <form onSubmit={handleUploadVideo} className="space-y-6">
      {/* Video upload section */}
      <label
        htmlFor="video"
        className="relative p-14 text-muted-foreground text-sm flex flex-col items-center justify-center gap-2 border border-dashed rounded-md aspect-video cursor-pointer hover:bg-primary/20"
      >
        {previewURL ? (
          (
            <video src ={previewURL} controls={false} className="pointer-events-none absolute inset-0" />
          )
        ) : (
          <>
            <FileVideo className="w-4 h-4" />
            Select a video
          </>
        )}
      </label>
      <input
        type="file"
        id="video"
        accept="video/mp4"
        className="sr-only"
        onChange={handleFileSelected}
      />

      <Separator />

      {/* Transcription prompt section */}
      <div className="space-y-2">
        <Label htmlFor="transcription_prompt">Transcription prompt</Label>
        <Textarea
          id="transcription_prompt"
          className="h-20 leading-relaxed resize-none"
          placeholder="Include key words that are mentioned in the video, separeted by commas ( , )"
        />

        <Button type="submit" className="w-full">
          Upload Video
          <Upload className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </form>
  );
}
