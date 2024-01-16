import React from "react";
import { Container } from "../common/container";
import { Input } from 'antd';
import { ServiceSelection } from "./ServiceSelection";
import TextArea from "antd/es/input/TextArea";



export const Booking = () => {

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
                <Input placeholder="Your name"/>
                <p>Pet's Name</p>
                <Input placeholder="Pet's name"/>
                <p>Phone Number</p>
                <Input placeholder="Phone Number"/>
                <ServiceSelection/>
                <p>Notes</p>
                <TextArea rows={6} placeholder="Please provide any important details regarding your pet's behaviors, rules, walking routes, etc."/>
            </Container>
        </div>
    )
}