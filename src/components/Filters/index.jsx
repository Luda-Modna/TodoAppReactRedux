import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import { setFilter, setOverdueFilter } from '../../store/slices/filterSlice';
import InputFilters from './InputFilters';
import styles from './../../pages/projectPage/ProjectPageStyle.module.sass'

function Filters ({ filterTask, filterOverdue }) {
  return (
    <aside className={styles.filterContainer}>
      <h2>Filter</h2>
      <Formik
        initialValues={{ status: 'all', overdue: 'all' }}
        onSubmit={values => {
          filterTask(values.status);
          filterOverdue(values.overdue);
        }}
      >
        <Form>
          <div className={styles.filterGroup}>
            <h3>Status</h3>
            <InputFilters name='status' value='all' label='All' />
            <InputFilters name='status' value='completed' label='Completed' />
            <InputFilters name='status' value='incomplete' label='Incomplete' />
          </div>
          <div className={styles.filterGroup}>
            <h3>Overdue</h3>
            <InputFilters name='overdue' value='all' label='All' />
            <InputFilters name='overdue' value='overdue' label='Overdue only' />
            <InputFilters
              name='overdue'
              value='notOverdue'
              label='Not overdue'
            />
          </div>
          <button className={styles.button} type='submit'>Apply Filter</button>
        </Form>
      </Formik>
    </aside>
  );
}

const mapStateToProps = ({ filter }) => ({ filter });

const mapDispatchToProps = dispatch => ({
  filterTask: status => dispatch(setFilter(status)),
  filterOverdue: overdue => dispatch(setOverdueFilter(overdue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
