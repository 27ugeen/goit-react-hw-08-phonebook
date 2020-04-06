import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import ContactEditor from '../../components/ContactEditor';
import ContactsList from '../../components/ContactsList/ContactsListContainer';
import ContactFilter from '../../components/ContactFilter';
import Section from '../../components/Section';
import Notification from '../../components/Notification';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';
// import { authSelectors } from '../../redux/auth';

import withTheme from '../../components/hoc/withTheme';

class ContactsView extends Component {
  componentDidMount() {
    // if (!this.props.isLoggedIn) {
    //   this.props.history.replace('/login');

    //   return;
    // }
    this.props.onFetchContacts();
  }

  // componentDidUpdate() {
  //   if (!this.props.isLoggedIn) {
  //     this.props.history.replace('/login');

  //     return;
  //   }
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
  // isLoggedIn: authSelectors.isLoggedIn(state),
});

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchCotacts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTheme(ContactsView));
