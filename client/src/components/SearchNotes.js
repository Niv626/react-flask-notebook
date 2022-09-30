import React from 'react';
import { MdSearch } from 'react-icons/md';
import './search-notes.css'

const SearchNotes = ({ handleSearchNote }) => {
	return (
		<div className='search-notes'>
			<MdSearch className='search-icons' size='1.3em' />
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='type to search...'
			/>
		</div>
	);
};

export default SearchNotes;