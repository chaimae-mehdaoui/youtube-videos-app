import React from 'react';
import './VideoList.css';

const VideoList = ({ videos }) => {
    return (
        <div className="video-list">
            {videos.map((video) => (
                <div key={video.id.videoId} className="video-item">
                    
                    <iframe
                        width="320"
                        height="180"
                        src={`https://www.youtube.com/embed/${video.id.videoId}`}
                        title={video.snippet.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="video-player"
                    ></iframe>
                    <div className="video-info">
                        <h3 className="video-title">{video.snippet.title}</h3>
                        <p className="video-description">{video.snippet.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VideoList;
