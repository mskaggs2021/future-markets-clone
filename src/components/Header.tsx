import { Search, TrendingUp, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const categories = [
  { name: "Trending", icon: TrendingUp, active: true },
  { name: "Breaking", active: false },
  { name: "New", active: false },
  { name: "Politics", active: false },
  { name: "Sports", active: false },
  { name: "Crypto", active: false },
  { name: "Earnings", active: false },
  { name: "Geopolitics", active: false },
  { name: "Tech", active: false },
  { name: "Culture", active: false },
  { name: "World", active: false },
  { name: "Economy", active: false },
];

export function Header() {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Navigation */}
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Flag className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">Polymarket</span>
              <span className="text-sm bg-primary text-primary-foreground px-2 py-1 rounded-full">🇺🇸</span>
            </div>

            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search polymarket"
                className="pl-10 w-80 bg-input border-border"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-primary">
              How it works
            </Button>
            <Button variant="ghost" size="sm">
              Log In
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Sign Up
            </Button>
          </div>
        </div>

        {/* Categories Navigation */}
        <div className="flex items-center space-x-6 py-3 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                category.active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {category.icon && <category.icon className="h-4 w-4" />}
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}