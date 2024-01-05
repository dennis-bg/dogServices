import React from 'react'
import { TimePicker } from 'antd';

const timeFormat = 'h:mm a'

export const FormattedTimePicker = () => {
    return (
        <TimePicker format={timeFormat} minuteStep={15} showNow={false}/>
    )
}