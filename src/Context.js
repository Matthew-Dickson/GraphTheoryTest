import React, { useState } from "react";

export const ProgressContext = React.createContext({
  unlocked: [],
  setUnlocked: () => {},
  unlockedQuizes: [],
  setUnlockedQuizes: () => {},
});

export function ProgessController({ children }) {
  const [unlocked, setUnlocked] = useState([]);
  const [unlockedQuizes, setUnlockedQuizes] = useState(
    JSON.parse(localStorage.getItem("unlockedQuizes"))
  );

  const value = React.useMemo(
    () => ({
      unlocked,
      setUnlocked,
      unlockedQuizes,
      setUnlockedQuizes,
    }),
    [unlocked, setUnlocked, unlockedQuizes, setUnlockedQuizes]
  );

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}
