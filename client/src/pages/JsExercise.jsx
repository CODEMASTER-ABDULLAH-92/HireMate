import React from "react";
import { Link } from "react-router-dom";
import NavbarCode365 from "../Component/NavbarCode365";

const JsExercise = () => {
  return (
    <div  className="relative min-h-screen bg-slate-950">
      {/* Background radial gradient */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_200px,#e8e345,transparent)]"></div>
      <NavbarCode365 />

      {/* Container for the card */}

    </div>
  );
};

export default JsExercise;
