import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURREN,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
	const intialState = {
		contacts: [
			{
				id: 1,
				name: 'Jill Johnson',
				email: 'jill@gmail.com',
				phone: '111-111-111',
				type: 'personal',
			},
			{
				id: 2,
				name: 'Sam Smith',
				email: 'sam@gmail.com',
				phone: '222-222-222',
				type: 'professional',
			},
		],
	};

	const [state, dispatch] = useReducer(contactReducer, intialState);

	// Add Contact
	const addContact = (contact) => {
		contact.id = uuidv4();
		dispatch({ type: ADD_CONTACT, payload: contact });
	};

	// Delete Contact

	// Set Current Contact

	// Clear Current Contact

	// Update Contact

	// Filter Contacts

	// Clear Filter

	return (
		<ContactContext.Provider
			value={{ contacts: state.contacts, addContact }}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
