import React from 'react'
import { DatePicker } from 'antd';

const dateFormat = 'MM/DD/YYYY';
const { RangePicker } = DatePicker;

export const FormattedDatePicker = ({ range }) => range
    ? <RangePicker format={dateFormat} showToday={false}/>
    : <DatePicker format={dateFormat} showToday={false}/>