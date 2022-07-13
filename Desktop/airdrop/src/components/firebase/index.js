import { initializeApp } from 'firebase/app';
import { 
    getFirestore,collection, addDoc,deleteDoc, doc, onSnapshot,
    query,
    orderBy, serverTimestamp,
    updateDoc,

} from 'firebase/firestore';

import {
    getAuth,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA8BWLczHVklIxKIOHTbUDlQo-4L5mhkQw",
    authDomain: "fir-9-346ea.firebaseapp.com",
    projectId: "fir-9-346ea",
    storageBucket: "fir-9-346ea.appspot.com",
    messagingSenderId: "12242854882",
    appId: "1:12242854882:web:78c25e676d8c54bf808fbb"
  };

//   init firebase
initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const auth = getAuth();


// collection ref
const colRef = collection(db, 'books');


// queries
const q = query(colRef,orderBy('createdAt'))

// get real time collection data
const unsubCol = onSnapshot(q,(snapshot)=> {
    let books = []
    snapshot.docs.forEach(doc=> {
        books.push({ ...doc.data(), id: doc.id })
    })
    console.log(books)
})

// adding books
const addBookForm = document.querySelector(".add")
addBookForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    addDoc(colRef, {
        title:addBookForm.title.value,
        author:addBookForm.author.value,
        createdAt: serverTimestamp(),
    })
    .then(()=> {
        addBookForm.reset()
    }).catch(err=> {
        console.log("An error occured!!!",err);
    })

})

// deleting books
const deleteBookForm = document.querySelector(".delete")
deleteBookForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    const docRef = doc(db,'books',deleteBookForm.id.value);

    deleteDoc(docRef)
    .then(()=>{
        deleteBookForm.reset();
    }).catch(err=> {
        console.log(err);
    })
})


// subscibing to real time doc
const docRef = doc(db,'books','bDfdfc2qd2XAuH3vYbQw')
const unsubDoc = onSnapshot(docRef,(doc)=>{
    console.log(doc.data(),doc.id);
});


// updating form
const updateForm = document.querySelector(".update");
updateForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    const docRef = doc(db,'books',updateForm.id.value)

    updateDoc(docRef,{
        title:'updated title',
    }).then(()=>{
        updateForm.reset();
    })
})



// signup
const signupForm = document.querySelector(".signup")
signupForm.addEventListener("submit",e=>{
    e.preventDefault();

    const email = signupForm.email.value;
    const password = signupForm.password.value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((cred)=>{
        console.log(' user created ',cred.user);
        signupForm.reset();
    })
    .catch(error=> {
        console.log(error)
    })
})

// login

const loginForm = document.querySelector('.login');
loginForm.addEventListener("submit",e=>{
    e.preventDefault();

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    signInWithEmailAndPassword(auth, email, password)
    .then((cred)=>{
        console.log("user logged in",cred.user)
        loginForm.reset();
    })
    .catch(err=>{
        console.log(err);
    })
})

// logout

const logout = document.querySelector(".logout");
logout.addEventListener("click",e=>{
    signOut(auth)
        .then(()=>{
            console.log("USER LOGGED OUT")
        })
        .catch(err=>{
            console.log(err.message)
        })
})

// subscribing to auth changes
const unsubAuth = onAuthStateChanged(auth, (user)=> {
    console.log('user status: ', user);
})


const unsubButton = document.querySelector(".unsub");
unsubButton.addEventListener("click",e=>{
    console.log('Unsubscribing!!!');
    unsubCol();
    unsubDoc();
    unsubAuth();
})
