import React, { useState } from 'react';
import { Button, Card, Timeline } from 'flowbite-react';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';
import FormComponent from './FormComponent';

export const  PaymentTimeline=()=> {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    {
      time: 'Procedure de payment step 1',
      title: 'Choix du transfert mobile',
      body: "nous recevons actuellement n'importe quel type de transfert mobile."
    },
    {
      time: 'Procedure de payment step 2',
      title: 'Choix du transfert plan',
      body: 'nous vous proposerons ici des types de paiement que vous pourrez choisir de souscrire mensuellement, trimestriellement ou annuellement.'
    },
    {
      time: 'Procedure de payment step 3',
      title: "payer pour lire l'article",
      body: 'le processus ici est simple après avoir choisi le numéro de mobile de transfert et choisi le plan de paiement, vous procédez au paiement et obtenez le screenshort de la transaction.'
    },
    {
      time: 'Confirmation de payment step 4',
      title: 'envoyez à Mpore Clinic votre screenshort et attendez 15 min',
      body: "ce processus ici sert simplement à vérifier votre compte et à vous donner accès en fonction de l'argent que vous avez transféré."
    }
  ];

  const handleNext = () => {
    setCurrentStep(prevStep => Math.min(prevStep + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setCurrentStep(prevStep => Math.max(prevStep - 1, 0));
  };

  return (
   <>
    <Card className="mt-3 mr-3 ml-3 mb-5">
<div>
      <Timeline>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>{steps[currentStep].time}</Timeline.Time>
            <Timeline.Title>{steps[currentStep].title}</Timeline.Title>
            <Timeline.Body>{steps[currentStep].body}</Timeline.Body>
           
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
      <div className="flex justify-between mt-4">
        <Button color="gray" onClick={handlePrev} disabled={currentStep === 0}>
          <HiArrowNarrowLeft className="mr-1" /> Previous
        </Button>
        <Button color="gray" onClick={handleNext} disabled={currentStep === steps.length - 1}>
          Next <HiArrowNarrowRight className="ml-1" />
        </Button>
      </div>
    </div>
    </Card>
    <Card className="mt-3 mr-3 ml-3 mb-5">
      <FormComponent/>
    </Card>
   </>
    
    
  );
}
