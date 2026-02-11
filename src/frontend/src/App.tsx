import { useState } from 'react';
import { AppShell } from './components/kyl/AppShell';
import { TopOverview } from './components/kyl/TopOverview';
import { AboutMediationSection } from './sections/AboutMediationSection';
import { LegislativeKnowledgeSection } from './sections/LegislativeKnowledgeSection';
import { ScenariosSection } from './sections/ScenariosSection';

export type SectionId = 'overview' | 'about-mediation' | 'legislative-knowledge' | 'scenarios';

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('overview');

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <TopOverview onNavigate={setActiveSection} />;
      case 'about-mediation':
        return <AboutMediationSection />;
      case 'legislative-knowledge':
        return <LegislativeKnowledgeSection />;
      case 'scenarios':
        return <ScenariosSection />;
      default:
        return <TopOverview onNavigate={setActiveSection} />;
    }
  };

  return (
    <AppShell activeSection={activeSection} onNavigate={setActiveSection}>
      {renderSection()}
    </AppShell>
  );
}

export default App;
