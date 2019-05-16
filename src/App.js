import {h} from 'preact';

function App(props)
{
    const posts = props.posts.map((post,i)=>{
        return <li key={i}>{post.title}</li>
    });
return(
    <ul>
        {posts}
    </ul>
);
}

export default App;