import { useEffect, useRef } from "react";

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const CameraPosition = {
      center: [14196424.137257246, 4301029.874526409],
      zoom: 14,
    };

    const MapOptions = {
      basemapType: vw.ol3.BasemapType.GRAPHIC_NIGHT,
      controlDensity: vw.ol3.DensityType.EMPTY,
      interactionDensity: vw.ol3.DensityType.BASIC,
      controlsAutoArrange: true,
      homePosition: CameraPosition,
      initPosition: CameraPosition,
      logo: false,
    };

    if (mapRef.current) {
      new vw.ol3.Map(mapRef.current, MapOptions);
    }
  }, []);

  return (
    <div className="w-screen h-screen fixed top-0 left-0 right-0 bottom-0 z-20">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
};

export default Map;
