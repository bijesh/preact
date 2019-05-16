import fetch from 'isomorphic-fetch';

export default function getPosts()
{
    return fetch('http://localhost:3005/posts').then(res=>res.json());

}