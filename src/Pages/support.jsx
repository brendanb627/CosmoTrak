import React from "react";
import { PageLayout } from "../Components/sidebar";

export const Support = () => {
  return (
    <div className="about-page">
      <PageLayout />
      <img src={"CosmoTrak-IconLogo.png"} height="80vw" />
      <h1>Support</h1>
      <div className="about-rect">
        As of now, a support form for CosmoTrak does not exist. For any queries
        please reach out to the CosmoTrak Devs directly with the email
        <a href={`mailto:WebWizDevs@gmail.com?subject=CosmoTrak Support Query`}>
          WebWizDevs@gmail.com
        </a>
      </div>
    </div>
  );
};
