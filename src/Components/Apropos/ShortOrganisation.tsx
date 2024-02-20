
'use client';

import { Blockquote, Card } from 'flowbite-react';

export function ShortOrganisation() {
  return (
    <Card >
      <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
      Organisation
      </h5>

    <Blockquote className="text-center">The organization of our hospital encompasses its structure, leadership, departments, and how it operates on a day-to-day basis. This includes details about our administrative leadership, medical staff, clinical services, support departments, and any affiliations or partnerships we may have with other healthcare organizations. Understanding the organization helps stakeholders grasp how our hospital functions and how different parts work together to deliver care effectively.
    </Blockquote>
    </Card>
  );
}
