import PartyForm from "../PartyForm/PartyForm";

const PartyDetail = (props) => {

	const { partyDetails, handleClick, isPending } = props;
  const partyInformation = {
    name: partyDetails.party_name,
    location: partyDetails.location,
    startDate: new Date(partyDetails.start_time),
    endDate: partyDetails.end_time,
    description: partyDetails.description,
  };


	return (
		<div>
			<PartyForm
        isReadOnly={true}
        isPending={isPending}
        handleClick={handleClick}
        partyDetails={partyInformation}
        buttonText='RSVP'
      />
		</div>
	);
};

export default PartyDetail;
