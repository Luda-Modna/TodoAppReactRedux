import React from 'react';
import Filters from '../../components/Filters';
import TodoComponent from '../../components/TodoComponent';
import Weather from '../../components/Weather';
import styles from './ProjectPageStyle.module.sass'

function ProjectPage () {
  return (
    <div className={styles.majorContainer}>
      <Filters />
      <TodoComponent />
      <Weather />
    </div>
  );
}

export default ProjectPage;
