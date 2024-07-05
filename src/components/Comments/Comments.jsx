import "./Comments.scss";
import avatar from '../../assets/images/avatar.jpg'
import React from "react";

export default function Comments({comment}) {
  
    return (
      <div className="comment">
        <div className="comment__avatar"><img className="comment__img" src={avatar}/> </div>
        <div className="comment__box">
          <div className="comment__metadata">
            {comment.name} - {comment.time}
          </div>
          <div className="comment__text">{comment.comment}</div>
        </div>
      </div>
    );
  
}
