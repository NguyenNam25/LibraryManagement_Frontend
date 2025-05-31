import { BrowserRouter, Routes } from "react-router-dom";
import { pdfjs } from "react-pdf";
import ManagerRoute from "./routes/ManagerRoute";
import ReaderRoutes from "./routes/ReaderRoutes";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {ManagerRoute}
        {ReaderRoutes}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
