import React from "react";

const TeamCard = ({ data }) => {
  const { image, name, designation, url, sd } = data;
  
  return (
    <div className="singleTM">
      <div className="tm_img">
        <img style = {{height:314}} src={image[0].localFile.childImageSharp.gatsbyImageData.images.fallback.src} alt={name} />
        <div className="tm_overlay">
          <div className="team_social">
            {sd.map(({ LinkedinProfiles }, index) => (
              <a key={index} href={LinkedinProfiles}>
                <span>Linkedin</span>
              </a>
            ))}
          </div>
        </div>
      </div> 
      <div className="detail_TM">
        <h5>{name}</h5>
        <h6>{designation}</h6>
      </div>
    </div>
  );
  
};


export default TeamCard;
