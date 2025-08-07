import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
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
});

const headerStyle = { backgroundColor: '#deb5b545' };
const rowStyle = { backgroundColor: '#f5f5f5ab' };

function CourseListRow({ isHeader = false, textFirstCell = '', textSecondCell = null }) {
  const style = isHeader ? headerStyle : rowStyle;

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr style={style}>
          <th className={css(styles.th)} colSpan="2">{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr style={style}>
          <th className={css(styles.th)}>{textFirstCell}</th>
          <th className={css(styles.th)}>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr style={style}>
        <td className={css(styles.td)}>{textFirstCell}</td>
        <td className={css(styles.td)}>{textSecondCell}</td>
      </tr>
    );
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
