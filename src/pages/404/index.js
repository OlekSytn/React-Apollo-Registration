import React from 'react';
import { Helmet } from 'react-helmet';

const head = () => {
  return (
    <Helmet bodyAttributes={{ class: "notFound404ErrorPage" }}>
      <title>404 Not Found - React Starter Kit</title>
    </Helmet>
  );
}

export const UnconnectedNotFound = () => (
  <section className="content_block notFound" data-test="notFoundComponent">
    {head()}

    <div className="grid">

      <div className="column column_12_12">
        <div className="content_wrap noBoarder">
          <div className="title">404 Not Found</div>
        </div>
      </div>

    </div>

  </section>
);

export default UnconnectedNotFound;