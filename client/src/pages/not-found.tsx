import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center max-w-md">
        <span className="text-8xl font-bold text-primary/20" data-testid="text-404">404</span>
        <h1 className="mt-4 text-2xl font-bold text-foreground" data-testid="text-404-title">Page not found</h1>
        <p className="mt-3 text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link href="/">
            <Button variant="outline" data-testid="button-go-home">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
