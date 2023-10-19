import React from "react";
import "./Post.scss";
import { LikeOutlined, ShareAltOutlined, CommentOutlined } from '@ant-design/icons';


interface PostProps {
    authorLogo: string,
    author: string;
    time: string;
    content: string;
    imageUrl: string;
    comments: number;
    shares: number;
    likes: string;
}

const Post: React.FC<PostProps> = (props) => {
    return (
        <>
            <div className="post-container">
                <div className="post-header">
                    <div>
                        <img src={props.authorLogo} alt="" />
                    </div>
                    <div className="post-author-info">
                        <div>
                            <span id="author-name">{props.author} </span> <span> @goal · {props.time}</span>
                        </div>
                        <div>{props.content}</div>
                    </div>
                </div>
                <div>
                    <img src={props.imageUrl} alt="" />
                </div>
                <div className="media-stats">
                    <div id="comment-icon"><CommentOutlined /> {props.comments}</div>
                    <div id="share-icon"><ShareAltOutlined /> {props.shares}</div>
                    <div id="like-icon"><LikeOutlined /> {props.likes}</div>
                </div>
            </div>
        </>
    );
}

export default Post;