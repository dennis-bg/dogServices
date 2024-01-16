import React from 'react'
import { TimePicker } from 'antd';

const timeFormat = 'h:mm a'
const { RangePicker } = TimePicker;

export const FormattedTimePicker = ({ range }) => range 
    ? <RangePicker format={timeFormat} minuteStep={15} showNow={false}/>
    : <TimePicker format={timeFormat} minuteStep={15} showNow={false} placement='bottomRight'/>
