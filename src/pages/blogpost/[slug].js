import React from 'react'
import { useRouter } from 'next/router';
import styles from '@/styles/BlogPost.module.css'
import { useEffect } from 'react';
import { useState } from 'react';


// Step 1: Find the file corresponding to the slug.
// Step 2: Populate them inside the page.

const Slug = (props) => {
  const [blog, setBlog] = useState(props. myBlog)

  return (
    <>
      <main className={styles.main}>
        <h1>
          Title of the page : {blog && blog.title}
        </h1>
        {/* <hr /> */}
        <div className={styles.bloggss}>
          {blog && blog.content}
        </div>
      </main>
    </>
  )
}

export async function  getServerSideProps(context){

const {slug} = context.query; 

  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  let myBlog = await data.json()

  return{
    // Will pass all pages as a content
    props: {myBlog}, 
  }
}

export default Slug;
