import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import places from "../data/places";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function PlacesMap() {
  return (
    <MapContainer
      center={[17.9757, 102.6331]}
      zoom={13}
      scrollWheelZoom={true}
      className="h-[420px] w-full rounded-3xl z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {places.map((place) => (
        <Marker
          key={place.id}
          position={[place.lat, place.lng]}
          icon={markerIcon}
        >
          <Popup>
            <div className="min-w-[180px]">
              <h3 className="font-bold mb-1">{place.name}</h3>
              <p className="text-sm mb-2">{place.shortDescription}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${place.lat},${place.lng}`}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 text-sm font-semibold"
              >
                เปิดใน Google Maps
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}