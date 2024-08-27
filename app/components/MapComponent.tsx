"use client"
import { useState } from "react";
// import { Map, Marker} from "@vis.gl/react-google-maps";

const CustomMap = () => {
  // shows marker on London by default
  const [markerLocation, setMarkerLocation] = useState({
    lat: 51.509865,
    lng: -0.118092,
  });

  return (
    <div className="h-[500px] w-[50%] border">
      {/* <Map
        style={{ borderRadius: "20px" }}
        defaultZoom={13}
        defaultCenter={markerLocation}
        gestureHandling={"greedy"}
        disableDefaultUI
      >
        <Marker position={markerLocation} />
      </Map> */}
    </div>
  );
}

export default CustomMap;