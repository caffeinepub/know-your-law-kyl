import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { KeyFeaturesCard } from '../components/kyl/KeyFeaturesCard';

export function LegislativeKnowledgeSection() {
  const mediationActFeatures = [
    {
      title: 'Pre-Litigation Mediation',
      description: 'Parties are required to exhaust voluntary mediation before filing civil or commercial suits in court, promoting early dispute resolution.'
    },
    {
      title: 'Mediated Settlement Agreement (MSA)',
      description: 'Agreements are final, binding, and enforceable like a court judgment, with limited grounds for challenge (e.g., fraud, impersonation).'
    },
    {
      title: 'Mediation Council of India',
      description: 'A central body will be established to register mediators and regulate mediation service providers, ensuring quality and standards.'
    },
    {
      title: 'Confidentiality & Time-bound',
      description: 'Proceedings are confidential, and the process must generally be completed within 180 days, ensuring efficiency and privacy.'
    },
    {
      title: 'Online Mediation',
      description: 'The act specifically recognizes and encourages online mediation, enhancing accessibility and convenience for parties.'
    },
    {
      title: 'Applicability',
      description: 'Applies to domestic mediation, and international mediation involving commercial disputes, with specific provisions for government-involved disputes.'
    }
  ];

  const cpcFeatures = [
    {
      title: 'Comprehensive Procedural Framework',
      description: 'Provides detailed procedures for civil litigation in India, covering everything from filing suits to execution of decrees.'
    },
    {
      title: 'Court Hierarchy & Jurisdiction',
      description: 'Defines the jurisdiction of civil courts, including District Courts, High Courts, and their respective powers and limitations.'
    },
    {
      title: 'Alternative Dispute Resolution',
      description: 'Section 89 empowers courts to refer disputes to ADR mechanisms including arbitration, conciliation, mediation, and Lok Adalat.'
    },
    {
      title: 'Interim Relief Provisions',
      description: 'Allows courts to grant temporary injunctions, attachments, and other interim orders to protect parties\' rights during litigation.'
    },
    {
      title: 'Appeals & Revisions',
      description: 'Establishes a structured appellate system allowing parties to challenge lower court decisions through appeals and revisions.'
    },
    {
      title: 'Execution of Decrees',
      description: 'Provides mechanisms for enforcing court judgments, including attachment of property, arrest, and appointment of receivers.'
    }
  ];

  const arbitrationActFeatures = [
    {
      title: 'Domestic & International Arbitration',
      description: 'Governs both domestic arbitration within India and international commercial arbitration involving Indian parties.'
    },
    {
      title: 'Party Autonomy',
      description: 'Parties have freedom to determine arbitration procedures, choose arbitrators, and select the seat of arbitration.'
    },
    {
      title: 'Minimal Court Intervention',
      description: 'Limits judicial interference in arbitration proceedings, allowing arbitral tribunals to function independently.'
    },
    {
      title: 'Fast-Track Arbitration',
      description: 'Provides for expedited arbitration procedures where awards must be delivered within six months for certain disputes.'
    },
    {
      title: 'Enforceability of Awards',
      description: 'Arbitral awards are binding and enforceable like court decrees, with limited grounds for challenge or setting aside.'
    },
    {
      title: 'Conciliation Provisions',
      description: 'Part III of the Act provides a framework for conciliation as an alternative method of dispute resolution.'
    },
    {
      title: 'Institutional Arbitration',
      description: 'Recognizes and promotes institutional arbitration through designated arbitral institutions for efficient dispute resolution.'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-2">Legislative Knowledge</h2>
        <p className="text-muted-foreground text-lg">
          Key legislative frameworks governing mediation and dispute resolution in India
        </p>
      </div>

      <Tabs defaultValue="mediation-act" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto">
          <TabsTrigger value="mediation-act" className="text-sm md:text-base py-3">
            Mediation Act, 2023
          </TabsTrigger>
          <TabsTrigger value="cpc" className="text-sm md:text-base py-3">
            Code of Civil Procedure, 1908
          </TabsTrigger>
          <TabsTrigger value="arbitration-act" className="text-sm md:text-base py-3">
            Arbitration & Conciliation Act, 1996
          </TabsTrigger>
        </TabsList>

        <TabsContent value="mediation-act" className="mt-6">
          <KeyFeaturesCard actTitle="Mediation Act, 2023" features={mediationActFeatures} />
        </TabsContent>

        <TabsContent value="cpc" className="mt-6">
          <KeyFeaturesCard actTitle="Code of Civil Procedure, 1908" features={cpcFeatures} />
        </TabsContent>

        <TabsContent value="arbitration-act" className="mt-6">
          <KeyFeaturesCard actTitle="Arbitration and Conciliation Act, 1996" features={arbitrationActFeatures} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
