import React from "react";
import useForm from "../hooks/useForm";

const SignUpForm = () => {
	const { handleChange, values } = useForm();

	return (
		<div className="form-content-right">
			<form className="form">
				<h1>Crie sua sala de estudos e convide seus amigos para estudar!</h1>
			<div className="form-imputs">
				<label htmlFor="username" className="form-label">
					Nome
					<input 
					id="username" 
					type="text" 
					name="username" 
					className="form-imput" 
					placeholder="Qual o seu nome ?"
					value={values.username}
					onChange={handleChange}
					/>
				</label>
			</div>
			<div className="form-imputs">
				<label htmlFor="email" className="form-label">
					Email
					<input 
					id="email" 
					type="email" 
					name="email" 
					className="form-imput" 
					placeholder="Qual o email ?"
					value={values.email}	
					onChange={handleChange}
					/>
				</label>
			</div>
			<div className="form-imputs">
				<label htmlFor="members-number" className="form-label">
					Número de participantes
					<input 
					id="members-number" 
					type="text" 
					name="members-number" 
					className="form-imput" 
					placeholder="Quantas pessoas vão estudar com você ?"
					value={values.membersNumber}
					onChange={handleChange}
					/>
				</label>
			</div>
				<button className="form-input-btn" type="submit">Criar sala</button>
			</form>
		</div>
	);
};

export default SignUpForm;
