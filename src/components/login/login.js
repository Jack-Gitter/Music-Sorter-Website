const Login = () => {
    return (
        <div className="login-page">
            <a href={'https://curatedshuffleauthserver.onrender.com/login'}>
                <button className={'btn btn-lg btn-dark btn-opacity'}>
                    <i className="fa fas fa-2x fa-brands fa-spotify pt-1"></i>
                    <div className="ps-4 pe-4 pb-1">Login with spotify</div>
                </button>
            </a>
        </div>
    );
}
export default Login;
