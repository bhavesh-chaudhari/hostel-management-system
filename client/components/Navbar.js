import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const router = useRouter();

  return (
    <div className={styles["navbar-container"]}>
      <nav className={styles["navbar"]}>
        <div className={styles["nav-logo"]}>
          <Link href="/" passHref>
            <a>
              <Image
                src="/logos/iiitn-logo.png"
                width={30}
                height={30}
                alt="logo"
              ></Image>
              <h2><span>H</span>ostel</h2>
            </a>
          </Link>
        </div>
        <div
          onClick={() => setShow((prevState) => !prevState)}
          className={
            show
              ? `${styles["hamburger-btn"]} ${styles["open"]}`
              : styles["hamburger-btn"]
          }
        >
          <div className={styles["hamburger"]}></div>
        </div>
        <div
          className={
            show
              ? styles["nav-links"]
              : `${styles["nav-links"]} ${styles["hide"]}`
          }
        >
          <ul>
            <li className={styles["menu-title"]}>Menu</li>
            <li
              onClick={() => {
                setShow((prevState) => !prevState);
                window.scrollTo(0, 0);
              }}
            >
              <a href="#address">Address</a>
            </li>
            <li
              onClick={() => {
                setShow((prevState) => !prevState);
              }}
            >
              <a href="#contact">Contact</a>
            </li>
            <li
              onClick={() => {
                setShow((prevState) => !prevState);
              }}
            >
              <a rel="noreferrer" target={"_blank"} href="http://iiitn.ac.in">
                Academics
              </a>
            </li>
            <li
              onClick={() => {
                setShow((prevState) => !prevState);
              }}
            >
              <Link href="/gallery">Gallery</Link>
            </li>
            <li
              onClick={() => {
                setShow((prevState) => !prevState);
              }}
            >
              <Link href="/login">Login</Link>
            </li>
            <li
              onClick={() => {
                setShow((prevState) => !prevState);
              }}
            >
              <Link href="/signup">Signup</Link>
            </li>
          </ul>
          <div className={styles["mobile-menu-logo"]}>
            <div className={styles["mobile-menu-logo-content"]}>
              <Image
                src="/images/navbar/navlogo.png"
                height={25}
                width={120}
                alt="logo"
              ></Image>
              <hr />
              <p>Progress over Perfection</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
