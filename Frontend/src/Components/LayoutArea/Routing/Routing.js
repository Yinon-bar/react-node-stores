import React from "react";
import { Route, Routes } from "react-router-dom";
import Insert from "../../HomeArea/DataArea/Insert/Insert";
import ListData from "../../HomeArea/DataArea/ListData/ListData";
import Home from "../../HomeArea/Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<ListData />} />
        <Route path="/insert" element={<Insert />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default Routing;
