import Header from "@/components/Header";
import Footer from "@/components/footer";
import BackToTopButton from "@/components/BackToTopButton";

function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Header />
			<main className="">{children}</main>
			<Footer />

			<BackToTopButton />
		</>
	);
}
export default HomeLayout;
