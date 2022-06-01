/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { vars } from "../vars";

const Navbar = () => {
  const styles = {
    container: css`
      height: 5vh;
      margin: 25px auto;
      width: 80%;
      display: flex;
      justify-content: space-between;
      color: ${vars.text};
    `,
    linksContainer: css``,
    links: css`
      text-decoration: none;
      padding: 0 15px;
      font-size: 2rem;
    `,
    linksBorder: css`
      display: inline-block;
      text-decoration: none;
      ::after {
        content: "";
        display: block;
        transition: width 0.3s;
        width: 0;
        height: 2px;
        background-color: ${vars.text};
      }
      :hover::after {
        width: 100%;
      }
    `,
    title: css`
      font-size: calc(${vars.body} - 1.5rem);
      color: ${vars.text};
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    iconSt: css`
      transform: rotate(35deg);
      color: ${vars.logo};
      width: 3.5rem;
      height: 3.5rem;
      margin-right: -12px;
      margin-top: -13px;
    `,
    iconNd: css`
      transform: rotate(35deg);
      color: ${vars.logo};
      width: 3.5rem;
      height: 3.5rem;
      margin-left: -43px;
      margin-bottom: -13px;
    `,
  };

  return (
    <div css={styles.container}>
      <Link css={styles.title} to="home">
        <FeatherIcon css={styles.iconSt} icon={"hexagon"} />
        ZenZu
        <FeatherIcon css={styles.iconNd} icon={"hexagon"} />
      </Link>
      <ul css={styles.linksContainer}>
        <li css={styles.linksBorder}>
          <Link css={styles.links} to="home">
            Home
          </Link>
        </li>
        <li css={styles.linksBorder}>
          <Link css={styles.links} to="about">
            About
          </Link>
        </li>
        <li css={styles.linksBorder}>
          <Link css={styles.links} to="contact">
            Contact us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
