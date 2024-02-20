// GoogleMapsLink.tsx
import React from 'react';

const GoogleMapsLink: React.FC = () => {

  // https://www.google.com/business/ for the rancking  on the map
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6823.120770401512!2d29.359359245502063!3d-3.384392819112896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c1834911f676c5%3A0x493cc46222dd6f86!2sZanzi!5e0!3m2!1sen!2sbi!4v1708448430691!5m2!1sen!2sbi"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default GoogleMapsLink;
