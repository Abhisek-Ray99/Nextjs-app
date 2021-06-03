import React from 'react'
import Link from 'next/link';

const index = () => {
    return (
        <div>
            <h1>All notes are available</h1>
            <Link href="/about">
                Go to about page
            </Link>
            <br />
            <Link href="/notes/[id]" as="/notes/12">
                <a>
                    Go to note page
                </a>

            </Link>
        </div>
    )
}

export default index
