import React, {useState} from "react";
import LoginPage from "./LoginPage";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card"
import TripsHome from "../components/TripsHome"
import Axios from "axios";

function TripsPages(props) {

  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const token = "eyJraWQiOiI3dXlNa0NuYlp3bDRNNzdLbW13VWpvZlZYRGcxNGhiVWRhU1k4Y0VYOVNnPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJiZjAwNTViOS05MDhiLTQxODktYTkyZi05NDgzMTU4YTJkNDUiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTFfTVpiMEN4WnpBIiwiY2xpZW50X2lkIjoiM3VyNWM4amNsZzVpa2k0ajl0dXZvcjVrNzQiLCJvcmlnaW5fanRpIjoiZjU0NDdkZjgtYzNjYy00MGEwLWE3NTAtM2ZjOWM5ZTY1OTM5IiwiZXZlbnRfaWQiOiI2NGM1ZjgxNy02ODdmLTRkM2EtYWY1OC1kMzZkNWViZDllMDgiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjU4MTk1NjQzLCJleHAiOjE2NTgyMDQ3NzksImlhdCI6MTY1ODIwMTE3OSwianRpIjoiM2RhZTJlY2ItOTZiOC00OTM2LWE3NTktNjQyMjQyZDI1NGU3IiwidXNlcm5hbWUiOiJiZjAwNTViOS05MDhiLTQxODktYTkyZi05NDgzMTU4YTJkNDUifQ.SHSwtmT1jeid5g1EeMSdOrtprQZkIZ69ML4dp8FyFWtW218XhFnisDsXvpOwmFHMyC2NroBczPpvwG-0okGFzQXMY94ihZV7A77aksHQhxjLdpgiuN2K5VPe5NGjmr6A5RLh9rQlQ8OPLmCE3DkVlFFKOFeO8RmGpLgC6ch5ajCDzxa0xiiBbz4F5Y4ZV5P4lXWY35SX0wK1V5bD9Y6unpmmVr1x-u6YaeepGe3uhsGOCV9IFztuClOXrAxodeNM7yInvA-vVew6RQ8W0LgF4kcU8LOVXyCusiys5VXD0U87-xWj56LdpqDrQsuWdpADe9e2e2_A9fkz_1avibM-Fg"
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  Axios.get(
    '/api/v1/user',
    config
  ).then(data => console.log(data.data))


  
  return (
    <div className="App">
      <Header />
      <div className="App-body">
        
      </div>
      <TripsHome />
    </div>
  );
}

export default TripsPages;