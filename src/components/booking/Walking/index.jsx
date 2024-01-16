import React from 'react';
import { Radio, Input } from 'antd';
import { FormattedDatePicker } from '../../common/FormattedDatePicker';
import { FormattedTimePicker } from '../../common/FormattedTimePicker';

const styles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
}

export const WalkingService = () => {
    return (
        <>
        <div style={styles}>
            <FormattedDatePicker range={false}/>
            <FormattedTimePicker range={false}/>
        </div>
        <div style={{paddingTop: "1em", width: "100%"}}>
            <Radio.Group defaultValue="half" buttonStyle="solid">
                <Radio.Button value="half">Half Hour</Radio.Button>
                <Radio.Button value="hour">One Hour</Radio.Button>
            </Radio.Group>
        </div>
        <p>Pick Up Address</p>
        <Input placeholder="Pick Up Address"/>
        </>
    )
}