import Head from 'next/head'
import Router, { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

import data from '../../data/portfolio.json'
import { ISOToDate } from '../../utils/date'
import Container from '../../components/Container'

const Blog = ({ posts }) => {
    const text = useRef()

    return (
        <Container>
            <div className="mt-10">
                <h1
                    ref={text}
                    className="mx-auto mob:p-2 text-bold text-6xl laptop:text-8xl w-full"
                >
                    Blog.
                </h1>
                <div className="mt-10 grid grid-cols-1 mob:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 justify-between gap-10">
                    {posts &&
                        posts.map((post) => (
                            <div
                                className="cursor-pointer relative"
                                key={post.slug}
                                onClick={() =>
                                    Router.push(`/blog/${post.slug}`)
                                }
                            >
                                <img
                                    className="w-full h-60 rounded-lg shadow-lg object-cover"
                                    src={post.image}
                                    alt={post.title}
                                />
                                <h2 className="mt-5 text-4xl">{post.title}</h2>
                                <p className="mt-2 opacity-50 text-lg">
                                    {post.preview}
                                </p>
                                <span className="text-sm mt-5 opacity-25">
                                    {ISOToDate(post.date)}
                                </span>
                            </div>
                        ))}
                </div>
            </div>
        </Container>
    )
}

export default Blog
