import Head from 'next/head'

export default function Home () {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name='cryptomus' content='7cda5877' />
        <meta name='prueba' content='123' />
      </Head>
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <h1>Landing BOTS</h1>
      </main>
    </>
  )
}
