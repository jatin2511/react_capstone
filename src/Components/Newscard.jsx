import React, { useEffect, useState } from 'react';

function Newscard() {
    const [newsdata, setNewsData] = useState({});

    async function fetchnews() {
        const url = 'https://newsapi.org/v2/everything?q=tesla&from=2024-05-07&sortBy=publishedAt&apiKey=885384aca4dc4eaeaeb212bc327a1a6c';
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            if (result.articles && result.articles.length > 0) {
                return result.articles.find((article)=>article.urlToImange!==null && article.urlToImage!==undefined)
            } else {
                throw new Error('No articles found');
            }
        } catch (error) {
            console.error('Error fetching news:', error);
            return null;
        }
    }

    useEffect(() => {
        async function fetchdata() {
            const data = await fetchnews();
            setNewsData((pre)=>({...pre,imageurl:data.urlToImage}));
            setNewsData((pre)=>({...pre,title:data.title}));
            setNewsData((pre)=>({...pre,content:data.content}));
            
        }
        fetchdata();
    }, []);
   
    return (
        <div className='h-full w-full border-inherit'>
            <div className='w-full h-3/5 bg-center rounded-t-xl flex flex-col justify-end' style={{ backgroundImage: `url(${newsdata ? newsdata.imageurl :''})` }}>
            <div className='h-7/24 bg-black bg-opacity-70 text-white text-2xl font-semibold p-2 py-4'>{newsdata ?newsdata.title:'api rate limit exhausted'}</div>
            </div>
            <div className='w-full h-2/5 p-4 text-2xl'>{newsdata ?newsdata.content:"api rate limit exhausted"}
            </div>
        </div>
    );
}

export default Newscard;