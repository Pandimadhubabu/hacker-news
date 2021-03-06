import React from 'react';
import Head from 'next/head';

export default function Header(props) {
  const { children, page } = props;
  return (
    <>
      <Head>
        <title>
          {`Hacker News - ${children}`}
          {page && page > 1 ? ` (Page ${page})` : ''}
        </title>
      </Head>
      <h2>
        {children}
        {page && page > 1 && <span>{`Page ${page}`}</span>}
      </h2>

      <style jsx>
        {`
          h2 {
            background-color: #ddd;
            color: #000;
            font-size: 28px;
            margin: 0;
            padding: 20px;
            font-weight: bold;
          }
          h2 span {
            float: right;
            color: #666;
            height: 100%;
            vertical-align: center;
            display: block;
            font-size: 14px;
            font-weight: normal;
            position: relative;
            top: 8px;
          }
        `}
      </style>
    </>
  );
}
