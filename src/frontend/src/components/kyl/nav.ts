import type { SectionId } from '../../App';

export interface NavigationSection {
  id: SectionId;
  label: string;
  icon: string;
}

export const navigationSections: NavigationSection[] = [
  { id: 'overview', label: 'Overview', icon: '🏠' },
  { id: 'about-mediation', label: 'About Mediation', icon: '🤝' },
  { id: 'legislative-knowledge', label: 'Legislative Knowledge', icon: '📚' },
  { id: 'scenarios', label: 'Mediation Scenarios', icon: '⚖️' },
];
