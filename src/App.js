// import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import { useState, useEffect, useRef } from "react";


// export const App =()=> {

//   const auth = getAuth();
//   auth.languageCode = 'mn';
//   // To apply the default browser preference instead of explicitly setting it.
//   // firebase.auth().useDeviceLanguage();
//   const [value, setValue] = useState('');
//   const [code, setCode ] = useState('');

//     const recaptchaVerifier = useRef();
//     const confirmationResult = useRef();


//     useEffect(() => {
//       const auth = getAuth();
//       recaptchaVerifier.current = new RecaptchaVerifier('recaptcha-container', {}, auth);
//   }, [])

//   const onClickLogin = async() => {
//     const auth = getAuth();
//     const phoneNumber = value;
//     confirmationResult.current = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier.current);

//     setValue('');

// }

// const onClickCheckCode = async () => {

//   await confirmationResult.current.confirm(code);

// }



//   return(
//       <div>
//           <input placeholder="Phonenumber" value={ value } onChange={(e)=>{ setValue(e.target.value)} } />
//           <button onClick={ onClickLogin } > code </button>
//           <input placeholder="code" value={ code } onChange={ (e) => setCode(e.target.value) } />
//           <button onClick={ onClickCheckCode } > Submit </button>
//           <div id="recaptcha-container"></div>
//       </div>
//   )
// }

