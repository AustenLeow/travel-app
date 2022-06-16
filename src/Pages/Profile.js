import { useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../store/auth-context';

const Profile = () => {
  const navigate = useNavigate();
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    // add validation
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCgfRxlkuIc3p8RiM_lCXlU2ph2ZAtMOag', {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      // assumption: Always succeeds!
      navigate('/trippackages');
    });
  };

  return (
    <form onSubmit={submitHandler} >
      <div >
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="8" ref={newPasswordInputRef} />
      </div>
      <div >
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default Profile;