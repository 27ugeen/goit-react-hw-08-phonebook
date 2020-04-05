import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import ContactEditor from '../../components/ContactEditor';
import ContactsList from '../../components/ContactsList/ContactsListContainer';
import ContactFilter from '../../components/ContactFilter';
import Section from '../../components/Section';
import Notification from '../../components/Notification';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
import contactsOperations from '../../redux/contacts/contactsOperation';
import withTheme from '../../components/hoc/withTheme';


class ContactsView extends Component {
  // componentDidMount() {
  //   this.props.onFetchContacts();
  // }
  render() {
    const { items, error, theme } = this.props;
    return (
      <div className={`phoneBook ${theme.config.bodyBg}`}>
        <Section title="Phonebook">
          <ContactEditor />
        </Section>
        <Section title="Contacts">
          {error && <Notification message={error.message} />}
          <CSSTransition
            in={items.length > 1}
            classNames="visible"
            timeout={250}
            appear={true}
            unmountOnExit
          >
            <ContactFilter />
          </CSSTransition>
          {!error && items.length < 1 && <p>There is no contact yet...</p>}
          <CSSTransition
            in={items.length >= 1}
            classNames="visible"
            timeout={250}
            appear={true}
            unmountOnExit
          >
            <ContactsList />
          </CSSTransition>
        </Section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: contactsSelectors.getContactsItems(state),
  error: contactsSelectors.getError(state),
});

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchCotacts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTheme(ContactsView));
