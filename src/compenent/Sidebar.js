import React from "react";
import "./style.css";

function Sidebar() {
  return (
    <div className="bg-white sidebar p-2">
      <div className="m-2">
        <i className="bi bi-journal-check me-3 fs-4"></i>
        <span className="brand-name fs-4">JaStech</span>
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        <a className="list-group-item py-2 ">
          <i className="bi bi-speedometer fs-5 me-3"></i>
          <span>Dashboard</span>
        </a>
        <a className="list-group-item py-2 ">
          <i className="bi bi-house fs-4 me-3"></i>
          <span>Home</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-laptop fs-4 me-3"></i>
          <span>Geräte</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-person-lines-fill fs-4 me-3"></i>
          <span>Mitarbeiter</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-clipboard-data fs-4 me-3"></i>
          <span>Report</span>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
