import { Input } from "@/components/ui/input";
import "./Password.scss";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const Password = () => {
	const [passwordLenght, setPasswordLenght] = useState<number>(16);
	const [password, setPassword] = useState<string>("");

	const generatePassword = (value: number): void => {
		setPasswordLenght(value);
		
		let generatedPassword = teste(value);
		
		if()


		setPassword(generatedPassword);
	};
	
	const teste (length: number): string => {
		const characters =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
		let generatedPassword = "";
		for (let i = 0; i < length; i++) {
			const randomIndex = Math.floor(Math.random() * characters.length);
			generatedPassword += characters[randomIndex];
		}
		return generatedPassword;
	}
	return (
		<section className="password_container">
			<h2>Password Generator</h2>

			<div className="password-input_wrapper">
				<Input value={password} />
				<button type="button">Copy</button>
				<button type="button">Reset</button>
			</div>

			<div className="password-config_wrapper">
				<h3>Password Length</h3>
				<p>{passwordLenght}</p>
				<Slider
					value={[passwordLenght]}
					onValueChange={(e) => generatePassword(e[0])}
					min={4}
					max={100}
					step={1}
				/>
			</div>
		</section>
	);
};

export default Password;
