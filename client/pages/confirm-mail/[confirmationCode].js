import React, { useEffect } from "react";
import { useRouter } from "next/router";

const confirmationCode = () => {
  const router = useRouter();

  console.log(router.query.confirmationCode);

  useEffect(() => {
      if(!router.isReady) return
      fetch(
        `http://localhost:5000/api/v1/auth/confirm-mail/${router.query.confirmationCode}`,
        {
          method: "GET",
          credentials: "include",
          headers: { "Content-type": "application/json" },
        }
      )
        .then((res) => {
            if(res.status === 200){
                router.replace("/")
            }
            return res.json();
        })
        .then((data) => console.log(data));
  }, [router.isReady]);

  return <div>confirmation page</div>;
};

export default confirmationCode;
