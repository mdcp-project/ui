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
      <VideoPreview url="1"></VideoPreview>
    </Carousel.Item>
  );
  videos.push(
    <Carousel.Item>
      <VideoPreview url="1"></VideoPreview>
    </Carousel.Item>
  );
  videos.push(
    <Carousel.Item>
      <VideoPreview url="1"></VideoPreview>
    </Carousel.Item>
  );
  videos.push(
    <Carousel.Item>
      <VideoPreview url="1"></VideoPreview>
    </Carousel.Item>
  );
  videos.push(
    <Carousel.Item>
      <VideoPreview url="1"></VideoPreview>
    </Carousel.Item>
  );
  videos.push(
    <Carousel.Item>
      <VideoPreview url="1"></VideoPreview>
    </Carousel.Item>
  );
  videos.push(
    <Carousel.Item>
      <VideoPreview url="1"></VideoPreview>
    </Carousel.Item>
  );
  videos.push(
    <Carousel.Item>
      <VideoPreview url="1"></VideoPreview>
    </Carousel.Item>
  );

  return (
    <Carousel interval={3000} activeIndex={index} onSelect={handleSelect}>
      {videos}
    </Carousel>
  );
}
