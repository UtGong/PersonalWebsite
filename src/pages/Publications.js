import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Publication/Cell';
import data from '../data/publications';

// import Personal from '../components/Stats/Personal';
// import Site from '../components/Stats/Site';

const Publications = () => (
  <Main
    title="Publications"
    description="Jo Jo's publications"
  >
    <article className="post" id="publications">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/publications">Publications</Link></h2>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Publications;
