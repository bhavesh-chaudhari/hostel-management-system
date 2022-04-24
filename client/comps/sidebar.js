import React, { useState } from "react";

import Image from "next/image";

import Link from "next/link";

// import  Image from '../../client/public'

export const sidebar = () => {
  const [side, setSide] = useState(0);

  let a = 0;

  const changeBar = () => {
    if (side == 0) {
      a = 1;
    } else {
      a = 0;
    }
  };

  return  a == 0 ? (
    <>
      <div className="sideBar">
        <div className="sidecomp">
          <div className="logo" >
            <Image onClick={changeBar()}
              src="/home-removebg-preview.png"
              width="60em"
              height="30em"
            
            />
          </div>
          <div className="sidetext"></div>
        </div>

        <div className="sidecomp">
          <div className="logo">
            <Image
              src="/home-removebg-preview.png"
              width="60px"
              height="30px"
            />
          </div>
          <div className="sidetext">
            <Link href="/admin">
              <a className="sideBar_links">Home</a>
            </Link>
          </div>
        </div>

        <div className="sidecomp">
          <div className="logo">
            <Image
              src="/users-removebg-preview.png"
              width="50px"
              height="30px"
            />
          </div>
          <div className="sidetext">
            <Link href="/admin/user">
              <a className="sideBar_links">User</a>
            </Link>
          </div>
        </div>
        <div className="sidecomp">
          <div className="logo">
            <Image
              src="/grievences-removebg-preview.png"
              width="60px"
              height="60px"
            />
          </div>
          <div className="sidetext">
            <Link href="/admin/grevieance">
              <a className="sideBar_links">Grievances</a>
            </Link>
          </div>
        </div>
        <div className="sidecomp">
          <div className="logo">
            <Image
              src="/room-removebg-preview.png"
              width="40px"
              height="30px"
            />
          </div>
          <div className="sidetext">
            <Link href="/admin/room">
              <a className="sideBar_links">Rooms</a>
            </Link>
          </div>
        </div>
        <div className="sidecomp">
          <div className="logo">
            <Image
              src="/notice-removebg-preview.png"
              width="40px"
              height="40px"
            />
          </div>
          <div className="sidetext">
            <Link href="/admin/notice">
              <a className="sideBar_links">Notices</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="sideBar_s">
        <div>
          <div className="logo" onClick={changeBar()}>
            <Image
              src="/home-removebg-preview.png"
              width="60px"
              height="30px"
            />
          </div>

          <div className="sidecomp">
          <div className="logo">
           
            <Link href="/admin">
              <a className="sideBar_links"> <Image
              src="/home-removebg-preview.png"
              width="60px"
              height="30px"
            /></a>
            </Link>
          </div>
        </div>

        <div className="sidecomp">
          <div className="logo">
            <Image
              src="/users-removebg-preview.png"
              width="50px"
              height="30px"
            />
          </div>
          <div className="sidetext">
            <Link href="/admin/user">
              <a className="sideBar_links">User</a>
            </Link>
          </div>
        </div>
        
        <div className="sidecomp">
          <div className="logo">
            <Image
              src="/grievences-removebg-preview.png"
              width="60px"
              height="60px"
            />
          </div>
          <div className="sidetext">
            <Link href="/admin/grevieance">
              <a className="sideBar_links">Grievances</a>
            </Link>
          </div>
        </div>

        <div className="sidecomp">
          <div className="logo">
            <Image
              src="/room-removebg-preview.png"
              width="40px"
              height="30px"
            />
          </div>
          <div className="sidetext">
            <Link href="/admin/room">
              <a className="sideBar_links">Rooms</a>
            </Link>
          </div>
        </div>

        <div className="sidecomp">
          <div className="logo">
            <Image
              src="/notice-removebg-preview.png"
              width="40px"
              height="40px"
            />
            <Link href="/admin/notice">
              <a className="sideBar_links"><Image
              src="/notice-removebg-preview.png"
              width="40px"
              height="40px"
            /></a>
            </Link>
            </div>
        </div>

        </div>
      </div>
    </>
  );
};

export default sidebar;
