/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import "./index.css";
import { useState } from "react";

import Navbar from "./comp/Navbar";
import { Outlet } from "react-router-dom";
import { vars } from "./vars";
import Footer from "./comp/Footer";
import WelcomeMessage from "./comp/sub-comp/WelcomeMessage";
import GetStartedButton from "./comp/sub-comp/GetStartedButton";

function App() {
  const animate = keyframes`
         0%{
           background-position: top left;

         }
         25%{
           background-position: top right;
         }
         50%{
           background-position: bottom right;
         }
         75%{
           background-position: bottom left;
         }
    `;
  const hidden = css`
    display: none;
  `;
  const welcome = css`
    position: absolute;
    right: 50%;
    top: 50%;
    height: 500px;
    width: 600px;
    margin: -200px -300px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const styles = {
    container: css`
      background-image: radial-gradient(${vars.primary}, ${vars.secondary});
      animation: ${animate} 12s linear infinite;
      background-size: 200% 200%;
      width: 100%;
      height: 90vh;
      position: relative;
    `,
  };
  // const [boolegen, setBoolegen] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setBoolegen(false);
  //     console.log(boolegen);
  //   }, 5000);
  // }, []);

  const [welcomeMes, setWelcomeMes] = useState({ welcome });

  const handleStartButton = () => {
    setWelcomeMes("hidden");
  };
  return (
    <div>
      <Navbar />
      <div css={styles.container}>
        <div css={welcomeMes}>
          <WelcomeMessage />
          <GetStartedButton func={handleStartButton} />
        </div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
