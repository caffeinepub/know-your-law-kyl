import { Menu, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { navigationSections } from './nav';
import { InstallAppButton } from './InstallAppButton';
import type { SectionId } from '../../App';

interface AppShellProps {
  children: React.ReactNode;
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
}

export function AppShell({ children, activeSection, onNavigate }: AppShellProps) {
  const NavLinks = ({ onItemClick }: { onItemClick?: () => void }) => (
    <nav className="flex flex-col gap-1">
      {navigationSections.map((section) => (
        <button
          key={section.id}
          onClick={() => {
            onNavigate(section.id);
            onItemClick?.();
          }}
          className={`px-4 py-3 text-left rounded-lg transition-colors ${
            activeSection === section.id
              ? 'bg-primary text-primary-foreground font-medium'
              : 'hover:bg-accent text-foreground'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="text-xl">{section.icon}</span>
            <span>{section.label}</span>
          </div>
        </button>
      ))}
    </nav>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/assets/generated/kyl-logo.dim_512x512.png" 
              alt="Know Your Law Logo" 
              className="h-10 w-10"
            />
            <div>
              <h1 className="text-xl font-bold tracking-tight">Know Your Law</h1>
              <p className="text-xs text-muted-foreground">Legal Awareness Platform</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Install App Button */}
            <InstallAppButton />

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    <Scale className="h-5 w-5" />
                    Navigation
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <NavLinks onItemClick={() => {}} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <div className="container flex gap-6 py-6">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-24">
            <NavLinks />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t mt-12">
        <div className="container py-6">
          <Separator className="mb-6" />
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Know Your Law. Educational content only.</p>
            <p>
              Built with ❤️ using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
