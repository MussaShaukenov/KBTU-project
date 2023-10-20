import React, { useState } from "react";
import "./Post.scss";
import {
    LikeFilled,
    ShareAltOutlined,
    CommentOutlined,
    MessageFilled,
    SoundFilled,
    LikeOutlined
} from "@ant-design/icons";

interface PostProps {
    authorLogo: string;
    author: string;
    time: string;
    content: string;
    imageUrl: string;
    comments: number;
    shares: number;
    likes: number;
}

const Post: React.FC<PostProps> = (props) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(props.likes);
    const [isCommented, setIsCommented] = useState(false);
    const [commentCount, setCommentCount] = useState(props.comments);
    const [isShared, setIsShared] = useState(false);
    const [shareCount, setShareCount] = useState(props.shares);

    const handleLikeClick = () => {
        if (!isLiked) {
            setLikeCount(likeCount + 1);
        } else {
            setLikeCount(likeCount - 1);
        }
        setIsLiked(!isLiked);
    };

    const handleCommentClick = () => {
        if  (!isCommented) {
            setCommentCount(commentCount + 1);
        } else {
            setCommentCount(commentCount - 1);
        }
        setIsCommented(!isCommented);
    }

    const handleShareClick = () => {
        if  (!isShared) {
            setShareCount(shareCount + 1);
        } else {
            setShareCount(shareCount - 1);
        }
        setIsShared(!isShared);
    }

    return (
        <div className="post-container">
            <div className="post-header">
                <div>
                    <img src={props.authorLogo} alt="" />
                </div>
                <div className="post-author-info">
                    <div>
                        <span id="author-name">{props.author} </span>{" "}
                        <span> @goal · {props.time}</span>
                    </div>
                    <div>{props.content}</div>
                </div>
            </div>
            <div>
                <img src={props.imageUrl} alt="" />
            </div>
            <div className="media-stats">
                <div id="comment-icon" onClick={handleCommentClick}>
                    {isCommented ? (
                        <MessageFilled style={{ color: "dodgerblue" }}/> ) : (
                        <CommentOutlined style={{ color: "gray" }}/>
                    )}{" "} {commentCount}
                </div>
                <div id="share-icon" onClick={handleShareClick}>
                    {isShared ? (
                        <SoundFilled style={{ color: "green" }} />
                    ) : (
                        <ShareAltOutlined style={{ color: "gray" }} />
                    )} {" "} {shareCount}
                </div>
                <div id="like-icon" onClick={handleLikeClick}>
                    {isLiked ? (
                        <LikeFilled style={{ color: "deeppink" }} />
                    ) : (
                        <LikeOutlined style={{ color: "gray" }} />
                    )}{" "}
                    {likeCount}
                </div>
            </div>
        </div>
    );
};

export default Post;
