import React from "react"
import { Radio } from "antd";
import { WalkingService } from "../Walking";
import { SittingService } from "../Sitting";
import { OvernightService } from "../OverNight";

export const Services  = {
    Walk: "walk",
    Sit: "sit",
    Overnight: "overnight"
}

export const ServiceSelection  = (props) => {
    return (
        <>
            <div style={{paddingTop: "3em", paddingBottom: "1.5em", width: "100%"}}>
                <Radio.Group defaultValue={props.service} onChange={props.onSwitch} buttonStyle="solid">
                    <Radio.Button value={Services.Walk}>Dog Walking</Radio.Button>
                    <Radio.Button value={Services.Sit}>Dog Sitting</Radio.Button>
                    <Radio.Button value={Services.Overnight}>Over Night</Radio.Button>
                </Radio.Group>
            </div>
            {props.service === Services.Walk && <WalkingService/>}
            {props.service === Services.Sit && <SittingService/>}
            {props.service === Services.Overnight && <OvernightService/>}
        </>
    )
}
