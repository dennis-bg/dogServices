import React from 'react';
import { FormattedDatePicker } from '../../common/FormattedDatePicker';
import { FormattedTimePicker } from '../../common/FormattedTimePicker';
import { LocationPicker } from '../../common/LocationPicker';

const styles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
}

export const OvernightService = () => {
    return (
        <>
            <p>Start Date & Time</p>
            <div style={styles}>
                <FormattedDatePicker range={false}/>
                <FormattedTimePicker range={false}/>
            </div>
            <p>End Date & Time</p>
            <div style={styles}>
                <FormattedDatePicker range={false}/>
                <FormattedTimePicker range={false}/>
            </div>
            <LocationPicker/>
        </>
    )
}