import React from "react";
import "./Home.css";
import VideoCarousel from "./VideoCarousel"

export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <h1>WebFlex</h1>
        <p className="text-muted">A simple video streaming service</p>
      </div>

      <div>
      <VideoCarousel></VideoCarousel>
      </div>
    </div>
  );
}
