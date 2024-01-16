import React, { useState } from "react";
import TextArea from "antd/es/input/TextArea";
import { Container } from "../common/container";
import { Input } from 'antd';
import { ServiceSelection } from "./ServiceSelection";
import { Services } from "./ServiceSelection";



export const Booking = () => {

    const [name, setName] = useState('');
    const [pet, setPet] = useState('');
    const [service, setService] = useState(Services.Walk);
    const [notes, setNotes] = useState('');


    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handlePetChange = (e) => {
        setPet(e.target.value)
    }

    const handleServiceSwitch = (service) => {
        setService(service.target.value)
    }

    const handleNotesChange = (e) => {
        setNotes(e.target.value)
    }

    const styles = {
        height: "100vh",
        width: "100%",
        display: "flex",
        paddingTop: "5vh"
    }

    return (
        <div style={styles}>
            <Container>
                <p>Your Name</p>
                <Input placeholder="Your name" value={name} onChange={handleNameChange}/>
                <p>Pet's Name</p>
                <Input placeholder="Pet's name" value={pet} onChange={handlePetChange}/>
                <p>Phone Number</p>
                <Input placeholder="Phone Number"/>
                <ServiceSelection service={service} onSwitch={handleServiceSwitch}/>
                <p>Notes</p>
                <TextArea rows={6} placeholder="Please provide any important details regarding your pet's behaviors, rules, walking routes, etc." value={notes} onChange={handleNotesChange}/>
            </Container>
        </div>
    )
}