import { useCaptcha } from "./components/Hooks/use-captcha"

export function Login(){
    let code = useCaptcha();
    return(
        <div>
            <h3>User Login</h3>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" /></dd>
                <dt>Password</dt>
                <dd><input type="password" /></dd>
                <dt>Verify Code</dt>
                <dd>{code}</dd>
            </dl>
            <button>Login</button>
            
        </div>
    )
}