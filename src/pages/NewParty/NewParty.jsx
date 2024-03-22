// import './NewParty.css';
import { useState } from 'react';
import Image from '../../components/HomeImage/HomeImage';
import PartyForm from '../../components/PartyForm/PartyForm';
import { createParty } from '../../services/party';
import HorizontalDivider from '../../components/HorizontalDivider/HorizontalDivider';

const NewParty = (props) => {

  const [partyFormData, setPartyFormData] = useState({name: '',
                                                      location: '',
                                                      startDate: '',
                                                      endDate: '',
                                                      description: '',
                                                      invite: ''});

  const createNewParty = async () => {
    const response = await createParty({
      party_name: partyFormData.name,
      location: partyFormData.location,
      start_time: partyFormData.startDate,
      end_time: partyFormData.endDate,
      description: partyFormData.description,
    });
    setPartyFormData({name: '',
                      location: '',
                      startDate: '',
                      endDate: '',
                      description: '',
                      invite: ''});
    console.log('createNewPartyResponse: ', response);
  };

  const updatePartyFormData = (field, newData) => {
    setPartyFormData(
      {
        ...partyFormData,
        [field]: newData,
      }
    );
  };
	
	// const {  } = props;

	return (
		<div>
		<Image />
			<PartyForm handleClick={createNewParty} updatePartyFormData={updatePartyFormData} partyDetails={partyFormData}/>
		</div>
	);
};

export default NewParty;
