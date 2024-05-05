import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";
import { Github } from "lucide-react";
import { Textarea } from "./components/ui/textarea";

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <img src="/public/logo.png  " width={50} height={50} />

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
              placeholder="Inclua o prompt para IA..."
            />
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Resultado gerado pela IA..."
              readOnly
            />
          </div>

          <p className="text-sm text-muted-foreground">
            Lembre-se: Você pode utilizar a variável{" "}
            <code className="text-[#00ff37]">{"{transcription}"}</code> no deu
            prompt para adicionar o conteúdo da transcrição do vídeo
            selecionado.
          </p>
        </div>

        <aside className="w-80 space-y-6">

          <form className="space-y-6">
            <label htmlFor="video"></label>
          </form>

        </aside>
      </main>
    </div>
  );
}
