import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
      } else {
        // User is signed out
      }
    });
    return () => unsubscribe(); // Clean up on unmount
  }, []);
  // ...rest of component
};
export default MyComponent;