import React from 'react';
import ButtonUnderline from '../buttonUnderline/ButtonUnderline';
import { MidSection } from '../buttonUnderline/CallerList';

const MidText = ({homeText}) => {
    const buttonCall = MidSection;
    return (
        <div className="mid-text">
            <p className="heading">{homeText.heading}</p>
            <p className="para">{homeText.para}</p>
            <ButtonUnderline buttonCall={buttonCall} />
        </div>
    );
};

export default MidText;
