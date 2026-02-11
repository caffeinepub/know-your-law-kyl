import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';

interface KeyFeature {
  title: string;
  description: string;
}

interface KeyFeaturesCardProps {
  actTitle: string;
  features: KeyFeature[];
}

export function KeyFeaturesCard({ actTitle, features }: KeyFeaturesCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Badge variant="outline" className="text-sm">Act</Badge>
          {actTitle}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold text-lg mb-4">Key Features:</h3>
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium mb-1">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
