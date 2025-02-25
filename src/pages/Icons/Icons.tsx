import { getDocs, collection } from "firebase/firestore";
import { db } from "@/config/firebase";
import { useCallback, useEffect, useState } from "react";

import Card from "../../components/Card/Card";
import { Skeleton } from "@/components/ui/skeleton";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

import "./Icons.scss";

interface ApiCard {
	id: string;
	name: string;
	siteUrl: string;
	coverUrl: string;
	type: string;
	description: string;
	badges: string[];
}

interface Icon {
	id: string;
	code: string;
	unicode: string;
	conventional: string;
}

const Icons = () => {
	const [cards, setCards] = useState<ApiCard[] | null>(null);
	const [isCardLoading, setIsCardLoading] = useState<boolean>(true);
	const [icons, setIcons] = useState<Icon[] | null>(null);

	const getIconsSites = useCallback(async (): Promise<void> => {
		try {
			const publicIconsRef = collection(db, "free-icons");
			const data = await getDocs(publicIconsRef);

			const filteredData: ApiCard[] = data.docs.map((doc): ApiCard => {
				const docData = doc.data();
				return {
					id: doc.id,
					name: docData.name || "",
					siteUrl: docData.siteUrl || "",
					coverUrl: docData.coverUrl || "",
					type: docData.type || "",
					description: docData.description || "",
					badges: docData.badges || [""],
				};
			});

			const imagePromises = filteredData.map((card): Promise<void> => {
				return new Promise<void>((resolve, reject) => {
					const img = new Image();
					img.src = card.coverUrl;
					img.onload = () => resolve();
					img.onerror = () => reject();
				});
			});

			await Promise.all(imagePromises);
			setCards(filteredData);
			setIsCardLoading(false);
		} catch (err) {
			console.error(err);
			setIsCardLoading(false);
		}
	}, []);

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
		getIconsSites();
	}, [getIconsSites, getCommitIcons]);

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
			<Separator className="mt-5 mb-5" />

			<h2>Public icons for copy or download</h2>
			{isCardLoading ? (
				<section data-testid="card-skeleton-loading">
					<div className="cards_container">
						{Array(cards ? cards.length : 5)
							.fill(0)
							.map((_, index) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<div key={index} className="flex flex-col space-y-3">
									<Skeleton className="h-[125px] w-[250px] rounded-xl" />
									<div className="space-y-2">
										<Skeleton className="h-4 w-[250px]" />
										<Skeleton className="h-4 w-[200px]" />
									</div>
								</div>
							))}
					</div>
				</section>
			) : (
				<div className="cards_container">
					{cards?.map((card: ApiCard) => (
						<Card key={card.id} card={card} />
					))}
				</div>
			)}
		</section>
	);
};

export default Icons;
