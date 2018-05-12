import React, { Component, Fragment } from 'react';

class CommentDetail extends Component {
  render() {
    const comments = this.props.data.comments;
    return (
      <Fragment>
        {comments.length > 0 &&
        <div className="comments">
          <h5>Comments:</h5>
          {comments.map((comment) =>
          <div className="comment" key={comment.id}>
            <div className="meta"><span className="user">{comment.user}</span> said <span className="time" title={comment.time}>{comment.time_ago}</span>:</div>
            <div className="content" dangerouslySetInnerHTML={{ __html: comment.content }}></div>
          </div>
          )}
        </div>
        }
        <style jsx>{`
          h5 {
            background-color: #eee;
            color: #111;
            padding: 15px 20px;
            margin-top: 0px;
            margin-bottom: 5px;
            font-size: 16px;
          }
          .comment {
            font-size: 13px;
            padding: 20px;
            border-bottom: solid 1px #eee;
            padding-bottom: 0;
          }
          .comment .meta {
            background-color: #eee;
            padding: 5px 10px;
            font-size: 13px;
            color: #666;
            border-radius: 3px;
          }
          .comment .user {
            color: #000;
          }
          .comment .content {
            line-height: 1.3em;
            padding: 10px;
            padding-top: 0;
            word-wrap: break-word;
            overflow: scroll;
          }
        `}</style>
      </Fragment>
    )
  }
}

export default CommentDetail;
