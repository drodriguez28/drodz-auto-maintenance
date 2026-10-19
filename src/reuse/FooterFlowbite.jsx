import React from "react";
import { Footer, FooterCopyright } from "flowbite-react";

const FooterFlowbite = () => {
  return (
    <Footer container className="mt-5 !bg-garage-900 !rounded-none border-t border-garage-700">
      <FooterCopyright
        by="Deivid R. Business Web™"
        year={new Date().getFullYear()}
        className="!text-gray-400"
      />
    </Footer>
  );
};

export default FooterFlowbite;
