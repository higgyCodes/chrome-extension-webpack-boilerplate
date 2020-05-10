import React from "react";
import theme from "../theme";

export default function AttackList({ updateSettings }) {
  return (
    <div css={{ width: theme.space[7] }}>
      <div>
        <button onClick={updateSettings}>Settings</button>
      </div>
      Attack List
    </div>
  );
}
