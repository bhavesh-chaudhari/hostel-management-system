import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";
import Profile from "../../components/Profile";

const index = ({ user }) => {
  return <Profile user={user} />;
};

export const getStaticProps = async ({ params }) => {
  // console.log("roll no. is: ", params.rollNo);

  const res = await fetch(`http://localhost:5000/api/v1/users/${params.rollNo}`, {
    method: "GET",
    credentials: "include",
    headers: { "Content-type": "application/json" },
  });

  const data = await res.json();

  // console.log("user page for: ", data.user);

  const {password, ...profileUser} = data.user

  // console.log(profileUser)

  return {
    props: {
      user: profileUser,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:5000/api/v1/users`, {
    method: "GET",
    credentials: "include",
    headers: { "Content-type": "application/json" },
  });

  const data = await res.json();

  // console.log(data.users);

  const paths = data.users.map((user) => {
    return {
      params: { rollNo: user.rollNo.toLowerCase() },
    };
  });

  // console.log(paths);

  return {
    paths: paths,
    fallback: false,
  };
};

export default index;
