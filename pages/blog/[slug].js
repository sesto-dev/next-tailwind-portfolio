import React, { useRef } from 'react'
import Container from '../../components/Container'

export default BlogPost = ({ post }) => {
    const textOne = useRef()
    const textTwo = useRef()

    return (
        <Container title={post.title}>
            <div className="mt-10 flex flex-col">
                <img
                    className="w-full h-96 rounded-lg shadow-lg object-cover"
                    src={post.image}
                    alt={post.title}
                />
                <h1
                    ref={textOne}
                    className="mt-10 text-4xl mob:text-2xl laptop:text-6xl text-bold"
                >
                    {post.title}
                </h1>
                <h2
                    ref={textTwo}
                    className="mt-2 text-xl max-w-4xl text-darkgray opacity-50"
                >
                    {post.tagline}
                </h2>
            </div>
        </Container>
    )
}
