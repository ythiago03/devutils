import { useState } from "react";

import { toast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { ArrowDownUp, Copy, Equal, RotateCcw } from "lucide-react";

import "./StringToHex.scss";

const StringToHex = () => {
	const [stringValue, setStringValue] = useState<string>("");
	const [hexValue, setHexValue] = useState<string>("");
	const [isSwaped, setIsSwaped] = useState<boolean>(false);

	const convertStringToHex = (): void => {
		const textEncoder = new TextEncoder();
		const encodedString = textEncoder.encode(stringValue);

		const hexString = Array.from(encodedString)
			.map((byte) => byte.toString(16).padStart(2, "0"))
			.join(" ");
		setHexValue(hexString);
	};

	const convertHexToString = (): void => {
		const bytes = hexValue.split(" ").map((byte) => Number.parseInt(byte, 16));
		const textDecoder = new TextDecoder("utf-8");

		setStringValue(textDecoder.decode(new Uint8Array(bytes)));
	};

	const resetValues = (): void => {
		setStringValue("");
		setHexValue("");
	};

	const copyToClipboard = (value: string) => {
		navigator.clipboard.writeText(value);
		toast({
			title: isSwaped
				? "String copied to clipboard"
				: "Hex copied to clipboard",
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
						onChange={(e) => setStringValue(e.target.value)}
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
				<Button className="gap-3" onClick={resetValues} variant={"secondary"}>
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
						onChange={(e) => setStringValue(e.target.value)}
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
				<Button
					onClick={() => copyToClipboard(isSwaped ? stringValue : hexValue)}
					className="gap-3"
				>
					<Copy />
					Copy
				</Button>
			</div>
		</section>
	);
};

export default StringToHex;
