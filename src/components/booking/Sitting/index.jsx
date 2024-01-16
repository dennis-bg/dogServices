import React from 'react';
import { FormattedDatePicker } from '../../common/FormattedDatePicker';
import { FormattedTimePicker } from '../../common/FormattedTimePicker';
import { LocationPicker } from '../../common/LocationPicker';

export const SittingService = () => {

    return (
        <>
            <div style={{paddingBottom: "1em"}}>
                <FormattedDatePicker range={false}/>
            </div>
            <FormattedTimePicker range={true}/>
            <LocationPicker/>
        </>
    )
}