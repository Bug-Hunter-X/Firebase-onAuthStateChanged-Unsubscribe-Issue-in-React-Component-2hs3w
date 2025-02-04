This repository demonstrates a common but easily overlooked issue with Firebase's `onAuthStateChanged` listener in React components.  The provided `bug.js` file shows the incorrect implementation that leads to memory leaks because the listener isn't unsubscribed from when the component is unmounted. The corrected implementation is in `bugSolution.js`, showing the proper use of the unsubscribe function returned by `onAuthStateChanged` within a cleanup function.  This ensures that the listener is properly removed, preventing memory leaks and improving application performance.