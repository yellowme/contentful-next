import { useEffect, useState } from 'react'
import Head from 'next/head'
import Post from '../components/post'

const space = process.env.SPACE_ID
const token = process.env.TOKEN

console.log(space, token)

const client = require('contentful').createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.TOKEN
})

function HomePage() {
  async function fetchEntries() {
    const entries = await client.getEntries()
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  const [posts, setPosts] = useState([])

  async function getPosts() {
    const allPosts = await fetchEntries()
    setPosts([...allPosts])
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <Head>
        <title>Next.js + Contentful</title>
        <link
          rel="stylesheet"
          href="https://css.zeit.sh/v1.css"
          type="text/css"
        />
      </Head>
      {posts.length > 0
        ? posts.map(p => (
            <Post
              alt={p.fields.alt}
              date={p.fields.date}
              key={p.fields.title}
              image={p.fields.img}
              title={p.fields.title}
              url={p.fields.url}
            />
          ))
        : null}
    </>
  )
}

export default HomePage