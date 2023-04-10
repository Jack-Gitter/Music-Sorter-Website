const Login = () => {
    return (
        <div className="text-center login-background">
            <h1>
               Curated Shuffle
            </h1>
            <a href={'https://curatedshuffleauthserver.onrender.com/login'}>
                <button className={'btn btn-lg btn-outline-dark login-button'}>Login with spotify</button></a>
        </div>
    );
}
export default Login;
