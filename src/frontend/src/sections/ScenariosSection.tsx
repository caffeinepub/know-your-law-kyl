import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ScenarioCard } from '../components/kyl/ScenarioCard';

export function ScenariosSection() {
  const scenarios = [
    {
      title: 'Commercial Contract Dispute',
      parties: 'ABC Manufacturing Ltd. vs. XYZ Suppliers Pvt. Ltd.',
      scenario: 'ABC Manufacturing entered into a contract with XYZ Suppliers for the supply of raw materials worth ₹50 lakhs. XYZ delivered materials that ABC claims were substandard and not as per specifications. ABC refused payment, while XYZ insists the materials met contractual standards and demands full payment. The dispute has stalled business operations for both parties.',
      resolution: [
        'Ground Rules: The mediator establishes confidentiality, ensures both parties commit to good faith negotiations, and sets a respectful communication framework.',
        'Opening Statements: ABC presents evidence of quality issues and financial losses. XYZ explains their quality control processes and presents their own test reports.',
        'Interest Identification: The mediator helps both parties recognize their shared interest in maintaining a long-term business relationship and avoiding costly litigation.',
        'Option Generation: Parties explore solutions including independent quality testing, partial payment with quality adjustments, replacement of defective materials, and revised quality standards for future orders.',
        'Negotiation: After discussion, parties agree that XYZ will replace 30% of materials found defective by an independent lab, ABC will pay 70% immediately and the balance upon replacement.',
        'Settlement Agreement: A detailed MSA is drafted specifying payment terms, replacement timeline, quality standards for future orders, and a dispute escalation clause for future issues.'
      ]
    },
    {
      title: 'Property Boundary Dispute',
      parties: 'Mr. Sharma vs. Mr. Verma (Neighboring Property Owners)',
      scenario: 'Mr. Sharma and Mr. Verma are neighbors who have been in conflict over a 2-foot strip of land between their properties. Mr. Sharma claims the land is his based on old property documents, while Mr. Verma has been using it for parking for 15 years and claims adverse possession. The dispute has escalated to verbal altercations and police complaints, straining the neighborhood atmosphere.',
      resolution: [
        'Ground Rules: The mediator emphasizes the importance of maintaining neighborly relations and finding a practical solution that both can live with.',
        'Opening Statements: Both parties present their property documents, survey reports, and explain their emotional attachment to the disputed land.',
        'Interest Exploration: The mediator uncovers that Mr. Sharma wants recognition of his legal ownership, while Mr. Verma needs parking space and fears losing his investment in paving the area.',
        'Creative Options: The mediator facilitates brainstorming including shared use agreements, easement rights, land swap, monetary compensation, or formal lease arrangements.',
        'Reality Testing: The mediator helps both parties understand the costs, time, and uncertainty of litigation versus the benefits of a negotiated settlement.',
        'Final Agreement: Parties agree that Mr. Sharma retains legal ownership but grants Mr. Verma a 20-year lease for parking at a nominal annual rent of ₹1, with Mr. Verma maintaining the area. Both agree to update property records and sign a formal lease deed.'
      ]
    },
    {
      title: 'Employment Termination Dispute',
      parties: 'Ms. Priya Kapoor vs. TechCorp Solutions Pvt. Ltd.',
      scenario: 'Ms. Kapoor, a senior software engineer, was terminated by TechCorp after 8 years of service. She claims the termination was wrongful and discriminatory, citing her recent maternity leave and subsequent performance review downgrades. TechCorp maintains the termination was based on legitimate performance issues and company restructuring. Ms. Kapoor is seeking reinstatement or substantial compensation.',
      resolution: [
        'Ground Rules: The mediator ensures a safe space for discussion, acknowledges the emotional nature of employment disputes, and commits to exploring all options.',
        'Opening Statements: Ms. Kapoor presents her performance history, awards, and timeline of events post-maternity leave. TechCorp presents performance metrics and restructuring documentation.',
        'Interest Identification: The mediator identifies that Ms. Kapoor wants financial security, professional reputation protection, and acknowledgment of her contributions. TechCorp wants to avoid litigation costs and negative publicity.',
        'Private Caucuses: The mediator meets separately with each party to discuss sensitive issues like settlement amounts and non-disclosure terms confidentially.',
        'Option Development: Parties explore reinstatement, severance packages, neutral references, extended health benefits, and career transition support.',
        'Settlement Terms: Parties agree on a severance package of 12 months\' salary, neutral reference letter, extended health insurance for 6 months, and a mutual non-disparagement clause. Both parties sign a comprehensive settlement agreement with a confidentiality provision.'
      ]
    },
    {
      title: 'Family Business Partnership Dissolution',
      parties: 'Rajesh Kumar vs. Suresh Kumar (Brothers)',
      scenario: 'Rajesh and Suresh inherited a family textile business and have been equal partners for 15 years. Recently, they have developed irreconcilable differences over business strategy, with Rajesh wanting to modernize and expand, while Suresh prefers the traditional approach. Their disagreements have paralyzed decision-making, and both want to dissolve the partnership but cannot agree on business valuation and asset division.',
      resolution: [
        'Ground Rules: The mediator acknowledges the family relationship and emphasizes preserving family bonds while resolving business issues fairly.',
        'Opening Statements: Both brothers express their visions for the business, frustrations with the partnership, and concerns about fair division of assets built over generations.',
        'Interest Exploration: The mediator helps identify that both want financial security, fair recognition of their contributions, and to preserve family relationships for their children.',
        'Independent Valuation: Parties agree to hire a neutral business valuator to assess the company\'s worth, removing this contentious issue from direct negotiation.',
        'Option Generation: The mediator facilitates discussion of various structures including buyout by one brother, equal asset split with separate businesses, or sale to a third party with profit sharing.',
        'Final Settlement: Based on the independent valuation, Rajesh agrees to buy out Suresh\'s 50% stake over 3 years with structured payments. Suresh retains the family property housing the original shop, while Rajesh gets the business and modern facilities. Both agree to a non-compete clause limited to 2 years and commit to maintaining family relationships separate from business matters.'
      ]
    },
    {
      title: 'Consumer Service Dispute',
      parties: 'Mr. Anil Mehta vs. DreamHome Builders',
      scenario: 'Mr. Mehta booked a 3BHK apartment with DreamHome Builders for ₹80 lakhs with a promised possession date of December 2024. The project is delayed by 18 months with no clear completion timeline. Mr. Mehta has paid 85% of the amount and is currently paying rent elsewhere. He wants either immediate possession with compensation for delay or a full refund with interest. DreamHome cites regulatory delays and offers a 6-month extension with minimal compensation.',
      resolution: [
        'Ground Rules: The mediator establishes that both parties will engage in good faith negotiations and explore practical solutions considering the project\'s actual status.',
        'Opening Statements: Mr. Mehta presents his financial hardship from dual payments (EMI + rent) and emotional distress. DreamHome explains regulatory hurdles, construction progress, and financial constraints.',
        'Interest Identification: Mr. Mehta needs either a home or his money back to invest elsewhere. DreamHome wants to complete the project and avoid mass cancellations that could threaten project viability.',
        'Reality Check: The mediator helps both parties understand that litigation could take 5-7 years, during which Mr. Mehta\'s money remains blocked and DreamHome faces mounting legal costs.',
        'Option Exploration: Parties discuss revised timelines, compensation structures, alternative units, partial refunds, or upgraded specifications at no extra cost.',
        'Negotiated Settlement: DreamHome commits to possession within 8 months with a penalty clause of ₹10,000 per month for further delay. Mr. Mehta receives an upgraded unit (better floor/view) at no additional cost, plus ₹3 lakhs as compensation for delays already incurred. Both parties agree to a monitoring mechanism with monthly progress updates and an escalation clause if timelines are not met.'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-2">Mediation Scenarios</h2>
        <p className="text-muted-foreground text-lg">
          Real-world dispute scenarios and how mediation provides effective resolution
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-4" defaultValue="scenario-1">
        {scenarios.map((scenario, index) => (
          <AccordionItem key={index} value={`scenario-${index + 1}`} className="border rounded-lg px-6">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline">
              Scenario {index + 1}: {scenario.title}
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <ScenarioCard
                title={scenario.title}
                parties={scenario.parties}
                scenario={scenario.scenario}
                resolution={scenario.resolution}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
