import React from 'react';
import Link from 'next/link';

import Meta from './meta';

export default function ListDetail(props) {
  const { items } = props;
  return (
    <>
      <ul>
        {items && items.length > 0 ? (
          items.map((item) => (
            <li key={item.id}>
              <h6>
                <Link href={{ pathname: '/item', query: { id: item.id } }}>
                  <a>{item.title}</a>
                </Link>
              </h6>
              <Meta item={item} />
            </li>
          ))
        ) : (
          <li style={{ textAlign: 'center', padding: 40 }}>No posts.</li>
        )}
      </ul>
      <style jsx>
        {`
          li {
            padding: 20px;
            list-style-type: none;
            border-bottom: solid 1px #eee;
          }
          h6 {
            font-size: 20px;
            margin: 0;
            margin-bottom: 2px;
          }
        `}
      </style>
    </>
  );
}
