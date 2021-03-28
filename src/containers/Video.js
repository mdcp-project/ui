import { Stream } from "@cloudflare/stream-react";
import { useParams } from "react-router-dom";

export default function VideoContainer() {
  let { id } = useParams();
  // const videoIdOrSignedUrl = "7c86df8951f69849f9caeb0981f33ec4";
  let videoIdOrSignedUrl = id;
  return (
    <div>
      <h3>ID: {id}</h3>
      <Stream controls src={videoIdOrSignedUrl} />
    </div>
  );
}
    