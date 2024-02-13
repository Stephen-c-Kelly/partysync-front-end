// import './NewParty.css';
import Header from '../../components/Header/Header';
import Image from '../../components/HomeImage/HomeImage';
import PartyForm from '../../components/PartyForm/PartyForm';

const NewParty = (props) => {
	
	// const {  } = props;

	return (
		<div>
		<Header text='New Party' />
		<Image />
			<PartyForm />
		</div>
	);
};

export default NewParty;
