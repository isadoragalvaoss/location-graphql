import { useQuery } from "@apollo/client";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { LOAD_CLIENT } from "../everbase/Queries";
import Card from "./Card";

function Location() {
  const { loading, data } = useQuery(LOAD_CLIENT);
  const mapStyles = {
    height: "100vh",
    width: "100%",
  };
  const defaultCenter = {
    lat: -16.680556,
    lng: -49.256389,
  };

  return (
    <div>
      {""}
      {loading ? (
        <h1>loading</h1>
      ) : (
        data && (
          <div>
            <Card users={data.client.ipAddress} />
            <LoadScript googleMapsApiKey="AIzaSyCo396Lic3tE3n-Qtpom7HXoBzIttQ_5p0">
              <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
              />
            </LoadScript>
          </div>
        )
      )}
    </div>
  );
}

export default Location;
