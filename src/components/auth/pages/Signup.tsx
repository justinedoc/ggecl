import AuthContainer from "../_components/AuthContainer";
import SignupDetailsForm from "../_components/SignupDetailsForm";
import SignupForm from "../_components/SignupForm";
import { createContext, useState } from "react";

export interface AuthTabsType {
  currentTab: number;
  setCurrentTab: (tab: "next" | "previous") => void;
}

export const AuthTabsContext = createContext<AuthTabsType>({
  currentTab: 0,
  setCurrentTab: () => null,
});

const TABS = [<SignupForm />, <SignupDetailsForm />];

function Signup() {
  const [currentTab, setCurrentTab] = useState(0);

  function handleChangeTab(tab: "next" | "previous") {
    switch (tab) {
      case "next":
        setCurrentTab(1);
        break;
      case "previous":
        setCurrentTab(0);
        break;
      default:
        setCurrentTab(0);
        break;
    }
  }

  return (
    <AuthTabsContext.Provider
      value={{ currentTab, setCurrentTab: handleChangeTab }}
    >
      <AuthContainer>{TABS[currentTab]}</AuthContainer>
    </AuthTabsContext.Provider>
  );
}

export default Signup;
