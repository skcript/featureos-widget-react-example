import { useEffect, useRef } from "react";

import Widget from "featureos-widget"


function Basic() {
  const widget = useRef(null)

  useEffect(() => {
    if (!widget.current) {
      widget.current = new Widget({
        modules: ['feature_requests', 'changelog'],
        type: 'popover',
        openFrom: 'right',
        theme: 'dark',

        selector: '#trigger',
        token: 'GEdHL0YpM430Gc0Ch-Tr2w',
        
        onInitialized: () => {
          console.log('onInitialized')
        }
      })

      widget.current.init()
    }
  }, [])

  return (
    <div>
      <button id="trigger">Click here!</button>
    </div>
  );
}

export default Basic;
