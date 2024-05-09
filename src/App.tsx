import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";
import { Github, Wand2 } from "lucide-react";
import { Textarea } from "./components/ui/textarea";
import { Separator } from "./components/ui/separator";
import { Label } from "./components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Slider } from "./components/ui/slider";
import { VideoInputForm } from "./components/video-input-form";
;

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <img
          src="/rauschai-logo.png"
          alt="Rausch.ai Icon"
          width={50}
          height={50}
        />

        <div className="flex items-center gap-3">
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <ModeToggle />
          </ThemeProvider>

          <a href="https://github.com/giovannibraaga" target="_blank">
            <Button variant="outline">
              <Github className="w-4 h-4 mr-2" />
              Github
            </Button>
          </a>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Include the AI prompt..."
            />
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Result generated by AI..."
              readOnly
            />
          </div>

          <p className="text-sm text-muted-foreground">
            Remember: You can use the{" "}
            <code className="text-[#1FB255]">{"{transcription}"}</code> variable
            in your prompt to add the content of the transcription from the
            selected video.
          </p>
        </div>

        <aside className="w-80 space-y-6">
          
          <VideoInputForm />

          <Separator />

          <form className="space-y-6">
            {/* Prompt selection */}
            <div className="space-y-2">
              <Label>Prompt</Label>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a prompt..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">Youtube title</SelectItem>
                  <SelectItem value="description">
                    Youtube description
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* Model selection */}
            <div className="space-y-2">
              <Label>Model</Label>

              <Select defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator />

            {/*Temperature section */}
            <div className="space-y-2">
              <Label>Temperature</Label>

              <Slider min={0} max={1} step={0.1} />

              <span className="block text-xs text-muted-foreground italic leading-relaxed">
                Higher values tends to make the result more creative and less
                precise.
              </span>
            </div>

            <Separator />

            {/* Execute Button */}
            <Button type="submit" className="w-full">
              Execute
              <Wand2 className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  );
}
