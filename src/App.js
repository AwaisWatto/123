import React from "react";

import { Routes, Route } from "react-router-dom";
import Navbar1 from "./Components/Navbar";
import Parent from "./Components/Parent";
import RequestTable from "./Pages/1RequestTable";
import UserLogin from "./Pages/2StackOver";
import AdminPanel from "./Pages/3Openadminpanel";
import UpdateData from "./Pages/4ai";
import MyModal from "./Pages/5Model";

function App() {
  return (
    <div>
      <Navbar1 />
      <Routes>
        {/* <Route path="/" element={<Navbar1 />} /> */}
        <Route index element={<Parent />} />
        <Route path="requesttable" element={<RequestTable />} />
        <Route path="About-Us" element={<UserLogin />} />
        <Route path="Contact-US" element={<AdminPanel />} />
        <Route path="Cart" element={< UpdateData/>} />
        <Route path="User" element={< MyModal/>} />
      </Routes>
    </div>
  );
}

export default App;
