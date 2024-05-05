import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";
import { Github } from "lucide-react";

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-12 py-3 flex items-center justify-between border-b">
        <img src="/public/logo.png  " width={50} height={50} />

        <div className="flex items-center gap-3">
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <ModeToggle />
          </ThemeProvider>

          <a href="https://github.com/giovannibraaga" target="_blank">
            <Button variant="outline">
              <Github className="w-4 h-4 mr-2"/>
              Github
            </Button>
          </a>
        </div>
      </div>
      
    </div>
  );
}
