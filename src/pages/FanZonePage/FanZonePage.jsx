import "./FanZonePage.scss";
import React from "react";
import Option from "../../components/Option/Option.jsx";
import Comments from "../../components/Comments/Comments.jsx";
import commentsData from "../../data/comments.json";

export default function FanZonePage() {
  return (
    <>
      <main>
        <div>
          <h1>Fan Zone</h1>
          <Option option={"Team 1"} />
          <Option option={"Team 2"} />
        </div>
        {commentsData.map((comment) => {
          return (
            <div className="comments__comment" key={comment.name}>
              <Comments comment={comment} />
            </div>
          );
        })}
      </main>
    </>
  );
}
