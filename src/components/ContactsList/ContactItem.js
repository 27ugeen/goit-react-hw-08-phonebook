import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ContactsList.module.css';

const { contactsListItem, contactButton } = styles;

const ContactItem = ({ name, number, onDeleteContact }) => (
  <li className={contactsListItem}>
    <p>
      {name}: {number}
    </p>
    <button
      type="submit"
      onClick={onDeleteContact}
      className={`${contactButton}`}
    >
      Delete
    </button>
  </li>
);

// ContactItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string,
//   number: PropTypes.string,
//   onDeleteContact: PropTypes.func.isRequired,
//   theme: PropTypes.shape({
//     config: PropTypes.shape({
//       btnBgColor: PropTypes.string.isRequired,
//     }).isRequired,
//   }).isRequired,
// };

export default ContactItem;
