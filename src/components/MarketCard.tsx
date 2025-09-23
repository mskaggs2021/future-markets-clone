import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookmarkIcon, ShareIcon } from "lucide-react";

interface MarketOption {
  label: string;
  percentage: number;
  isYes: boolean;
}

interface MarketCardProps {
  id: string;
  title: string;
  description?: string;
  icon: string;
  options: MarketOption[];
  volume: string;
  isLive?: boolean;
  chance?: number;
}

export function MarketCard({ 
  title, 
  description, 
  icon, 
  options, 
  volume, 
  isLive = false,
  chance 
}: MarketCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-200 border border-border bg-card">
      <CardContent className="p-4">
        {/* Header */}
        <div className="flex items-start space-x-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-lg">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-sm text-foreground line-clamp-2">
                {title}
              </h3>
              <div className="flex items-center space-x-1">
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <BookmarkIcon className="h-3 w-3" />
                </Button>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <ShareIcon className="h-3 w-3" />
                </Button>
              </div>
            </div>
            {description && (
              <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Options */}
        <div className="space-y-2 mb-4">
          {options.map((option, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-sm text-foreground flex-1 min-w-0 truncate">
                {option.label}
              </span>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-sm">
                  {option.percentage}%
                </span>
                <div className="flex space-x-1">
                  <Button
                    size="sm"
                    className={`px-3 py-1 text-xs font-medium ${
                      option.isYes
                        ? "bg-success hover:bg-success/90 text-success-foreground"
                        : "bg-success-muted hover:bg-success-muted/80 text-success border border-success/20"
                    }`}
                  >
                    Yes
                  </Button>
                  <Button
                    size="sm"
                    className={`px-3 py-1 text-xs font-medium ${
                      !option.isYes
                        ? "bg-danger hover:bg-danger/90 text-danger-foreground"
                        : "bg-danger-muted hover:bg-danger-muted/80 text-danger border border-danger/20"
                    }`}
                  >
                    No
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex items-center space-x-2">
            {isLive && (
              <Badge className="bg-danger text-danger-foreground text-xs px-2 py-0.5">
                LIVE
              </Badge>
            )}
            <span className="text-xs text-muted-foreground">{volume} Vol.</span>
          </div>
          
          {chance && (
            <div className="flex items-center space-x-1">
              <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                <span className="text-xs font-semibold text-success">{chance}%</span>
              </div>
              <span className="text-xs text-muted-foreground">chance</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}