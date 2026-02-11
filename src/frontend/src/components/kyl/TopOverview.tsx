import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import type { SectionId } from '../../App';

interface TopOverviewProps {
  onNavigate: (section: SectionId) => void;
}

export function TopOverview({ onNavigate }: TopOverviewProps) {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src="/assets/generated/kyl-hero.dim_1600x600.png"
          alt="Know Your Law - Legal Awareness"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Introduction */}
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold tracking-tight">Welcome to Know Your Law</h2>
        <p className="text-muted-foreground text-lg">
          Your comprehensive guide to understanding mediation, legislative frameworks, and practical dispute resolution in India. 
          Navigate through our educational resources to empower yourself with legal awareness.
        </p>
      </div>

      {/* Quick Links */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('about-mediation')}>
          <CardHeader>
            <div className="text-4xl mb-2">🤝</div>
            <CardTitle>About Mediation</CardTitle>
            <CardDescription>
              Learn about the importance, benefits, and process of mediation as an alternative dispute resolution method.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="ghost" className="w-full justify-between">
              Explore <ArrowRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('legislative-knowledge')}>
          <CardHeader>
            <div className="text-4xl mb-2">📚</div>
            <CardTitle>Legislative Knowledge</CardTitle>
            <CardDescription>
              Understand key legislative acts including the Mediation Act 2023, CPC 1908, and Arbitration Act 1996.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="ghost" className="w-full justify-between">
              Explore <ArrowRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('scenarios')}>
          <CardHeader>
            <div className="text-4xl mb-2">⚖️</div>
            <CardTitle>Mediation Scenarios</CardTitle>
            <CardDescription>
              Explore real-world scenarios and learn how mediation can effectively resolve various types of disputes.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="ghost" className="w-full justify-between">
              Explore <ArrowRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
