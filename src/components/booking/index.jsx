import React from "react";
import { Container } from "../common/container";

export const Booking = () => {

    const styles = {
        // height: "100vh",
        width: "100%",
        display: "flex"
    }

    const styles2 = {
        color: "white",
        backgroundColor: "#0cc0df",
        border: "3px solid #0097b2",
        borderRadius: "2em",
        padding: "2em",
        textAlign: "center",
        marginTop: "5em",
        marginBottom: "5em"
    }

    return (
        <div style={styles}>
            <Container>
                <div style={styles2}>
                    <h2>Booking through this site coming very soon! In the mean time, feel free to contact me by texting or calling me at 201.615.3821</h2>
                </div>
            </Container>
        </div>
    )
}