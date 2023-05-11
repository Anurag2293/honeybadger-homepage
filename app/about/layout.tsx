import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About - Honeybadger',
    description: 'This is the about section. You can contact us here.',
}

export default function AboutLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )
}