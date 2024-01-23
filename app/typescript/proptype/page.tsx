import React from 'react'

const ReactTypescriptRootComp = (props: string) => {
    return (
        <div>

            React Typescript

            <PostList />
        </div>
    )
}

export default ReactTypescriptRootComp

type PostProps = { id: number; title: string; body: string };

// POST CARD
const PostCard = ({ title, body }: PostProps) => {
    return (
        <div className="postCard">
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
};


// GETTING DATA 
async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

// POST LIST 

const PostList = async () => {
    const data: PostProps[] = await getData();
    return (
        <div className="postList">
            {data.map((post) => (
                <PostCard key={post.id} {...post} />
            ))}
        </div>
    );
};

