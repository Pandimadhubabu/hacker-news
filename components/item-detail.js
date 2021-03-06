import React from 'react';

import Meta from './meta';

export default function ItemDetail(props) {
  const {
    item,
    item: { url, title, domain, content },
  } = props;
  return (
    <>
      <div className="item">
        <h3>
          <a href={url} className="link" rel="nofollow">
            {title}
          </a>
          {domain && <span className="domain">{`(${domain})`}</span>}
        </h3>
        {content && (
          <div className="content">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        )}
        <Meta item={item} />
      </div>
      <style jsx>
        {`
          .item {
            padding: 20px;
            border-bottom: solid 1px #eee;
          }
          .content {
            font-size: 14px;
            margin: 20px 0;
          }
          h3 {
            font-size: 24px;
            margin-top: 0;
            margin-bottom: 5px;
          }
          a {
            color: #000;
            text-decoration: none;
          }
          a:hover {
            color: #000;
            text-decoration: underline;
          }
          .domain {
            font-size: 14px;
            color: #666;
            display: block;
            margin-top: 8px;
          }
        `}
      </style>
    </>
  );
}
