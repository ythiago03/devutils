import { Input } from "@/components/ui/input";
import "./Password.scss";
import { Slider } from "@/components/ui/slider";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, RotateCcw } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Password = () => {
	const [passwordLenght, setPasswordLenght] = useState<number>(16);
	const [password, setPassword] = useState<string>("");
	const [containsUppercase, setContainsUppercase] = useState<boolean>(true);
	const [containsLowercase, setContainsLowercase] = useState<boolean>(true);
	const [containsNumbers, setContainsNumbers] = useState<boolean>(true);
	const [containsSpecials, setContainsSpecials] = useState<boolean>(true);

	const getPassword = (value: number): void => {
		setPasswordLenght(value);

		const generatedPassword = generatePassword(value);

		setPassword(generatedPassword);
	};

	useEffect(() => {
		getPassword(passwordLenght);
	}, []);

	const generatePassword = (length: number): string => {
		const characters: string =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
		let formatedCharacters = characters;

		if (!containsNumbers) {
			formatedCharacters = formatedCharacters.replace(/\d/g, "");
		}

		if (!containsUppercase) {
			formatedCharacters = formatedCharacters.replace(/[A-Z]/g, "");
		}

		if (!containsLowercase) {
			formatedCharacters = formatedCharacters.replace(/[a-z]/g, "");
		}
		if (!containsSpecials) {
			formatedCharacters = formatedCharacters.replace(/[^a-zA-Z0-9]/g, "");
		}
		console.log(formatedCharacters);

		let generatedPassword = "";
		for (let i = 0; i < length; i++) {
			const randomIndex = Math.floor(Math.random() * formatedCharacters.length);
			generatedPassword += formatedCharacters[randomIndex];
		}
		return generatedPassword;
	};

	const copyToClipboard = (value: string) => {
		navigator.clipboard.writeText(value);
		toast({
			title: "Password copied to clipboard",
		});
	};

	return (
		<section className="password_container">
			<h2>Password Generator</h2>

			<div className="password-input_wrapper">
				<Input className="h-20 text-xl text-center" value={password} />
			</div>

			<div className="password-config_wrapper">
				<h3>Password Length</h3>
				<p>{passwordLenght}</p>
				<Slider
					value={[passwordLenght]}
					onValueChange={(e) => getPassword(e[0])}
					min={4}
					max={100}
					step={1}
				/>
			</div>
			<div className="modifiers">
				<Button
					onClick={() => setContainsUppercase((prev) => !prev)}
					variant={containsUppercase ? "secondary" : "outline"}
				>
					Uppercase
				</Button>
				<Button
					onClick={() => setContainsLowercase((prev) => !prev)}
					variant={containsLowercase ? "secondary" : "outline"}
				>
					Lowercase
				</Button>
				<Button
					onClick={() => setContainsNumbers((prev) => !prev)}
					variant={containsNumbers ? "secondary" : "outline"}
				>
					Numbers
				</Button>
				<Button
					onClick={() => setContainsSpecials((prev) => !prev)}
					variant={containsSpecials ? "secondary" : "outline"}
				>
					Specials
				</Button>
			</div>
			<div className="controls">
				<Button onClick={() => copyToClipboard(password)} className="gap-3">
					<Copy />
					Copy
				</Button>
				<Button onClick={() => getPassword(passwordLenght)} className="gap-3">
					<RotateCcw />
					Reset
				</Button>
			</div>
		</section>
	);
};

export default Password;
