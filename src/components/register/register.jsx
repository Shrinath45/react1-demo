export function Register(){
    return(
        <div>
            <h3 className="bi bi-person-add">Register New User</h3>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" /></dd>
                <dt>Password</dt>
                <dd><input type="password" /></dd>
                <dt>Email</dt>
                <dd><input type="email" /></dd>
                <dt>Mobile</dt>
                <dd><input type="text" /></dd>
            </dl>
            <button>Register</button>
            
        </div>
    )
}