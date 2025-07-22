import React from 'react';
import Filters from '../../components/Filters';
import TodoComponent from '../../components/TodoComponent';
import Weather from '../../components/Weather';

function ProjectPage () {
  return (
    <>
      <Filters />
      <TodoComponent />
      <Weather />
    </>
  );
}

export default ProjectPage;
