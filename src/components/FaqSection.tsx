
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Does SchoolPoint work without an internet connection?",
    a: "Yes. Our Edge-First architecture natively supports offline operations for essential tasks like attendance and grading. Data is cached locally and synced automatically in the background when your network is restored."
  },
  {
    q: "Can SchoolPoint handle multiple calendar systems simultaneously?",
    a: "Absolutely. We feature a dual calendar engine that fully supports both Gregorian and Ethiopian calendars simultaneously, handling things like 13 months and localized public holidays effortlessly."
  },
  {
    q: "Is SchoolPoint suitable for a group of schools?",
    a: "Yes. SchoolPoint uses Logical Isolation multi-tenancy. A Super Admin can manage multiple school branches under one unified system while ensuring data remains strictly isolated."
  },
  {
    q: "How secure is our student and financial data?",
    a: "Extremely secure. We use enterprise-grade PostgreSQL with Prisma, JWT-based authentication, BCrypt hashing, and strict Role-Based Access Control (RBAC) ensuring data boundaries."
  },
  {
    q: "How long does it take to deploy SchoolPoint in our institution?",
    a: "Setup is incredibly fast—often within a few days depending on the size of your current data. Our Bulk Data Operations module makes importing existing student and staff records a breeze."
  }
];

const FaqSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">Everything you need to know about integrating SchoolPoint into your institution.</p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
