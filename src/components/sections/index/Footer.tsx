import Divider from "@/components/Divider";

export default function Footer({ lastUpdated }: { lastUpdated: string }) {
    const formattedDate = new Date(lastUpdated).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    return (
        <>
            <footer className="max-w-4xl w-full flex flex-col mx-auto pt-4 pb-2">
                <Divider />
                <p className="text-center font-semibold text-base pt-2">
                    Built with Next.js + TailwindCSS • Crafted by Arrays with ❤️
                </p>
                <p className="text-center font-medium brightness-75 text-base">
                    Last updated: {formattedDate}
                </p>
            </footer>
        </>
    );
}
