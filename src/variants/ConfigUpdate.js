import { useEffect, useRef, useState } from "react";

import Widget from "featureos-widget"


function CustomTrigger() {
  const [bucketId, setBucketId] = useState(null)
  const widget = useRef(null)

  useEffect(() => {
    if (!widget.current) {
      
      widget.current = new Widget({
        modules: ['feature_requests', 'changelog'],
        type: 'modal',
        openFrom: 'right',
        theme: 'dark',
        selector: '#trigger',
        token: 'fxAUf3Q1XgZ-s0q8GHC71Q',
        onInitialized: () => {
          console.log('onInitialized')
        }
      })

      widget.current.init()
    }
  }, [])

  useEffect(() => { 
    if (widget.current) {
      let submissionBucketIds = []
      
      if (bucketId) {
        submissionBucketIds = [bucketId]
      }

      if (!submissionBucketIds) {
        return
      }

      widget.current.updateConfig({
        postFilters: !!bucketId ? {
          bucket_id: submissionBucketIds
        } : undefined,
        submissionBucketIds: bucketId ? submissionBucketIds : undefined
      })
    }
   }, [bucketId])

  return (
    <div>
      <button id="trigger">Custom Trigger</button>

      <button onClick={() => {
        setBucketId(9443)
      }}>
        Feedback Bucket
      </button>
      <button onClick={() => {
        setBucketId(15420)
      }}>
        Suggestions Bucket
      </button>
      <button onClick={() => {
        setBucketId(null)
      }}>
        All Bucket
      </button>

    </div>
  );
}

export default CustomTrigger;
