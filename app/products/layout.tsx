import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Products - Honeybadger',
    description: 'This is the products of Honeybadger website.',
}

export default function ProductsLayout({
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