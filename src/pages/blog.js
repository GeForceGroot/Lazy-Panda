import React from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'
import { useEffect } from 'react'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

const Blog = (props) => {
  console.log(props);
  const [blogs, setBlogs] = useState(props.allBlogs);

 const fetchData = () => {
    setTimeout(() => {
      this.setBlogs({
        item: this.state.items.concat(Array.from({ length: 20 }))
      })
    },1500);
  };

  return (
    <>

      {/* // Step 1: Collect all the files from blogdata directory. 
// Step 2: Iterate through the and Display them.  */}


      <main className={styles.main}>
        <InfiniteScroll

          //This is important field to render the next data

          dataLength={blogs.length}
          next={fetchData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className={styles.blogs}>
          <div className={styles.conta}>
            {blogs.map((blogitem) => {
              return <div key={blogitem.title} className={styles.blogItem}>
                <Link href={`/blogpost/${blogitem.slug}`} >
                  <h3>{blogitem.title}</h3>
                </Link>
                <p>{blogitem.content.substr(0, 150)}...</p>
              </div>
            })}
          </div>
        </div>
        </InfiniteScroll>
        
      </main>
    </>
  )
}
export async function getServerSideProps(context) {
  let data = await fetch('http://localhost:3000/api/blogs')
  let allBlogs = await data.json()

  return {
    // Will pass all pages as a content
    props: { allBlogs },
  }
}

export default Blog
