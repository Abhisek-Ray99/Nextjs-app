import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>My webpage</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <h1>Home page</h1>
      <Link href="/notes">
        Go to notes page
      </Link>
      <button onClick={e => router.push('/about')}>
        Go to About page
      </button>
    </div>
  )
}
