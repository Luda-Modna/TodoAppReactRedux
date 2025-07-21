import { connect } from 'react-redux';
import { setFilter } from '../../store/slices/filterSlice';

function Filters ({ filter, filterTask }) {
  const handleChange = ({ target: { value } }) => filterTask(value);

  return (
    <aside>
      <h3>Use Filter</h3>
      <div>
        <label>
          <input
            type='radio'
            name='filter'
            value='all'
            checked={filter === 'all'}
            onChange={handleChange}
          />
          All
        </label>
      </div>
      <div>
        <label>
          <input
            type='radio'
            name='filter'
            value='completed'
            checked={filter === 'completed'}
            onChange={handleChange}
          />
          Completed
        </label>
      </div>
      <div>
        <label>
          <input
            type='radio'
            name='filter'
            value='incomplete'
            checked={filter === 'incomplete'}
            onChange={handleChange}
          />
          Incomplete
        </label>
      </div>
    </aside>
  );
}

const mapStateToProps = ({ filter }) => ({ filter });

const mapDispatchToProps = dispatch => ({
  filterTask: filter => dispatch(setFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
