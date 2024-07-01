import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Index() {
  return (
    <div className="container mx-auto p-4">
      <Card className="text-center">
        <CardHeader>
          <CardTitle className="text-3xl">Welcome to Horse Haven</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Discover the world of horses. Learn about different breeds, care tips, and more!</p>
          <Button variant="primary">Get Started</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Index;