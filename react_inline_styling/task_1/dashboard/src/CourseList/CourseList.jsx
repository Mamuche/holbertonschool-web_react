import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
  courseListContainer: {
    width: '100%',
    marginTop: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  table: {
    width: '100%',
    border: '1px solid #ccc',
    borderCollapse: 'collapse',
  },
  th: {
    border: '1px solid #ccc',
    padding: '8px',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  td: {
    border: '1px solid #ccc',
    padding: '8px',
    textAlign: 'left',
  },
  noCourse: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

function CourseList({ courses = [] }) {
  return (
    <div className={css(styles.courseListContainer)}>
      <table className={css(styles.table)}>
        {courses.length === 0 ? (
          <tbody>
			<tr>
				<td className={css(styles.noCourse)} colSpan="2">No course available yet</td>
			</tr>
		  </tbody>
        ) : (
          <>
            <thead>
              <CourseListRow textFirstCell="Available courses" isHeader={true} />
              <CourseListRow
                textFirstCell="Course name"
                textSecondCell="Credit"
                isHeader={true}
              />
            </thead>
            <tbody>
              {courses.map((course) => (
                <CourseListRow
                  key={course.id}
                  textFirstCell={course.name}
                  textSecondCell={course.credit.toString()}
                />
              ))}
            </tbody>
          </>
        )}
      </table>
    </div>
  );
}

CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      credit: PropTypes.number.isRequired,
    })
  ),
};

export default CourseList;
