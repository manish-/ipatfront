import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/Preloader.css';


// import AdminBaseComponent from "./AdminBaseComponent";
// import UserBaseComponent from "./UserBaseComponent";

import SuspensePreloader from './components/SuspensePreloader';

const AdminBaseComponent = lazy(() => import('./AdminBaseComponent'))
const UserBaseComponent = lazy(() => import('./UserBaseComponent'))

const App = (props) => {

  return (
    <div>
      <BrowserRouter basename="/grc_india">

        <Suspense fallback={SuspensePreloader()}>
          <Routes>
            <Route path="/admin/*" element={<AdminBaseComponent />} />
            <Route path="*" element={<UserBaseComponent {...props} />} />
          </Routes>
        </Suspense>

      </BrowserRouter>
    </div>
  );
}

export default App;
