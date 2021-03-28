import { Carousel } from "react-bootstrap";

export default function VideoPreview(props) {
  return (
    <div>
      <a href="https://videodelivery.net/5d5bc37ffcf54c9b82e996823bffbb81/thumbnails/thumbnail.gif?time=38s&height=600&duration=10s&fps=8">
      <img
        className="d-block w-100 h-100"
        src="https://videodelivery.net/5d5bc37ffcf54c9b82e996823bffbb81/thumbnails/thumbnail.gif?time=38s&duration=10s&fps=8"
        alt="First slide"
      />
      </a>
      <Carousel.Caption>
        <h3>Video title</h3>
      </Carousel.Caption>
    </div>
  );
}
