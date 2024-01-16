import React, { useState } from "react";
import { Radio, Input } from 'antd';

const Locations = {
    Home: "home",
    Boarding: "boarding"
}

const Meeting = {
    DropOff: "dropOff",
    PickUp: "pickUp"
}

export const LocationPicker = () => {

    const [location, setLocation] = useState(Locations.Home);
    const [meeting, setMeeting] = useState(Meeting.DropOff);

    const handleLocationChange = (location) => {
        setLocation(location.target.value)
    }

    const handleMeetingChange = (meeting) => {
        setMeeting(meeting.target.value)
    }

    return (
        <>
            <div style={{paddingTop: "1em", width: "100%"}}>
                <Radio.Group defaultValue="home" buttonStyle="solid" onChange={handleLocationChange}>
                    <Radio.Button value="home">Home Visit</Radio.Button>
                    <Radio.Button value="boarding">Boarding</Radio.Button>
                </Radio.Group>
            </div>
            {location === Locations.Home 
                ? <>
                    <p>Home Address</p>
                    <Input placeholder="Home Address"/>
                </>
                : <>    
                    <div style={{paddingTop: "1em", width: "100%"}}>
                        <Radio.Group defaultValue="dropOff" buttonStyle="solid" onChange={handleMeetingChange}>
                            <Radio.Button value="dropOff">Drop Off</Radio.Button>
                            <Radio.Button value="pickUp">Pick Up</Radio.Button>
                        </Radio.Group>
                    </div>
                    {meeting === Meeting.DropOff
                        ? <p>Drop Off address will be sent to you via text</p>
                        : <>
                            <p>Pick Up Address</p>
                            <Input placeholder="Pick Up Address"/>
                        </>
                    }
                </>
            }
        </>
    )
}