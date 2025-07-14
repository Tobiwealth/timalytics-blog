'use client';
import React from 'react';

function useDebounce(val, delay) {
  const [debounceVal, setDebounceVal] = React.useState(val);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceVal(val);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [val, delay]);
  return debounceVal;
}

export default useDebounce;