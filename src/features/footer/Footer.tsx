import { useSelector } from "react-redux";
import { selectContacts } from "../../utils";
import linkedInImg from "../../common/assets/footerImg/linkedInImg.png";
import gitHubImg from "../../common/assets/footerImg/gitHubImg.png";
import "./footer.scss";
export const Footer = () => {
  const { githubLink, linkedInLink } = useSelector(selectContacts);
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <ul className="footer__row">
          <li className="footer__row__item">
            <a className="footer__row__link link" href={linkedInLink}>
              <img className="link__image" src={linkedInImg} alt="linkedIn" />
              <span className="link__text">LinkedIn</span>
            </a>
          </li>
          <li className="footer__row__item">
            <a
              className="footer__row__link link"
              href={githubLink}
              target={"_blank"}
              rel="noreferrer"
            >
              <img className="link__image" src={gitHubImg} alt="linkedIn" />
              <span className="link__text">GitHub</span>
            </a>
          </li>
        </ul>

        <div className="footer__copyright">
          <div>Copyright © 2022 Alexander Lukomsky.</div>
          <div>All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};
