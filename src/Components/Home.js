import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

export default function home() {
  return (
    <>
      <NavBar />
      <div className="home">
        <Link className="home-link" to="/nasaphoto">
          See Into The Stars!
        </Link>
      </div>
    </>
  );
}
