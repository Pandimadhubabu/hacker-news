import React, { Component } from 'react';

import get from '../components/fetch';
import Layout from '../components/layout';
import Header from '../components/header';
import ListDetail from '../components/list-detail';
import PageNav from '../components/page-nav';

export default class Index extends Component {
  static async getInitialProps({ query: { type = 'news', page = '1' } }) {
    const json = await get({ type, page });
    return { data: json, page };
  }

  render() {
    const { data, page } = this.props;
    return (
      <Layout>
        <Header page={page}>Top</Header>
        <ListDetail data={data} />
        <PageNav page={page} />
      </Layout>
    );
  }
}
