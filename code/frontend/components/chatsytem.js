import React, { useEffect } from "react";

const ChatSystem = () => {
  useEffect(() => {
    // Tawk.to script
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/6693eaedbecc2fed6924b7e3/1i2osrd3i';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);

      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_API.customStyle = {
        zIndex: 2,
      };
    })();
  }, []);

  return <></>; // The component doesn't need to render anything, it's just for the script to run.
};

export default ChatSystem;