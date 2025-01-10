 import { useForm } from "react-hook-form"
import { Login } from "../../login";
import { Navbar } from "../controlled-somponent/navbar";

 export function HookFormDemo(){

    const {register, handleSubmit, formState:{errors}} = useForm();

    const submit = (values) => {
        console.log(values);
    }

    return(
        <div className="container-fluid">
            <header className="mt-4 ">
                <Navbar theme="bg-danger text-light" title="Shopper." menuItems={['Home', 'SHop', 'Catalog', 'Blog', 'Docs']} shortcut={['bi bi-person','bi bi-cart4']} />
            </header>
            <section>
                <Navbar theme="bg-primary text-white" title="Naresh IT" menuItems={['Home', 'Courses', 'Offers']} shortcut={['bi bi-heart', 'bi bi-person', 'bi bi-bell', 'bi bi-facebook']} />
            </section>
            <div>
                <Login />
            </div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit(submit)}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name="userName" {...register("userName", {required:true, minLength: 4,})} /></dd>
                    <dd className="text-danger">
                        {
                            (errors.userName?.type==="required")? <span>User Name Required</span>:<span></span> && (errors.userName?.type==="minLength")?<span>Name too short</span>: <span></span>
                        }
                    </dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="mobile" {...register("mobile", {required:true, pattern: /\+91\d{10}/})} /></dd>
                    <dd className="text-danger">
                        {
                            (errors.mobile?.type==="required")? <span>Mobile Required</span>:<span></span> && (errors.mobile?.type==="pattern")?<span>Invalid Mobile.</span>: <span></span>
                        }
                    </dd>
                </dl>
                <button type="submit">Register</button>
            </form>

        </div>
    )
 }