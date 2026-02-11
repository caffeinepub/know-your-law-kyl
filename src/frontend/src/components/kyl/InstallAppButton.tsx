import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { usePwaInstall } from '@/hooks/usePwaInstall';
import { toast } from 'sonner';

export function InstallAppButton() {
  const { isInstallable, isStandalone, promptInstall } = usePwaInstall();

  // Don't show button if already installed
  if (isStandalone) {
    return null;
  }

  const handleClick = async () => {
    if (isInstallable) {
      await promptInstall();
    } else {
      // Show instructions for browsers that don't support the install prompt
      toast.info('Installation not available', {
        description:
          'To install this app, use your browser menu and select "Add to Home Screen" or "Install".',
        duration: 5000,
      });
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            onClick={handleClick}
            className="gap-2"
          >
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Install App</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Install KYL as an app on your device</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
