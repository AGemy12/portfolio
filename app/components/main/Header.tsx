import React from "react";
import SwitcherThemeBtn from "../buttons/SwitcherThemeBtn";

export default function Header() {
  return (
    <div className="fixed top-4 right-4">
      <SwitcherThemeBtn />
    </div>
  );
}
