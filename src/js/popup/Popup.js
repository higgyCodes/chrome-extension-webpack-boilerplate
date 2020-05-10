import { useEffect, useState, Fragment } from "react";
import Settings from "./Settings";
import AttackList from "./AttackList";
// const value = "working well here";

// chrome.storage.sync.set({ key: value }, function () {
//   console.log("Value is set to " + value);
// });
const Views = {
  ATTACKS: "attacks",
  SETTINGS: "settings",
};

export default function Popup() {
  const [apiKey, setApiKey] = useState();
  const [view, setView] = useState(Views.SETTINGS);

  useEffect(() => {
    chrome.storage.sync.get(["key"], ({ key: storageKey }) => {
      setApiKey(storageKey);
      if (storageKey) {
        setView(Views.ATTACKS);
      }
    });
  }, []);

  return view === Views.ATTACKS ? (
    <Fragment>
      <AttackList updateSettings={() => setView(Views.SETTINGS)} />
    </Fragment>
  ) : (
    <Settings apiKey={apiKey} setKey={setApiKey} />
  );
}
