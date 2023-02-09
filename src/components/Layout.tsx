import React from "react";
import TopNav from "./TopNav";
type Props = {
  children?: React.ReactChild | React.ReactChild[];
  type: string;
};
const Layout: React.FC<Props> = ({ children, type }) => {
  return (
    <main className=" max-h-screen overflow-scroll  h-screen relative bg-white">
      <TopNav type={type} />
      <body>{children}</body>
    </main>
  );
};

export default Layout;
