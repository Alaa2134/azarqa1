import { MadeWithDyad } from "@/components/made-with-elmony";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Welcome to Your App!</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            This is a simple starter page. Let's build something amazing.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-md">
            You can start by modifying this page or adding new routes and components.
          </p>
          <Button asChild>
            <Link to="/about">Learn More</Link>
          </Button>
        </CardContent>
      </Card>
      <div className="mt-8">
        <MadeWithDyad />
      </div>
    </div>
  );
};

export default Index;