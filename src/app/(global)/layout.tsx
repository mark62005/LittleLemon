import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/shared/BackToTopButton";

function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Header />
			{children}
			<Footer />

			<BackToTopButton />
		</>
	);
}
export default HomeLayout;
