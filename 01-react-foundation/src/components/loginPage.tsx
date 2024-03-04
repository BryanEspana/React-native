import { useAuthStore } from "../store/auth.store";

export const loginPage = () => {

  const authStatus = useAuthStore(state => state.status);
  
  return (
    <>
      <h3>Login Page</h3>
      {authStatus}
    </>
  )
}

export default loginPage
