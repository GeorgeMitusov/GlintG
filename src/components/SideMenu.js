import React, { useContext } from "react";
import { Context } from "../context/Context";

import { motion, AnimatePresence } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import AnchorLink from "react-anchor-link-smooth-scroll";

import "../styles/SideMenu.scss";

const SideMenu = () => {
  const { switchMenu, onMenuToggle, socialInfo, sideMenuLinks } =
    useContext(Context);

  const link = socialInfo.map((item, index) => (
    <li className="side-menu-social-link" key={index}>
      <a href="/#">
        <FontAwesomeIcon className="social-link-icon" icon={item.icon} />
      </a>
    </li>
  ));

  const sideMenuLink = sideMenuLinks.map((item, index) => (
    <motion.li
      className="side-menu-li"
      key={index}
      whileHover={{
        scale: 0.95,
        transition: { duration: 0.4 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <AnchorLink className="side-menu-link" href={item.link}>
        {item.title}
      </AnchorLink>
    </motion.li>
  ));

  return (
    <AnimatePresence mode="wait">
      {switchMenu && (
        <motion.div
          className="side-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 0.7 }}
        >
          <motion.div
            className="side-menu-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              bounce: 0,
              delay: 0.5,
              duration: 0.7,
            }}
          >
            <div className="top-section">
              <h3> navigation </h3>
              <motion.i
                whileHover={{
                  scale: 1.3,
                  transition: { duration: 0.7 },
                }}
                whileTap={{ scale: 0.7 }}
              >
                <FontAwesomeIcon
                  className="close-icon"
                  icon={faClose}
                  onClick={onMenuToggle}
                />
              </motion.i>
            </div>

            <ul className="side-menu-links">{sideMenuLink}</ul>

            <div className="side-menu-desc">
              <p>
                Perspiciatis hic praesentium nesciunt. Et neque a dolorum
                <a href="/##"> voluptatem </a> porro iusto sequi veritatis
                libero enim. Iusto id suscipit veritatis neque reprehenderit.
              </p>
            </div>

            <ul className="side-menu-social-links">{link}</ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideMenu;
