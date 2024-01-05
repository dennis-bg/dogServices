import React from 'react'
import { DatePicker } from 'antd';

const dateFormat = 'MM/DD/YYYY';

export const FormattedDatePicker = () => {
    return (
        <DatePicker format={dateFormat}/>
    )
}