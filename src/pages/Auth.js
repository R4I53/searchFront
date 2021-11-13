import React from "react";

import AuthForm from "../components/auth-form/AuthForm";
import BGLayout from "../layout/bg-layout/BGLayout";

const Auth = () => {
  const vantaRef = React.useRef(null);
  const [vantaEffect, setVantaEffect] = React.useState(0);

  React.useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x44a418,
          backgroundColor: 0x0d1117,
          points: 8.0,
          maxDistance: 18.0,
          spacing: 14.0,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div style={{ height: "100vh" }} ref={vantaRef} className="">
      <AuthForm />
    </div>
  );
};

export default Auth;
