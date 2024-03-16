import React from "react";
import { useLanguage } from "../context/language-context";
//import { Link } from "react-router-dom";

const Imprint = () => {
  const { language } = useLanguage();

  return (
    <React.Fragment>
      {language === "DE" ? (
        <article className="flex flex-col gap-6 max-w-[70vw]">
          <h1>Impressum</h1>
        </article>
      ) : (
        <article className="flex flex-col gap-6 max-w-[70vw]">
          <h1>Site Notice</h1>
          <h2>Information</h2>
          <p>Alvin Dennis<br></br>
          Manjoor P.O.<br></br>
          Kottayam<br></br>
          Kerala</p>

          <h3>Contact</h3>
          <p>Phone: +91 9747153663<br></br>
          E-Mail: alvindennis80@gmail.com</p>

          <h3>Person responsible for editorial</h3>
          <p>Alvin Dennis</p>
        </article>
      )}
    </React.Fragment>
  );
};

export default Imprint;
