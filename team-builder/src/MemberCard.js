import React from "react";
import styled from "styled-components";

const bgColor = "#C8C6AF";
const Member = styled.div`
        border: 1px solid black;
        border-radius: 4px;
        margin: 4% 2%;
        width: 400px;
        background-color: ${bgColor};
    `;

export default function MemberCard(props) {
    const {member} = props;

    return(
        <Member className="memberCard">
            <h2>{member.name}</h2>
            <h4>{member.email}</h4>
            <h4>{member.role}</h4>
        </Member>
    )

}