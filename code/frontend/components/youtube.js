"use client"
import React from 'react'
import { useState } from 'react';

const YouTube = () => {
    const apiKey = 'AIzaSyD1IltMSxyrPxe_kfKvTyGaNK01THb1buY';
    const [datas, setdatas] = useState([])

    function searchVideos() {
        console.log("hiii")
        const query = document.getElementById('searchQuery').value;
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=${query}&key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                setdatas(data.items)
            })
            .catch(error => console.error('Error fetching videos:', error));
    }
    return (
        <div className="bg-gray-100 flex flex-col items-center p-6 text-black">
            <h1 className="text-[40px] font-bold mb-6">Search Video about a Disease</h1>
            <div class="flex w-[800px] mb-6">
                <input type="text" id="searchQuery" placeholder="Search for videos" className="border border-gray-300 p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-[600px]" />
                <button onClick={() => { searchVideos() }} className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 w-[200px]">Search</button>
            </div>
            <div id="videoResults" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
                {datas.slice(0,3).map(item => {
                    const videoId = item.id.videoId;
                    const videoTitle = item.snippet.title;
                    const videoThumbnail = item.snippet.thumbnails.default.url;
                    return (
                        <div className="p-4 rounded-lg shadow-md flex flex-col items-center justify-center m-3 bg-black">
                            <h3 className="text-[20px] font-bold mb-2">{videoTitle}</h3>
                            <img src={videoThumbnail} alt={videoTitle} className="min-w-full mb-2 rounded" />
                            <a href={"https://www.youtube.com/watch?v="+videoId} target="_blank" className="text-blue-500 hover:underline">Watch Video</a>
                            </div>
            )
                })}
        </div>
        </div >
    )
}

export default YouTube