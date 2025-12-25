import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">About This App</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-md">
            This is a simple React application built with Vite, TypeScript, React Router, and styled with Tailwind CSS and shadcn/ui components.
          </p>
          <p className="text-md">
            It's designed to be a clean starting point for your projects.
          </p>
          <Button asChild>
            <Link to="/">Go back to Home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;