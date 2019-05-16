import {h} from 'preact';
import {render} from 'preact-render-to-string';
import App from './src/App';
import getPosts from './src/posts';
import express from 'express';
import fs from 'fs';

const index = fs.readFileSync(__dirname+'/index.html','utf8');

const app = express();
app.get('**',(req,res)=>{
    getPosts().then(posts =>{
    const html = render(<App posts={posts}/>);
    const postsHtml =  index.replace('<!---:: APP :: --->',html);
    const finalHtml= postsHtml.replace( index.replace('/** ::POSTS:: **/',JSON.stringify(posts)));
    res.send(finalHtml);
});
});

app.listen(3007);