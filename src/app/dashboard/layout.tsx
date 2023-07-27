import React from "react";
import styles from "../../styles/Dashboard.module.css";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-blue-300 text-white p-[20px]'>layout kusus dashboard {children}</div>
  );
}
