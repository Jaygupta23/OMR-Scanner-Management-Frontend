import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Auth/Login";
import CreateUser from "./pages/Admin/CreateUser";
import { AllUser } from "./pages/Admin/AllUser";
import { PageNotFound } from "./pages/PageNotFound";
import { useContext } from "react";
import CsvHomepage from "./pages/CSV Comparer/CsvHomepage";
import Correction from "./pages/CSV Comparer/Correction";
import ImageUploader from "./pages/ImageUploader/ImageUploader";
import ImageScanner from "./pages/ImageScanner/ImageScanner";
import dataContext from "./Store/DataContext";
import CsvUploader from "./pages/CsvUploader/CsvUploader";
import TemplateMapping from "./pages/TemplateMapping/TemplateMapping";

function App() {
  const datactx = useContext(dataContext);

  return (
    <BrowserRouter>
      {datactx.isLogin && <HomePage />}
      <Routes>
        {datactx.isLogin && (
          <>
            <Route path="/home" element={""} />
            <Route path="/create-user" element={<CreateUser />} />
            <Route path="/all-user" element={<AllUser />} />
            <Route path="/comparecsv" element={<CsvHomepage />} />
            <Route path="/correct_compare_csv" element={<Correction />} />
            <Route path="/imageuploader" element={<ImageUploader />} />
            <Route path="/scanner" element={<ImageScanner />} />
            <Route path="/csvuploader" element={<CsvUploader />} />
            <Route path="/templatemap/:id" element={<TemplateMapping />} />

            <Route
              path="*"
              element={
                <PageNotFound errorMessage="Page Not Found" errorCode="404" />
              }
            />
          </>
        )}

        {!datactx.isLogin && (
          <>
            <Route path="/" element={<Login />} />
            <Route
              path="*"
              element={
                <PageNotFound
                  errorMessage="User Not Authorised"
                  errorCode="401"
                />
              }
            />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
