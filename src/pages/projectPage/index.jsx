import { useState } from 'react';
import Filters from '../../components/Filters';
import TodoComponent from '../../components/TodoComponent';
import Weather from '../../components/Weather';
import styles from './ProjectPageStyle.module.sass';

function ProjectPage () {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className={styles.majorContainer}>
      {!isFilterOpen && (
        <button
          className={styles.filterBtn}
          onClick={() => setIsFilterOpen(true)}
        >
          Filters
        </button>
      )}
      {isFilterOpen && (
        <>
          <div
            className={styles.filtersOverlay}
            onClick={() => setIsFilterOpen(false)}
          />
          <div className={styles.filtersModal}>
            <button
              className={styles.closeBtn}
              onClick={() => setIsFilterOpen(false)}
            >
              ×
            </button>
            <Filters />
          </div>
        </>
      )}
      <aside>
        <div className={styles.weatherStyles}>
          <Weather />
        </div>
        <div className={styles.hideFilter}>
          <Filters />
        </div>
      </aside>
      <TodoComponent />
    </div>
  );
}

export default ProjectPage;
