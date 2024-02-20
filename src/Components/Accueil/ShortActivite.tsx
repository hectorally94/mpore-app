
import { Button, Card } from 'flowbite-react';
import { FaArrowRight } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

export function ShortActivite() {
  const history = useHistory();

  const handleClick = () => {
    // Navigate to the TargetComponent when the button is clicked
    history.push('/activites');
  };
  return (
        <Card imgSrc="https://t4.ftcdn.net/jpg/02/18/39/49/240_F_218394966_Nrv1qTeQxsZgJ5WaHnZHqd7vd2Xvxr8A.jpg">
      <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Nos Activites
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological 
        order.
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological
      </p>
      <Button color="button_primary" onClick={handleClick}  >
          Plus d'info
        <FaArrowRight className='ml-2'/>
        </Button>
    </Card>
  
  );
}
