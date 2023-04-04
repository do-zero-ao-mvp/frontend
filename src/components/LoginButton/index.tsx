import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton() {
  const { loginWithPopup, logout, isAuthenticated, user } = useAuth0();

  return (
    <>
      {!isAuthenticated && (
        <button onClick={() => loginWithPopup()}>Log In</button>
      )}
      {isAuthenticated && (
        <div>
          <p>{user?.email}</p>
          <button onClick={() => logout()}>Log Out</button>
        </div>
      )}
    </>
  );
}
