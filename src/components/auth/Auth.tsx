import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import "./auth.css";

const Auth: React.FC = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate();

  const createUser = () => {
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        console.log("Registration successful", userCredential);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error during registration", error);
        alert(error.message);
      });
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log("Google Sign-in successful", result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error during Google sign-in", error);
        alert(error.message);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, [auth]);

  console.log("Current user:", user);

  return (
    <div>
      <main id=" Auth">
        <div className="container">
          <div className="register-form-container">
            <div className="from-hero">
              <h1 className="form-pretitle">Новый аккаунт</h1>
              <h5 className="from-title">
                Уже есть аккаунт? <span>Войти</span>
              </h5>
            </div>
            <div className="from-first">
              <div className="form-fields">
                <div className="form-field">
                  <input
                    onChange={(e) => setUserEmail(e.target.value)}
                    value={userEmail}
                    type="text"
                    placeholder="Эл.почта"
                  />
                  <hr className="hr" />
                </div>

                <div className="form-field">
                  <input
                    onChange={(e) => setUserPassword(e.target.value)}
                    value={userPassword}
                    type="text"
                    placeholder="Придумайте пароль"
                  />
                  <hr className="hr" />
                </div>

                <div className="form-buttons">
                  <button
                    disabled={!userEmail || !userPassword}
                    type="submit"
                    onClick={createUser}
                    className="button "
                  >
                    Зарегистрироваться
                  </button>
                </div>
              </div>
              <div className="form-hr">
                <hr className="hr1" />
                <span>или</span>
                <hr className="hr1" />
              </div>
              <div className="form-google">
                <a href="#" className="google">
                  <div className="form-google-icon">
                    <FcGoogle />
                  </div>
                  <div onClick={signInWithGoogle} className="form-google-text">
                    Продолжить в Google
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Auth;
