/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FeatherIcon from "feather-icons-react";
import { vars } from "../../vars";

import { Link } from "react-router-dom";

const StartButton = ({ func }) => {
  const styles = {
    link: css`
      display: flex;
      align-items: center;
      color: ${vars.background};
      text-decoration: none;
      font-size: ${vars.heading};
      background: ${vars.text};
      padding: 10px 25px;
      border-radius: 24px;
    `,
    icon: css`
      width: 50px;
      height: 50px;
    `,
  };
  return (
    <Link onClick={func} to="home" css={styles.link}>
      Home
      <FeatherIcon css={styles.icon} icon={"box"} />
    </Link>
  );
};

export default StartButton;
