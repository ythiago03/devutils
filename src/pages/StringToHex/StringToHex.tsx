import { useEffect, useState } from "react";

import { toast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";

import { ArrowDownUp, Copy, Equal, RotateCcw } from "lucide-react";

import "./StringToHex.scss";
import { Textarea } from "@/components/ui/textarea";

const StringToHex = () => {
	const [stringValue, setSetstringValue] = useState<string>("");
	const [hexValue, setHexValue] = useState<string>("");
	const [isSwaped, setIsSwaped] = useState<boolean>(false);

	const convertStringToHex = (): void => {
		console.log("convertendo string");
	};

	const convertHexToString = (): void => {
		console.log("convertendo hex");
	};

	const copyToClipboard = (value: string) => {
		navigator.clipboard.writeText(value);
		toast({
			title: "Password copied to clipboard",
		});
	};

	return (
		<section className="password_container">
			<h2>String to Hex</h2>

			<div className="textarea_container">
				{isSwaped ? (
					<Textarea
						value={hexValue}
						onChange={(e) => setHexValue(e.target.value)}
						className="mt-5 mx-auto min-h-44"
						placeholder="Hex input..."
					/>
				) : (
					<Textarea
						value={stringValue}
						onChange={(e) => setSetstringValue(e.target.value)}
						className="mt-5 mx-auto min-h-44"
						placeholder="Text input..."
					/>
				)}
			</div>

			<div className="modifiers">
				<Button
					className="gap-3"
					onClick={() => {
						if (isSwaped) {
							convertHexToString();
							return;
						}
						convertStringToHex();
					}}
					variant={"secondary"}
				>
					<Equal />
					Convert
				</Button>
				<Button
					className="gap-3"
					onClick={() => console.log("clicou")}
					variant={"secondary"}
				>
					<RotateCcw />
					Reset
				</Button>
				<Button
					className="gap-3"
					onClick={() => setIsSwaped((prev) => !prev)}
					variant={"secondary"}
				>
					<ArrowDownUp />
					Swap
				</Button>
			</div>

			<div className="textarea_container">
				{isSwaped ? (
					<Textarea
						value={stringValue}
						onChange={(e) => setSetstringValue(e.target.value)}
						className="mt-5 mx-auto min-h-44"
						placeholder="Text output..."
					/>
				) : (
					<Textarea
						value={hexValue}
						onChange={(e) => setHexValue(e.target.value)}
						className="mt-5 mx-auto min-h-44"
						placeholder="Hex output..."
					/>
				)}
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

export default StringToHex;
