import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ContentBlock } from '../components/kyl/ContentBlock';

export function AboutMediationSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-2">About Mediation</h2>
        <p className="text-muted-foreground text-lg">
          Understanding mediation as an effective alternative dispute resolution mechanism
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-4" defaultValue="item-1">
        <AccordionItem value="item-1" className="border rounded-lg px-6">
          <AccordionTrigger className="text-xl font-semibold hover:no-underline">
            1. Importance & Benefits of Mediation
          </AccordionTrigger>
          <AccordionContent>
            <div className="prose prose-slate max-w-none pt-4">
              <p className="text-muted-foreground mb-4">
                Mediation is a voluntary, confidential process where a neutral third party helps disputing parties reach a mutually acceptable resolution.
              </p>
              <h4 className="font-semibold text-lg mb-3">Key Benefits:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Cost-Effective:</strong> Significantly less expensive than litigation, saving parties legal fees and court costs.</li>
                <li><strong>Time-Saving:</strong> Disputes are resolved much faster than traditional court proceedings.</li>
                <li><strong>Confidential:</strong> Unlike public court trials, mediation proceedings remain private and confidential.</li>
                <li><strong>Preserves Relationships:</strong> The collaborative nature helps maintain business and personal relationships.</li>
                <li><strong>Control & Flexibility:</strong> Parties retain control over the outcome rather than having a decision imposed by a judge.</li>
                <li><strong>High Success Rate:</strong> Mediation often results in mutually satisfactory agreements that parties are more likely to honor.</li>
                <li><strong>Reduces Court Burden:</strong> Helps decongest the judicial system by resolving disputes outside courts.</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border rounded-lg px-6">
          <AccordionTrigger className="text-xl font-semibold hover:no-underline">
            2. Suitability of Mediation for Different Types of Disputes
          </AccordionTrigger>
          <AccordionContent>
            <div className="prose prose-slate max-w-none pt-4">
              <p className="text-muted-foreground mb-4">
                Mediation is suitable for a wide range of disputes across various domains:
              </p>
              <h4 className="font-semibold text-lg mb-3">Suitable Dispute Types:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Commercial Disputes:</strong> Business contracts, partnership disagreements, vendor disputes, and payment issues.</li>
                <li><strong>Family Matters:</strong> Divorce settlements, child custody, property division, and inheritance disputes.</li>
                <li><strong>Workplace Conflicts:</strong> Employment disputes, discrimination claims, and workplace harassment cases.</li>
                <li><strong>Property & Real Estate:</strong> Landlord-tenant disputes, boundary issues, and construction disagreements.</li>
                <li><strong>Consumer Disputes:</strong> Product defects, service quality issues, and warranty claims.</li>
                <li><strong>Neighborhood Disputes:</strong> Noise complaints, property boundaries, and community conflicts.</li>
                <li><strong>Professional Negligence:</strong> Medical malpractice, legal malpractice, and professional service disputes.</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                <strong>Note:</strong> Mediation may not be suitable for cases involving criminal offenses, domestic violence, or where there is a significant power imbalance between parties.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border rounded-lg px-6">
          <AccordionTrigger className="text-xl font-semibold hover:no-underline">
            3. Role of Mediator
          </AccordionTrigger>
          <AccordionContent>
            <div className="prose prose-slate max-w-none pt-4">
              <p className="text-muted-foreground mb-4">
                The mediator plays a crucial facilitative role in the mediation process, acting as a neutral guide rather than a decision-maker.
              </p>
              <h4 className="font-semibold text-lg mb-3">Key Responsibilities:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Neutral Facilitator:</strong> Remains impartial and does not favor any party or impose solutions.</li>
                <li><strong>Process Manager:</strong> Structures the mediation sessions, sets ground rules, and ensures productive dialogue.</li>
                <li><strong>Communication Bridge:</strong> Helps parties communicate effectively, clarifying misunderstandings and reframing issues.</li>
                <li><strong>Interest Identifier:</strong> Assists parties in identifying their underlying interests beyond stated positions.</li>
                <li><strong>Option Generator:</strong> Encourages creative problem-solving and helps explore multiple settlement options.</li>
                <li><strong>Reality Tester:</strong> Helps parties assess the strengths and weaknesses of their positions objectively.</li>
                <li><strong>Confidentiality Guardian:</strong> Maintains strict confidentiality of all information shared during mediation.</li>
                <li><strong>Agreement Drafter:</strong> Assists in documenting the settlement terms clearly and comprehensively.</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                <strong>Important:</strong> The mediator does not judge, decide, or provide legal advice. The parties themselves control the outcome.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border rounded-lg px-6">
          <AccordionTrigger className="text-xl font-semibold hover:no-underline">
            4. Mediation Process
          </AccordionTrigger>
          <AccordionContent>
            <div className="prose prose-slate max-w-none pt-4">
              <p className="text-muted-foreground mb-4">
                The mediation process typically follows a structured approach to facilitate effective dispute resolution:
              </p>
              <h4 className="font-semibold text-lg mb-3">Process Stages:</h4>
              <ol className="space-y-3 text-muted-foreground">
                <li>
                  <strong>1. Introduction & Ground Rules:</strong> The mediator explains the process, establishes confidentiality, and sets ground rules for respectful communication.
                </li>
                <li>
                  <strong>2. Opening Statements:</strong> Each party presents their perspective on the dispute without interruption, allowing everyone to be heard.
                </li>
                <li>
                  <strong>3. Issue Identification:</strong> The mediator helps parties identify and prioritize the key issues that need to be resolved.
                </li>
                <li>
                  <strong>4. Interest Exploration:</strong> Parties discuss their underlying interests, needs, and concerns beyond their initial positions.
                </li>
                <li>
                  <strong>5. Option Generation:</strong> Brainstorming potential solutions and exploring creative options that could satisfy both parties' interests.
                </li>
                <li>
                  <strong>6. Negotiation:</strong> Parties negotiate terms, with the mediator facilitating discussions and helping overcome impasses.
                </li>
                <li>
                  <strong>7. Private Caucuses (if needed):</strong> The mediator may meet separately with each party to discuss sensitive issues confidentially.
                </li>
                <li>
                  <strong>8. Agreement Drafting:</strong> Once consensus is reached, the mediator helps draft a clear, comprehensive settlement agreement.
                </li>
                <li>
                  <strong>9. Closure:</strong> Parties review and sign the agreement, which becomes legally binding once formalized.
                </li>
              </ol>
              <p className="text-muted-foreground mt-4">
                <strong>Timeline:</strong> Under the Mediation Act 2023, the process should generally be completed within 180 days.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
