import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/globalStyles.js";
import Loader from "./components/ui/Loader.jsx";

const Home = React.lazy(() => import("./pages/Home.jsx"));

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* <Route element={<AppLayout />}> */}
          <Route path="/" index element={<Home />} />
          {/* </Route> */}
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
