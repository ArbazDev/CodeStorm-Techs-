import React from "react";

const GoogleMap = ({ extraClass }) => {
  return (
    <div className={`google-map__${extraClass}`}>
      <iframe
        title="template google map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5041.029840105587!2d73.15749318247912!3d33.658501450700975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeb104a188d9d%3A0x719284290cc3d2c2!2sHostel%20City!5e0!3m2!1sen!2sus!4v1643907211333!5m2!1sen!2sus"
        className={`map__${extraClass}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;
