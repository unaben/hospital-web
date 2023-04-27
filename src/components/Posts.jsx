import React from "react";
import { data } from "../data/data";

const Posts = () => {
  return (
    <section id="posts" className="posts py">
      <div className="container">
        <div className="section-head">
          <h2>Latest Post</h2>
        </div>
        <div className="posts-inner grid">
          {data.posts.map((post, index) => {
            return (
              <article key={index} className="post-item bg-white">
                <div className="img">
                  <img src="images/post-1.jpg" alt="" />
                </div>
                <div className="content">
                  <h4>{post.title}</h4>
                  <p className="text text-sm">{post.descriptionTextOne}</p>
                  <p className="text text-sm">{post.descriptionTextTwo}</p>
                  <div className="info flex">
                    <small className="text text-sm">
                      <i className={post.iconOne}></i> {post.date}
                    </small>
                    <small className="text text-sm">
                      <i className={post.iconTwo}></i> {post.comments}
                    </small>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Posts;
