"use client";

import Image from 'next/image';

export default function Login() {

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <button >Sign in</button>
      <Image
        className=""
        alt="Auth0"
        src="https://refine.ams3.cdn.digitaloceanspaces.com/superplate-auth-icons%2Fauth0-2.svg"
        width={50}
        height={50}
      />
    </div>
  );
}
