//Consider adding error handling and retry mechanisms
const unsubscribe = onAuthStateChanged(auth, (user, error) => {
  if (error) {
    console.error('onAuthStateChanged error:', error);
    //Implement retry logic here if needed
    return;
  }
  if (user) {
    // User is signed in
    const uid = user.uid;
    console.log('User is signed in:', uid);
  } else {
    // User is signed out
    console.log('User is signed out');
  }
});

// unsubscribe from the listener when you are done
// unsubscribe();