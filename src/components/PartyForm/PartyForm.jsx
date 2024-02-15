import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SquareBlueButton from "../Buttons/SquareBlueButton";
import PartyFormField from "../FormFields/PartyFormField";
import PartyFormTextArea from "../FormFields/PartyFormTextArea";

const PartyForm = (props) => {
	const { handleClick, isReadOnly, partyDetails, updatePartyFormData } = props;

  const hasEndDate = ((!isReadOnly) || (isReadOnly && partyDetails.endDate));

	return (
    <div className='m-2 p-2 bg-white'>
      <h2 className='m-2 font-bold'>{partyDetails.name}</h2>
		  <form className='flex flex-col gap-4'>
        { !isReadOnly &&
          <PartyFormField
            isReadOnly={isReadOnly}
            labelName='name'
            handleChange={updatePartyFormData}
            fieldValue={partyDetails.name}
            placeholderText='Party Name'
          /> }
			  <PartyFormField
          isReadOnly={isReadOnly}
          labelName="location"
          handleChange={updatePartyFormData}
          fieldValue={partyDetails.location}
          placeholderText="Location"
        />
        <div className='flex gap-5'>
          <DatePicker
            readOnly={isReadOnly}
            placeholderText='Start Date'
            selected={partyDetails.startDate}
            onChange={date => updatePartyFormData('startDate', date)}
            className='focus:outline-none bg-light-grey placeholder-grey pl-2 py-2 w-full'
          />
          {
            hasEndDate &&
            <DatePicker
            readOnly={isReadOnly}
            placeholderText='End Date'
            selected={partyDetails.endDate}
            onChange={date => updatePartyFormData('endDate', date)}
            className='focus:outline-none bg-light-grey placeholder-grey pl-2 py-2 w-full'
          />
          }
          
    </div>
        <PartyFormTextArea
          isReadOnly={isReadOnly}
          labelName='description'
          handleChange={updatePartyFormData}
          fieldValue={partyDetails.description}
          placeholderText="Info"
        />
        {!isReadOnly && (
          <SquareBlueButton
            disabled={isReadOnly}
            handleClick={(e) => {
              e.preventDefault();
              handleClick();
              
            }} text="Send Out Invites">
          </SquareBlueButton>
        )}
		  </form>
    </div>
	);
};

PartyForm.defaultProps = {
  isReadOnly: false,
  partyDetails: {},
};

export default PartyForm;
/* <PartyFormField labelName="description" placeholderText="Info"/> */
