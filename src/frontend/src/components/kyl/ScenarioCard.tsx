import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

interface ScenarioCardProps {
  title: string;
  parties: string;
  scenario: string;
  resolution: string[];
}

export function ScenarioCard({ title, parties, scenario, resolution }: ScenarioCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <Badge variant="secondary" className="w-fit">{parties}</Badge>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
            <span className="text-xl">📋</span>
            Scenario
          </h4>
          <p className="text-muted-foreground leading-relaxed">{scenario}</p>
        </div>

        <Separator />

        <div>
          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
            <span className="text-xl">🤝</span>
            How Mediation Resolves It
          </h4>
          <ol className="space-y-3">
            {resolution.map((step, index) => (
              <li key={index} className="flex gap-3">
                <span className="font-semibold text-primary shrink-0">{index + 1}.</span>
                <span className="text-muted-foreground">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </CardContent>
    </Card>
  );
}
