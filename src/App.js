import { useEffect, useRef } from "react";

import Widget from "featureos-widget"
import Basic from "./variants/Basic";
import CustomTrigger from "./variants/CustomTrigger";
import FloatingTrigger from "./variants/FloatingTrigger";
import FloatingTriggerWithCustomText from "./variants/FloatingTriggerWithCustomText";

console.log(Widget)

function App() {
  
  return (
    <div>
      <Basic />
      <CustomTrigger />
      <FloatingTrigger />
      <FloatingTriggerWithCustomText />
    </div>
  );
}

export default App;
