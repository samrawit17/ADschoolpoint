const fs = require('fs');
const path = require('path');

const serviceFaqs = {
  'WebsiteDevelopment.tsx': [
    {
      q: "How much does a custom website cost for a business in Addis Ababa?",
      a: "A professional custom website in Addis Ababa costs between 15,000 to 50,000 ETB depending on complexity, features, and design requirements. E-commerce platforms and complex web applications require a higher investment, while simple informational sites fall on the lower end."
    },
    {
      q: "How long does it take to build a fully functional corporate website?",
      a: "Most corporate websites take between 3 to 6 weeks to design, develop, and launch. This timeline includes initial planning, custom designing, coding, content integration, and comprehensive testing to ensure everything runs smoothly across all devices."
    },
    {
      q: "Do you provide website maintenance and hosting services after launch?",
      a: "Yes, we provide complete, ongoing website maintenance, secure hosting, and regular performance updates. Our monthly support packages ensure your website remains fast, secure against threats, and fully operational without you needing to manage technical details."
    }
  ],
  'ApplicationDevelopment.tsx': [
    {
      q: "How much does it cost to develop a mobile app for my business?",
      a: "Developing a mobile app typically costs between 100,000 to 500,000 ETB, depending on the platform (iOS, Android, or cross-platform) and feature complexity. Simple utility apps cost less, while complex apps with backend integrations cost more."
    },
    {
      q: "Which is better for my business, a native app or cross-platform development?",
      a: "Cross-platform development is generally better for most businesses to save time and reduce costs by deploying on both iOS and Android simultaneously. Native apps are only recommended when you need extreme performance or native hardware features."
    },
    {
      q: "How long does mobile application development usually take from start to finish?",
      a: "A standard mobile application takes about 2 to 4 months to develop from initial concept to app store launch. This includes UI/UX design, frontend and backend coding, rigorous testing, and the app store approval process."
    }
  ],
  'DigitalMarketing.tsx': [
    {
      q: "What is the best digital marketing strategy for businesses in Ethiopia?",
      a: "The best digital marketing strategy in Ethiopia combines active social media management on Telegram, Facebook, and TikTok with localized SEO. Engaging your audience where they spend time online yields the highest return on investment and brand awareness."
    },
    {
      q: "How quickly can I expect to see results from a digital marketing campaign?",
      a: "You can expect to see initial engagement results within the first 30 days of launching a digital marketing campaign. However, substantial ROI, lead generation, and sustained organic search traffic typically take 3 to 6 months to materialize."
    },
    {
      q: "Do you handle content creation and community management for our social media pages?",
      a: "Yes, we handle complete, end-to-end content creation, graphic design, copywriting, and active community management. We ensure your brand maintains a consistent voice, engages with followers promptly, and publishes high-quality content that drives measurable conversions."
    }
  ],
  'AutomationCloudDevOps.tsx': [
    {
      q: "What are the benefits of migrating my business infrastructure to the cloud?",
      a: "Migrating to the cloud reduces hardware costs, improves data security, and allows your team to access workloads from anywhere. It also ensures high availability, easy scalability during traffic spikes, and automated disaster recovery for your critical business data."
    },
    {
      q: "How does process automation save time and money for my company?",
      a: "Process automation saves money by eliminating repetitive manual tasks, reducing human error, and accelerating workflow speeds. By automating operations like data entry and customer follow-ups, your team can focus entirely on high-value, strategic growth initiatives."
    },
    {
      q: "Which cloud providers do you work with for enterprise DevOps solutions?",
      a: "We primarily work with industry-leading cloud providers like Amazon Web Services (AWS), Google Cloud Platform (GCP), and Microsoft Azure. We tailor the infrastructure to your specific needs, ensuring optimized performance, cost-efficiency, and robust security."
    }
  ],
  'SecuritySolutions.tsx': [
    {
      q: "How can I protect my company data from ransomware and cyber attacks?",
      a: "Protecting your data requires a multi-layered approach including continuous network monitoring, regular employee security training, strict access controls, and automated encrypted backups. We implement robust endpoint protection to stop threats before they breach your network."
    },
    {
      q: "What is a vulnerability assessment and why does my business need one?",
      a: "A vulnerability assessment is a systematic review of your IT systems to identify and patch security weaknesses before hackers exploit them. Regular assessments are crucial to stay compliant, protect customer data, and prevent costly data breaches."
    },
    {
      q: "Do you provide 24/7 security monitoring and incident response services?",
      a: "Yes, we provide continuous 24/7 network monitoring alongside rapid incident response to detect and neutralize threats immediately. Our Security Operations Center (SOC) ensures your systems remain protected around the clock, minimizing any potential downtime."
    }
  ],
  'AIIntegration.tsx': [
    {
      q: "How can Artificial Intelligence improve my daily business operations and customer service?",
      a: "AI improves operations by automating routine inquiries through intelligent chatbots, analyzing large datasets for predictive insights, and personalizing customer experiences. This leads to faster response times, reduced operational costs, and smarter, data-driven business decisions."
    },
    {
      q: "Is it expensive to integrate AI solutions into an existing software system?",
      a: "Integrating AI is highly cost-effective today thanks to accessible APIs like OpenAI and specialized cloud machine learning models. The initial investment pays for itself quickly through massive efficiency gains and reduced manual labor costs."
    },
    {
      q: "Will AI completely replace my human workforce and customer support team?",
      a: "No, AI is designed to augment your human workforce, not replace it. By handling repetitive tasks and basic FAQs, AI frees up your employees to focus on complex problem-solving, relationship building, and strategic work."
    }
  ]
};

const importAccordion = `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";\n`;

for (const [filename, faqs] of Object.entries(serviceFaqs)) {
  const filePath = path.join(__dirname, '..', 'src', 'pages', 'services', filename);
  
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${filename}, file not found at ${filePath}`);
    continue;
  }
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  if (content.includes('AccordionContent')) {
    console.log(`Skipping ${filename}, already has Accordion.`);
    continue;
  }

  if (!content.includes('import { Accordion')) {
    const lines = content.split('\n');
    let lastImportIndex = 0;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim().startsWith('import ')) {
        lastImportIndex = i;
      }
    }
    lines.splice(lastImportIndex + 1, 0, importAccordion);
    content = lines.join('\n');
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const schemaString = JSON.stringify(schemaData);

  let faqJsx = `\n        {/* FAQ Section with Schema Markup */}
        <section className="py-24 bg-background border-t border-border/40">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full text-left">
`;

  faqs.forEach((faq, index) => {
    faqJsx += `                <AccordionItem value="item-${index + 1}">
                  <AccordionTrigger className="text-left text-lg font-medium">${faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    ${faq.a}
                  </AccordionContent>
                </AccordionItem>
`;
  });

  faqJsx += `              </Accordion>
            </div>
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: \`${schemaString.replace(/\\/g, '\\\\').replace(/`/g, '\\`')}\` }} />
        </section>\n
`;

  if (content.includes('{/* CTA Section */}')) {
    content = content.replace('{/* CTA Section */}', faqJsx + '        {/* CTA Section */}');
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Successfully updated ${filename}`);
  } else {
    console.log(`Could not find CTA Section in ${filename}`);
  }
}
