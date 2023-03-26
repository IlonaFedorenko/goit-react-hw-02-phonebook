import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export function ContactList({ contacts, deleteContact }) {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => {
        <li className={css.item}>
          <p>
            {name}:{number}
          </p>
        </li>;
        <button
          className={css.button}
          type="button"
          onClick={() => deleteContact(id)}
          value="delete"
        >
          Delete contact
        </button>;
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};