import { Carousel } from "react-bootstrap";

export default function VideoPreview(props) {
  const title = props.title;
  const id = props.id;
  const video_url = `/video/${id}`;
  const src = `https://videodelivery.net/${id}/thumbnails/thumbnail.gif?time=2s&duration=10s&fps=8`;
  return (
    <div>
      <a href={video_url}>
      <img
        className="d-block w-100 h-100"
        src={src}
      />
      </a>
      <Carousel.Caption>
        <h3 style={{color:'white'}}>{title}</h3>
      </Carousel.Caption>
    </div>
  );
}
