import React from 'react';
import { Jumbotron, Display4, Lead, Button } from 'bootstrap-4-react';

const JumbotronSample = () => (
    <Jumbotron>
    <Display4>Женя привет!</Display4>
    <Lead>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</Lead>
    <hr className="my-4" />
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p>
      Библиотеку и несколько примеров взял вот здесь:
      &nbsp;
      <a href="https://bootstrap-4-react.com/">https://bootstrap-4-react.com/</a>
    </p>
    <Button primary lg>Learn more</Button>
  </Jumbotron>
);

export default JumbotronSample;
