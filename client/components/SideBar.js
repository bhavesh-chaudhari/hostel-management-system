import React from "react";
import styles from "../styles/SideBar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Image from "next/image";

const SideBar = () => {
  const router = useRouter();

  const logout = async () => {
    const res = await fetch("http://localhost:5000/api/v1/auth/logout");
    const data = res.json();

    if (res.status === 200) {
      router.replace("/login");
      toast.success("Logged Out Successfully !")
    }

    console.log(data);
  };

  return (
    <div className={styles["sidebar-container"]}>
      <div className={styles["header"]}>
        <button onClick={logout}>Logout</button>
      </div>
      <div className={styles["sidebar-content"]}>
        <div className={styles["sidebar-logo"]}>
          <Link href="/" passHref>
            <a>
              <Image
                src="/logos/iiitn-logo.png"
                width={30}
                height={30}
                alt="logo"
              ></Image>
              <h2>
                <span>H</span>ostel
              </h2>
            </a>
          </Link>
        </div>
        <div className={styles["sidebar-menu"]}>
          <Link href="/profiles" passHref>
            <a>Profiles</a>
          </Link>
          <Link href="/notices" passHref>
            <a>Notices</a>
          </Link>
          <Link href="/grievances" passHref>
            <a>Grievances</a>
          </Link>
          <Link href="/rooms" passHref>
            <a>Rooms</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
