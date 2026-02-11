import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ContentBlockProps {
  title: string;
  children: React.ReactNode;
}

export function ContentBlock({ title, children }: ContentBlockProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="prose prose-slate max-w-none">
        {children}
      </CardContent>
    </Card>
  );
}
