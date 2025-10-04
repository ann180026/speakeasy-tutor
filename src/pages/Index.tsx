import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Languages, Sparkles } from "lucide-react";

interface Language {
  code: string;
  name: string;
  flag: string;
  description: string;
}

const languages: Language[] = [
  { code: "english", name: "English", flag: "🇬🇧", description: "Master the global language of communication" },
  { code: "french", name: "French", flag: "🇫🇷", description: "Learn the language of love and culture" },
  { code: "spanish", name: "Spanish", flag: "🇪🇸", description: "Master one of the world's most spoken languages" },
  { code: "german", name: "German", flag: "🇩🇪", description: "Discover the language of innovation" },
  { code: "italian", name: "Italian", flag: "🇮🇹", description: "Experience the language of art and cuisine" },
  { code: "japanese", name: "Japanese", flag: "🇯🇵", description: "Explore the fascinating world of Japanese" },
];

const Index = () => {
  const navigate = useNavigate();
  const [hoveredLang, setHoveredLang] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-lg">
              <Languages className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              SpeakEasy
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-2">
            Your AI-Powered Language Tutor
          </p>
          <div className="flex items-center justify-center gap-2 text-accent">
            <Sparkles className="w-4 h-4" />
            <p className="text-sm font-medium">Practice with intelligent conversations</p>
          </div>
        </div>

        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Choose Your Language
          </h2>
          <p className="text-muted-foreground">
            Start your learning journey with personalized AI tutoring
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {languages.map((lang, index) => (
            <Card
              key={lang.code}
              className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/50"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredLang(lang.code)}
              onMouseLeave={() => setHoveredLang(null)}
              onClick={() => navigate(`/chat?language=${lang.code}`)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative p-6">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {lang.flag}
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {lang.name}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {lang.description}
                </p>

                <Button
                  variant="default"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                >
                  Start Learning
                </Button>

                {hoveredLang === lang.code && (
                  <div className="absolute top-4 right-4">
                    <Sparkles className="w-5 h-5 text-accent animate-pulse" />
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-full shadow-sm border">
            <Sparkles className="w-4 h-4 text-accent" />
            <p className="text-sm text-muted-foreground">
              Powered by AI • Practice anytime, anywhere
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
