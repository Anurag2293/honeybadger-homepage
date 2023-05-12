import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact Us - Honeybadger',
    description: 'Fill this form to get in touch with us.',
}

export default function ContactLayout({
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