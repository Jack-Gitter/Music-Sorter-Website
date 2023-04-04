const Login = () => {
    const LOGIN_LINK = process.env.REACT_APP_LOGIN_LINK
    return (
        <div>
            <h1>
               Login 
            </h1>
            <a href={LOGIN_LINK}><button>Login!</button></a>
        </div>
    );
}
export default Login;
