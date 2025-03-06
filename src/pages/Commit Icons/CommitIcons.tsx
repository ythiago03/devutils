import { getDocs, collection } from "firebase/firestore";
import { db } from "@/config/firebase";
import { useCallback, useEffect, useState } from "react";

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import "./CommitIcons.scss";

interface Icon {
	id: string;
	code: string;
	unicode: string;
	conventional: string;
}

const CommitIcons = () => {
	const [icons, setIcons] = useState<Icon[] | null>(null);

	const getCommitIcons = useCallback(async (): Promise<void> => {
		try {
			const publicIconsRef = collection(db, "commit-icons");
			const data = await getDocs(publicIconsRef);

			const filteredData: Icon[] = data.docs.map((doc): Icon => {
				const docData = doc.data();
				return {
					id: doc.id,
					code: docData.code || "",
					unicode: docData.unicode || "",
					conventional: docData.conventional || "",
				};
			});

			setIcons(filteredData);
		} catch (error) {
			console.error("An error ocurred while fetching icons:", error);
		}
	}, []);

	useEffect(() => {
		getCommitIcons();
	}, [getCommitIcons]);

	return (
		<section data-testid="card-container" className="icons_container">
			<h1>Conventional commit icons</h1>
			<Table>
				<TableCaption>A list of icons for conventional commits.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">Icon</TableHead>
						<TableHead>Type</TableHead>
						<TableHead>Code</TableHead>
						<TableHead className="text-center">Copy to clipboard</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{icons ? (
						icons.map((icon) => (
							<TableRow key={icon.id}>
								<TableCell
									className="font-medium"
									// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
									dangerouslySetInnerHTML={{ __html: icon.unicode }}
								/>
								<TableCell>{icon.conventional}</TableCell>
								<TableCell>{icon.code}</TableCell>
								<TableCell className="text-center">
									<button
										type="button"
										onClick={() => {
											navigator.clipboard.writeText(icon.code);
										}}
										className="material-symbols-outlined"
									>
										content_paste
									</button>
								</TableCell>
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell colSpan={4} className="h-24 text-center">
								No icons found
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</section>
	);
};

export default CommitIcons;
