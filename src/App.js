import { ToastContainer } from "react-bootstrap";
import Application from "./Application";
import Loader from "./components/common/Loader/Loader";

function App() {
  return (
    <>
      <Application />
      <Loader />
      <ToastContainer />
    </>
  );
}

export default App;
