import React from "react";
import { FiLink } from "react-icons/fi";
import github from "../../../../Assets/github.svg";
import linkedin from "../../../../Assets/linkedin.svg";
import instagram from "../../../../Assets/instagram.svg";
import facebook from "../../../../Assets/facebook.svg";
import gmail from "../../../../Assets/gmail.svg";
import portfolio from "../../../../Assets/computer.svg";
import telegram from "../../../../Assets/telegram.svg";
import twitter from "../../../../Assets/twitter.svg";
import pinterest from "../../../../Assets/pinterest.svg";
import youtube from "../../../../Assets/youtube.svg";

const imgProfile = [
  { id: 1, src: github, name: "Github" },
  { id: 2, src: linkedin, name: "Linkedin" },
  { id: 3, src: instagram, name: "Instagram" },
  { id: 4, src: facebook, name: "Facebook" },
  { id: 5, src: gmail, name: "Gmail" },
  { id: 6, src: portfolio, name: "Portfolio" },
  { id: 7, src: telegram, name: "Telegram" },
  { id: 8, src: twitter, name: "Twitter" },
  { id: 9, src: pinterest, name: "Pinterest" },
  { id: 10, src: youtube, name: "Youtube" },
];

const User = ({ show }) => {
  const imgFilter = imgProfile.findIndex((i) => i.name === show.task.logo);

  return (
    <div key={show.id} className="list-content__box">
      <img
        className="list-content__box-logo"
        src={imgProfile[imgFilter].src}
        alt={imgProfile[imgFilter].name}
      />
      <div className="list-content__box-name">
        {show.task.logo === "Gmail" ? show.task.path : show.task.logo}
      </div>
      <a
        href={
          show.task.logo === "Telegram"
            ? `https://t.me/${show.task.path}`
            : show.task.path && show.task.logo === "Github"
            ? `https://github.com/${show.task.path}`
            : show.task.path && show.task.logo === "Facebook"
            ? `https://facebook.com/${show.task.path}`
            : show.task.path && show.task.logo === "Linkedin"
            ? `https://linkedin.com/in/${show.task.path}`
            : show.task.path && show.task.logo === "Instagram"
            ? `https://instagram.com/${show.task.path}`
            : show.task.path && show.task.logo === "Twitter"
            ? `https://twitter.com/${show.task.path}`
            : show.task.path && show.task.logo === "Pinterest"
            ? `https://pinterest.com/${show.task.path}`
            : show.task.path && show.task.logo === "Youtube"
            ? `https://youtube.com/${show.task.path}`
            : show.task.path && show.task.logo === "Gmail"
            ? false
            : `https://${show.task.path}`
        }
        target={"_blank"}
        rel={"noreferrer"}
      >
        <FiLink size={28} />
      </a>
    </div>
  );
};

export default User;
