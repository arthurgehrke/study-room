import React from "react";

const SignUpForm = () => {
	return (
		<div className="form-content-right">
			<form className="form">
				<h1>Crie sua sala de estudos e convide seus amigos para estudar!</h1>
			<div className="form-imputs">
				<label htmlFor="username" className="form-label">
					Nome
					<input id="username" type="text" name="username" className="form-imput" placeholder="Qual o seu nome ?"/>
				</label>
			</div>
			<div className="form-imputs">
				<label htmlFor="email" className="form-label">
					Email
					<input id="email" type="email" name="email" className="form-imput" placeholder="Qual o email ?"/>
				</label>
			</div>
			<div className="form-imputs">
				<label htmlFor="members" className="form-label">
					Número de participantes
					<input id="members" type="text" name="members" className="form-imput" placeholder="Quantas pessoas vão estudar com você ?"/>
				</label>
			</div>
				<button className="form-input-btn" type="submit">Criar sala</button>
			</form>
		</div>
	);
};

export default SignUpForm;
