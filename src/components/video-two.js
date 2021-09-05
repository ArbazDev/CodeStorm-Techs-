import React, { Fragment, useState } from "react";
import { VideoTwoData } from "@/data";
import ModalVideo from "react-modal-video";
import SectionTitle from "@/components/section-title";
import "react-modal-video/css/modal-video.min.css";
import { Col, Container, Row } from "react-bootstrap";

const VideoTwo = () => {
  return (
    <div className="vid-one">
      <div>
        <iframe width="910" height="512" src="https://www.youtube.com/embed/o9KA8DlFqik" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
      </div>
    </div>
  )
}

export default VideoTwo;
