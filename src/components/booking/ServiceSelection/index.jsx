import React, { useState } from "react"
import { Radio } from "antd";
import { WalkingService } from "../Walking";
import { SittingService } from "../Sitting";
import { OvernightService } from "../OverNight";
const Services  = {
    Walk: "walk",
    Sit: "sit",
    Overnight: "overnight"
}

export const ServiceSelection  = () => {
    const [service, setService] = useState(Services.Walk);

    const handleServiceSwitch = (service) => {
        setService(service.target.value)
    }

    return (
        <>
            <div style={{paddingTop: "3em", paddingBottom: "1.5em", width: "100%"}} onChange={handleServiceSwitch}>
                <Radio.Group defaultValue={Services.Walk} buttonStyle="solid">
                    <Radio.Button value={Services.Walk}>Dog Walking</Radio.Button>
                    <Radio.Button value={Services.Sit}>Dog Sitting</Radio.Button>
                    <Radio.Button value={Services.Overnight}>Over Night</Radio.Button>
                </Radio.Group>
            </div>
            {service === Services.Walk && <WalkingService/>}
            {service === Services.Sit && <SittingService/>}
            {service === Services.Overnight && <OvernightService/>}
        </>
    )
}
