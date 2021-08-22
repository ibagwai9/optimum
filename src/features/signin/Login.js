import React from "react";
import "./login.css";
// import { login } from "../../api/authAPI";
import validator from "./loginValidator";
import logo from "../../assets/images/logo.png";
import useLogin from "./useLogin";

const Login = () => {
	const {errors,values,handleChange,handleSubmit} = useLogin(validator);

	const hasError = (field) =>(field && 'error-input');
	
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="">
						<form onSubmit={handleSubmit} className="box">
							<img src={logo} className="logo" />
							<h1>Result viewer</h1>
							<p className="text-white">View your medical result</p>
							
							<input type="text" onChange={handleChange} className={hasError(errors.lab_number)} name="lab_number" value={values.lab_number} placeholder="Lab number" />
							{errors.lab_number && <span className="text-danger error-txt">{errors.lab_number}</span>}
							
							<input type="text" onChange={handleChange} className={hasError(errors.token)} name="token" value={values.token} placeholder="Token" />
							{errors.token && <span className="text-danger error-txt">{errors.token}</span>}
							<br/>
							<a className="forgot text-white" href="#">Not yet recieved token?</a>
							<input type="submit" name="" value="View Result" />
						</form>
					</div>
				</div>
			</div>
		</div>);
}
export default Login;
