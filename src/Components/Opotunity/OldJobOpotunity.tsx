
'use client';

import { Blockquote, Button, Card } from 'flowbite-react';
import { FaDownload } from 'react-icons/fa';

export function OldJobOpotunity() {
  return (

    <Card>
      <h5 className="text-4xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
      offres d’emploi expiree
      </h5>
    <>
    <Blockquote className="text-center mb-5">
        Mpore clinic désire recruter deux (02) médecins généralistes remplissant les conditions exigées accessibles sur le lien ci-haut cité.Pour plus d'information consultez le document en pdf.
    </Blockquote>
    <Button color="button_primary"  >
          Telechargez
        <FaDownload className='ml-2'/>
        </Button>

    <Blockquote className="text-center mb-5">
        Mpore clinic désire recruter deux (02) médecins généralistes remplissant les conditions exigées accessibles sur le lien ci-haut cité.Pour plus d'information consultez le document en pdf
    </Blockquote>
    <Button color="button_primary"  >
          Telechargez
        <FaDownload className='ml-2'/>
        </Button>

    <Blockquote className="text-center mb-5">
        Mpore clinic désire recruter deux (02) médecins généralistes remplissant les conditions exigées accessibles sur le lien ci-haut cité.Pour plus d'information consultez le document en pdf
    </Blockquote>
    <Button color="button_primary"  >
          Telechargez
        <FaDownload className='ml-2'/>
        </Button>

    <Blockquote className="text-center mb-5">
        Mpore clinic désire recruter deux (02) médecins généralistes remplissant les conditions exigées accessibles sur le lien ci-haut cité.Pour plus d'information consultez le document en pdf
    </Blockquote>
    <Button color="button_primary"  >
          Telechargez
        <FaDownload className='ml-2'/>
        </Button>
    </>
    </Card>
  );
}
