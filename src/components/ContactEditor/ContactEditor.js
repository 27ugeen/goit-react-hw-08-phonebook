import React, { Component } from 'react';
import shortid from 'shortid';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import Notification from '../../components/Notification';
import { FormField, FormButton } from '../Form';
import PropTypes from 'prop-types';
import styles from './ContactEditor.module.css';

class ContactEditor extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
  };

  state = {
    name: '',
    number: '',
    alertMessage: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  setAlertMessage = message => {
    this.setState({ alertMessage: message });
    setTimeout(() => this.setState({ alertMessage: '' }), 3000);
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const contacts = this.props.items;

    if (!isNaN(+name)) {
      this.setAlertMessage('Enter valid Name');
      return;
    }

    if (isNaN(+number)) {
      this.setAlertMessage('Enter valid Number');
      return;
    }

    if (
      contacts.some(
        contacts =>
          contacts.name.toLowerCase() === this.state.name.toLowerCase(),
      )
    ) {
      this.setAlertMessage(`${name} is already in contacts`);
      return;
    }

    this.props.onAddContact(name, number);

    this.setState({ name: '', number: '' });
  };

  idName = shortid.generate();
  idNumber = shortid.generate();

  render() {
    const { name, number, alertMessage } = this.state;

    return (
      <>
        <CSSTransition
          in={alertMessage !== ''}
          classNames={styles}
          timeout={250}
          unmountOnExit
        >
          <Notification message={alertMessage} />
        </CSSTransition>
        <form className="form" onSubmit={this.handleSubmit}>
          <FormField
            label="Name"
            type="text"
            placeholder="Enter user name*"
            value={name}
            handleChange={this.handleInputChange}
            name="name"
            id={this.idName}
          />
          <FormField
            label="Number"
            type="text"
            placeholder="Enter user phone number*"
            value={number}
            handleChange={this.handleInputChange}
            name="number"
            id={this.idNumber}
          />
          <FormButton type="submit" buttonLabel="Add contact" />
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  items: contactsSelectors.getContactsItems(state),
});

export default connect(mapStateToProps, {
  onAddContact: contactsOperations.addContact,
})(ContactEditor);
