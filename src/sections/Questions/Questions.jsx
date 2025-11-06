import Sections from "@/layouts/Sections";
import Button from "@/components/Button";
import AccordionGroup from "@/components/AccordionGroup/index.js";
import Accordion from "@/components/Accordion/index.js";

const Questions = () => {
  const questionsItems = [
    'What is StreamVibe?',
    'How much does StreamVibe cost?',
    'What content is available on StreamVibe?',
    'How can I watch StreamVibe?',
    'How do I sign up for StreamVibe?',
    'What is the StreamVibe free trial?',
    'What is the StreamVibe free trial?',
    'What are the StreamVibe payment methods?',
  ]

  return (
    <Sections
      title="Frequently Asked Questions"
      titleID="questions-title"
      description="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
      actions ={(
        <Button label="Ask a Questions" href="/support" />
      )}
    >
      <AccordionGroup columns={2}>
        {questionsItems.map((question, index) => (
          <Accordion
            title={question}
            id={`question-${index}`}
            name="question"
            isOpen={index === 0}
            key={index}
          >
            <p>
              StreamVibe is a streaming service that allows you to watch movies and shows on demand.
            </p>
          </Accordion>
        ))}
      </AccordionGroup>
    </Sections>
  )
}

export default Questions