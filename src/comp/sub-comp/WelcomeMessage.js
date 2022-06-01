/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { vars } from "../../vars";

const WelcomeMessage = () => {
  const styles = {
    title: css`
      color: ${vars.background};
      text-align: center;
      width: 600px;
      height: 300px;
      /* position: absolute;
      margin: -150px -300px 0 auto;
      right: 50%;
      top: 50%; */
      font-size: ${vars.body};
    `,
  };
  return <h1 css={styles.title}>Welcome to ZenZu</h1>;
};

export default WelcomeMessage;
