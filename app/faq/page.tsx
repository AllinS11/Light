import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function FAQPage() {
  const breadcrumbItems = [
    { title: 'Home', href: '/' },
    { title: 'FAQ' },
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <Breadcrumb items={breadcrumbItems} className="mb-8" />
      
      <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {/* Accordion items remain the same */}
        </Accordion>
      </div>
    </main>
  );
}