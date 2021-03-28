import { useState } from "react";
import { Carousel } from "react-bootstrap";

import VideoPreview from "./VideoPreview";
import "./VideoCarousel.css";

export default function VideoCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  let videos = [];
  videos.push(
    <Carousel.Item>
      <VideoPreview id="7c86df8951f69849f9caeb0981f33ec4" title="Rick Astley - Never Gonna Give You Up"></VideoPreview>
    </Carousel.Item>
  );
  videos.push(
    <Carousel.Item>
      <VideoPreview id="321cd67561491ab6d7b33c6c4c606daa" title="Polish Cow"></VideoPreview>
    </Carousel.Item>
  );
  videos.push(
    <Carousel.Item>
      <VideoPreview id="fefecb3cf708c2263e7ffa782a447c73" title="DOTA Dragon Blood Official Trailer"></VideoPreview>
    </Carousel.Item>
  );

  return (
    <Carousel interval={3000} activeIndex={index} onSelect={handleSelect}>
      {videos}
    </Carousel>
  );
}
