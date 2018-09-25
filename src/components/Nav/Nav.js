import React from "react";
import {Column, Row, Container } from "../Grid";
import "./Nav.css";

const Nav = props => {
    return (
    <section>
        <Container>
            <Row>
                <Column size="md-4 sm-6">
                    <span id="title">Emoji-Clicker</span>
                </Column>
                <Column size="md-4 sm-6">
                    <span id="end"> { props.gameOver } </span>
                </Column>
                <Column size="md-2 sm-6">
                    Score: { props.score }
                </Column>
                <Column size="md-2 sm-6">
                    Top-Score: { props.topScore }
                </Column> 
            </Row>
        </Container>
    </section>
    );
};

export default Nav;