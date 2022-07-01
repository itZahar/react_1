export default function Posts({posts}) {
    return (
        <div>
            {posts.map(value=><div key={value.id}>{value.body}</div>)}
        </div>
    );
}