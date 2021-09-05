import React from "react";

const GoogleMap = ({ extraClass }) => {
  return (
    <div className={`google-map__${extraClass}`}>
      <iframe
        title="template google map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.134543962714!2d-121.28151668548546!3d37.833735979748774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8090153bf0e4408b%3A0xfb125dcdb5a0a415!2s766%20Granite%20Ave%2C%20Lathrop%2C%20CA%2095330%2C%20USA!5e0!3m2!1sen!2s!4v1630670529209!5m2!1sen!2s"
        className={`map__${extraClass}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;
