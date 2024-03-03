// import theme style scss file
import 'styles/theme.scss';

import { Analytics } from "@vercel/analytics/react"

export const metadata = {
    title: 'Cipher Dashboard',
    description: 'Cipher Music is a sync licensing platform for music labels and artists. We help get music into films, TV shows, advertisements, video games, and more.',
    keywords: 'Cipher, Music, ciphermusic, sync, licensing, sync licensing, music labels, label'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className='bg-light'>
                {children}
            </body>
            <Analytics />
        </html>
    )
}
