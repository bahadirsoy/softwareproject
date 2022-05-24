//import styles
import './loginpage.styles.css'


function LoginPage(){
    return(
        <>
            <div>
                <div className="container">
                    <form action="">
                        <div className="title">LOG IN TO YOUR ACCOUNT </div>
                        <div className="input-box">
                            <input type="email" placeholder="Please enter your Email or Telephone number"
                                required=""/>
                            <div className="underline"> </div>
                        </div>

                        <div className="input-box">
                            <input type="password" placeholder="Please enter your password" required=""/>
                            <div className="underline"> </div>
                        </div>

                        <div className="text">
                            <a href="MainPageUser.html">
                                Log in
                            </a>

                        </div>
                    </form>
                    <div className="text "> 
                        <a href="CreateAccount.html">
                            <i className="fas fa-user-circle"></i>
                            <span>Create a new account</span>
                        </a> 
                    </div>

                </div>
            </div>
        </>
    )
}

export default LoginPage;