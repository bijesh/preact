import {h,render} from 'preact';
import  App from './App';
import getPosts from './posts';

if(window.__posts__){
    renderApp(window.__posts__);
}
else
{
    getPosts().then(renderApp);
}

function renderApp(posts)
{
    render(
    <App posts={posts}/>,
    document.querySelector('body'),
    document.querySelector('#root'));
}